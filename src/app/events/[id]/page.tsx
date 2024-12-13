import Event from "@/compnents/EventCompnent/Event";
import {Event as EventModel} from "../../../model/event-model";
import { dbConnect } from "@/lib/mongo";
import { User } from "@/model/user-model";

const getAddressFromCoordinates = async (lat: number, lng: number) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch address');
    const data = await response.json();
    return data.display_name;
  } catch (error) {
    console.error('Error getting address:', error);
    return null;
  }
};

export default async function EventPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    await dbConnect();

    const event = await EventModel.findById(id);
    const user = await User.findById(event.user_id);
    
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
      author={user.name}
      author_profile={user.image}
      address={await getAddressFromCoordinates(event.lat, event.lng)}
    />
  );
}