"use client";
import { useState, useEffect } from "react";
import styles from "./EventsPage.module.scss";
import SearchBar from "../SearchBarComponent/SearchBar";
import EventCard from "../EventCardComponent/EventCard";

interface Event {
  _id: string;
  title: string;
  description: string;
  tags: string;
  image: string;
  start_time: string;
  end_time: string;
}

interface EventsPageProps {
  query?: string;
  events_array?: Event[];
}

export default function EventsPage({ query: initialQuery = "", events_array = [] }: EventsPageProps) {
  const [events, setEvents] = useState<Event[]>(events_array);
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    if (query) {
      const filteredEvents = events_array.filter(event =>
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.description.toLowerCase().includes(query.toLowerCase()) ||
        event.tags.toLowerCase().includes(query.toLowerCase())
      );
      setEvents(filteredEvents);
    } else {
      setEvents(events_array);
    }
  }, [query, events_array]);

  return (
    <div className={styles.events_page}>
      <div className={styles.events_page_wrapper}>
        <SearchBar onSearch={(newQuery) => setQuery(newQuery)} header={"Поиск"} />
        <div className={styles.events_page__events}>
          {events.map((event) => (
            <EventCard
              key={event._id}
              user_id={event._id.toString()}
              tags={event.tags.split(" ")}
              title={event.title}
              description={event.description}
              img={event.image}
              end_time={event.end_time}
              start_time={event.start_time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
