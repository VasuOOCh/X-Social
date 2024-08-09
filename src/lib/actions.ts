'use server'

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";


export const addPost =async (formData : FormData) => {
    try {
        const {userId} = auth();
        if(!userId) {
            return
        }
        const formInfo = Object.fromEntries(formData)
        const resp =await prisma.post.create({
            data : {
                desc : formInfo.desc as string,
                userId : userId!
            }
        })
        
    } catch (error) {
        console.log(error);
        
    }
}