"use client"
import { useState, useEffect } from "react";
import styles from "./EventsPage.module.scss";
import SearchBar from "../SearchBarComponent/SearchBar";
import EventCard from "../EventCardComponent/EventCard";


export default function EventsPage({ query: initialQuery = "", events_array = [] }: any) {
    const [events, setArticles] = useState<any[]>(events_array);
    const [query, setQuery] = useState(initialQuery);
    console.log(events_array);
    useEffect(() => {
        if (query) {
            const filteredArticles = events.filter(event =>
                event.title.toLowerCase().includes(query.toLowerCase()) ||
                event.description.toLowerCase().includes(query.toLowerCase()) ||
                event.tags.toLowerCase().includes(query.toLowerCase())
            );
            setArticles(filteredArticles);
        } else {
            setArticles(events);
        }
    }, [query, events]);

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
                        >
                        </EventCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
