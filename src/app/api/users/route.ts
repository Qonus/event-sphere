import { dbConnect } from "@/lib/mongo";
import { User } from "@/model/user-model";
import { NextResponse } from "next/server";

export async function POST (request: any) {
    const {name, email, image} = await request.json();
    await dbConnect();
    const res = await User.create({name, email, image});
    return NextResponse.json(res, { status: 201});
}