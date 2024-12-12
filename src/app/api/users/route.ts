import { dbConnect } from "@/lib/mongo";
import { User } from "@/model/user-model";
import { NextResponse } from "next/server";

export async function POST (request: any) {
    const {name, email, image} = await request.json();
    await dbConnect();
    await User.create({name, email, image});
    return NextResponse.json({message: "User Registered" }, { status: 201});
}