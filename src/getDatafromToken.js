import { jwt } from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = (request)=>{
 try {
    const token = request.cookies.get("token")?.value || ""
   const decodedToken =  jwt.verify(token,process.env.NEXTAUTH_SECRET)

   return decodedToken.id
    
 } catch (error) {
    throw new  Error(error.message)
 }
}