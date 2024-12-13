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
          start_date={event.start_date}
          end_date={event.end_date}
          image={event.image}
          description={event.description} />
  );
}