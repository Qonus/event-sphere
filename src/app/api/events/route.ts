import { dbConnect } from "@/lib/mongo";
import { Event } from "@/model/event-model";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    const { user_id, title, description, start_time, end_time, image, tags, lat, lng } = await request.json();
    await dbConnect();
    const res = await Event.create({ user_id, title, description, start_time, end_time, image, tags, lat, lng });
    return NextResponse.json(res, { status: 201 });
}

export async function GET(request: any) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    await dbConnect();
    
    if (id) {
        const event = await Event.findById(id);
        if (!event) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 });
        }
        return NextResponse.json(event, { status: 200 });
    }

    const events = await Event.find({});
    return NextResponse.json(events, { status: 200 });
}

export async function DELETE(request: any) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }
    await dbConnect();
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
        return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Event deleted successfully", deletedEvent }, { status: 200 });
}