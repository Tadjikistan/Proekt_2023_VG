import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user.js"

export async function POST(request) {
    const {id, name, email, balance} = await request.json();
    await connectMongoDB();
    await User.create({id, name , email, balance})
    return NextResponse.json({message: "User Registered"}, {status : 201 })
}