import { dbConnect } from "@/lib/mongo";
import { Event } from "@/model/event-model";
import { IEvent } from "@/objects";
import { FilterQuery } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { user_id, title, description, start_time, end_time, image, tags, lat, lng }: IEvent = await request.json();
    await dbConnect();
    const res = await Event.create({ user_id, title, description, start_time, end_time, image, tags, lat, lng });
    return NextResponse.json(res, { status: 201 });
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const query = searchParams.get("query");
    const user_id = searchParams.get("user_id");
  
    await dbConnect();
  
    if (id) {
        const event = await Event.findById(id);
        if (!event) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 });
        }
        return NextResponse.json(event, { status: 200 });
    }
  
    const filter: FilterQuery<IEvent> = {};
    if (query) {
        const regex = new RegExp(query, "i"); // Case-insensitive regex
        filter.$or = [
            { title: regex },
            { description: regex },
            { tags: regex },
        ];
    }
    let events = await Event.find(filter);
    if (user_id) {
        events = events.filter((event) => event.user_id === user_id);
    }

    return NextResponse.json(events, { status: 200 });
}

export async function DELETE(request: Request) {
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
