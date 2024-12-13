import Event from "@/compnents/EventCompnent/Event";
import {Event as EventModel} from "../../../model/event-model";
import { dbConnect } from "@/lib/mongo";

export default async function EventPage({ params }: { params: { id: string } }) {
    const { id } = params;
    await dbConnect();

    const event = await EventModel.findById(id);
    
    if (!event) {
      return <p>Event not found.</p>;
      }
  return(
    <Event 
      title={event.title}
      start_time={event.start_time}
      end_time={event.end_time}
      image={event.image}
      description={event.description}
      tags={event.tags.split(" ")}
      lat={event.lat}
      lng={event.lng}
    />
  );
}