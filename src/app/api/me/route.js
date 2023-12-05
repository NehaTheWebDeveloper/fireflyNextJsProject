import { getDataFromToken } from "@/getDatafromToken";
import { NextResponse,NextRequest } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export const GET = async(request)=>{
    try {
        const userId = await getDataFromToken(request)
        const userData = await User.findOne({_id:userId}).select("-password")
        return NextResponse.json({
            message:"User Found",
            data :userData
        })
        
    } catch (error) {
        return NextResponse.json({error:error. })
    }
}
