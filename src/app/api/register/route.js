import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectMongoDB();

  try {
    const { username, email, password } = await req.json();
    console.log(username,"UserNAme")
    console.log(email,"email")
    console.log(username,"username")

    const user = await User.findOne({email})
    if(user){
      return NextResponse.json({error:"User Already Exists"},{status:400})
    }
    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser=new User({ username, email, password: hashedPassword });

    const savedUSer = await newUser.save()
    console.log(savedUSer)

    return NextResponse.json({ message: "User registered." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
