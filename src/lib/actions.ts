'use server'

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { Ref } from "react";


export const addPost = async (desc : string, img : string,state : any) => {
    try {
        console.log(desc,img);
        

        const { userId } = auth();
        if (!userId) {
            throw new Error("User auth required")
        }

        const resp = await prisma.post.create({
            data: {
                desc,
                img,
                userId: userId!
            }
        })

        revalidatePath('/')

        return {
            success : "Post added"
        }


    } catch (error) {
        console.log(error);
        return {
            error : "Error in adding post"
        }
    }
}

export const toggleFollow = async (userId: string) => {

    try {

        const { userId: currentUser } = auth();

        if (!currentUser) {
            throw new Error("Auth required")
        }


        const existingUserFollow = await prisma.follower.findFirst({
            where: {
                followerId: currentUser!,
                followingId: userId
            }
        })
        if (existingUserFollow) {
            await prisma.follower.delete({
                where: {
                    id: existingUserFollow.id
                }
            })

            return {
                following: false
            }
        } else {
            const existingUserFollowRequestSent = await prisma.followRequest.findFirst({
                where: {
                    SenderId: currentUser!,
                    RecieverId: userId
                }
            })
            if (existingUserFollowRequestSent) {
                await prisma.followRequest.delete({
                    where: {
                        id: existingUserFollowRequestSent.id
                    }
                })

                return {
                    followingRequestSent: false
                }
            } else {
                await prisma.followRequest.create({
                    data: {
                        SenderId: currentUser!,
                        RecieverId: userId
                    }
                })

                return {
                    followingRequestSent: true
                }
            }
        }

    } catch (error) {
        console.log(error);
        throw new Error("Toggle follow failed")
    }
}

export const toggleBlock = async (userId: string) => {
    try {
        const { userId: currentUser } = auth();

        if (!currentUser) {
            throw new Error("Auth required")
        }

        const existingUserBlocked = await prisma.block.findFirst({
            where: {
                BlockedId: userId,
                BlockerId: currentUser
            }
        })
        // console.log(existingUserBlocked);

        if (existingUserBlocked) {
            await prisma.block.delete({
                where: {
                    id: existingUserBlocked.id
                }
            })

            return {
                blocked: false
            }
        } else {
            await prisma.block.create({
                data: {
                    BlockedId: userId,
                    BlockerId: currentUser
                }
            })

            return {
                blocked: true
            }
        }

    } catch (error) {
        console.log(error);
    }
}

export const acceptRequest = async (userId: string) => {
    try {

        const { userId: currentUser } = auth();

        if (!currentUser) {
            throw new Error("Auth required")
        }

        const followRequest = await prisma.followRequest.findFirst({
            where: {
                SenderId: userId,
                RecieverId: currentUser
            }
        })

        if (followRequest) {
            await prisma.followRequest.delete({
                where: {
                    id: followRequest?.id
                }
            })

            await prisma.follower.create({
                data: {
                    followingId: currentUser,
                    followerId: userId
                }
            })
        }
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong")

    }
}

export const declineRequest = async (userId: string) => {
    try {

        const { userId: currentUser } = auth();

        if (!currentUser) {
            throw new Error("Auth required")
        }

        const followRequest = await prisma.followRequest.findFirst({
            where: {
                SenderId: userId,
                RecieverId: currentUser
            }
        })

        if (followRequest) {
            await prisma.followRequest.delete({
                where: {
                    id: followRequest?.id
                }
            })
        }
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong")

    }
}

export const updateProfile = async (cover: string, currentState: any, formData: FormData) => {

    try {
        const { userId } = auth();

        if (!userId) {
            throw new Error("No user found")
        }

        const formInfo = Object.fromEntries(formData);

        const filterdFields = Object.fromEntries(
            Object.entries(formInfo).filter(([key, val]) => val != '')
        )


        const Profile = z.object({
            cover: z.string().optional(),
            name: z.string().max(60).optional(),
            surname: z.string().max(60).optional(),
            description: z.string().max(300).optional(),
            city: z.string().max(60).optional(),
            school: z.string().max(60).optional(),
            work: z.string().max(60).optional(),
            website: z.string().max(60).optional(),
        })

        const validatedFields = Profile.safeParse({ ...filterdFields, cover });

        if (!validatedFields.success) {
            console.log(Object.entries(validatedFields.error.flatten().fieldErrors));
            return {
                success: "",
                errors: Object.entries(validatedFields.error.flatten().fieldErrors)
            }
        }



        await prisma.user.update({
            where: {
                id: userId
            },
            data: validatedFields.data
        })

        revalidatePath('/profile/' + userId)

        return {
            success: "User information has been updated",
            errors: []
        }

    } catch (error) {

    }
}

export const toggleLike = async (postId: string) => {
    try {
        const { userId } = auth();

        if (!userId) {
            throw new Error("No user found")
        }

        const likedPost = await prisma.like.findFirst({
            where: {
                postId,
                userId
            }
        })
        console.log(likedPost);
        if (likedPost) {
            await prisma.like.delete({
                where: {
                    id: likedPost.id
                }
            })
            
        } else {
            await prisma.like.create({
                data: {
                    postId,
                    userId
                }
            })
        }


    } catch (error) {
        console.log(error);
        throw new Error("Error in toggling the like")
    }
}

export const addComment = async ( postId : string, desc : string) => {
    try {
        const { userId } = auth();    
        

        if (!userId) {
            throw new Error("No user found")
        }

        const newComment = await prisma.comment.create({
            data : {
                userId,
                desc,
                postId
            },
            include : {
                user : true
            }
        })
        console.log(newComment);
        

        return newComment;
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (postId : string, postUser : string) => {
    try {

        const { userId } = auth();    
        
        if (!userId) {
            throw new Error("No user found")
        }

        if(postUser !== userId) {
            throw new Error("Not authorized")
        }


        await prisma.post.delete({
            where : {
                id : postId
            }
        })

        revalidatePath('/');
        revalidatePath('/profile/' + userId);

    } catch (error) {
        console.log(error);
        
    }
}