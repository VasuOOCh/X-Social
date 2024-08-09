import prisma from "./client"

export const fetchUser = async (id : string) => {
    try {
        const user = await prisma.user.findFirst({
            where : {
                id : id
            },
            include : {
                _count : {
                    select : {
                        followers : true,
                        followings : true,
                        posts : true
                    }
                }
            }
        })
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("User fetching Failed")
    }
}