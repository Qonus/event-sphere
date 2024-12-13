import EventsPage from "@/compnents/EventsPageComponent/EventsPage";

async function fetchEvents() {
    const response = await fetch("http://localhost:3000/api/events", {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch events");
    }

    return response.json();
}

export async function deleteEvent(eventId: string): Promise<void> {
    const response = await fetch(`http://localhost:3000/api/events?id=${eventId}`, {
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