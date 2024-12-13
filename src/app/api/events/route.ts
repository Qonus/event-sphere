import { dbConnect } from "@/lib/mongo";
import { Event } from "@/model/event-model";
import { NextResponse } from "next/server";

export async function POST (request: any) {
    // {user_id, title, description, start_time, end_time, image, coords, tags}
    const {user_id, title, description, start_time, end_time, image, tags, lat, lng} = await request.json();
    await dbConnect();
    const res = await Event.create({user_id, title, description, start_time, end_time, image, tags, lat, lng});
    return NextResponse.json(res, { status: 201});
}