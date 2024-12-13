import EventsPage from "@/compnents/EventsPageComponent/EventsPage";
import { fetchEvents } from "@/functions";

export async function deleteEvent(eventId: string): Promise<void> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/events?id=${eventId}`, {
        method: "DELETE",
    });
  
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete event");
    }
  
    console.log("Event deleted successfully!");
  }

export default async function Events() {
    return(
    <EventsPage events_array={await fetchEvents()} />
    )
}