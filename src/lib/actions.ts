'use server'

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { revalidatePath } from "next/cache";
import { error } from "console";
import { z } from "zod";


export const addPost = async (formData: FormData) => {
    try {

        const { userId } = auth();
        if (!userId) {
            return
        }
        const formInfo = Object.fromEntries(formData)
        const resp = await prisma.post.create({
            data: {
                desc: formInfo.desc as string,
                userId: userId!
            }
        })

    } catch (error) {
        console.log(error);

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
                blocked : true
            }
        }

    } catch (error) {
        console.log(error);
    }
}

export const acceptRequest = async (userId : string) => {
    try {

        const { userId: currentUser } = auth();

        if (!currentUser) {
            throw new Error("Auth required")
        }

        const followRequest = await prisma.followRequest.findFirst({
            where : {
                SenderId : userId,
                RecieverId : currentUser
            }
        })

        if(followRequest) {
            await prisma.followRequest.delete({
                where : {
                    id : followRequest?.id
                }
            })

            await prisma.follower.create({
                data : {
                    followingId : currentUser,
                    followerId : userId
                }
            })
        }
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong")
        
    }
}

export const declineRequest = async (userId : string) => {
    try {

        const { userId: currentUser } = auth();

        if (!currentUser) {
            throw new Error("Auth required")
        }

        const followRequest = await prisma.followRequest.findFirst({
            where : {
                SenderId : userId,
                RecieverId : currentUser
            }
        })

        if(followRequest) {
            await prisma.followRequest.delete({
                where : {
                    id : followRequest?.id
                }
            })
        }
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong")
        
    }
}

export const updateProfile = async (cover : string, currentState : any,formData : FormData) => {
    
    try {
        const {userId} = auth();

        if(!userId){
            throw new Error("No user found")
        }

        const formInfo = Object.fromEntries(formData);
        
        const filterdFields = Object.fromEntries(
            Object.entries(formInfo).filter(([key,val]) => val != '')
        )
        

        const Profile = z.object({
            cover : z.string().optional(),
            name : z.string().max(60).optional(),
            surname : z.string().max(60).optional(),
            description : z.string().max(300).optional(),
            city : z.string().max(60).optional(),
            school : z.string().max(60).optional(),
            work : z.string().max(60).optional(),
            website : z.string().max(60).optional(),
        })

        const validatedFields = Profile.safeParse({...filterdFields, cover});

        if(!validatedFields.success) {
            console.log(Object.entries(validatedFields.error.flatten().fieldErrors));
            return {
                success : "",
                errors : Object.entries(validatedFields.error.flatten().fieldErrors)
            }
        }

        

        await prisma.user.update({
            where : {
                id : userId
            },
            data : validatedFields.data
        })

        return {
            success : "User information has been updated",
            errors : []
        }
        
    } catch (error) {
        
    }
}