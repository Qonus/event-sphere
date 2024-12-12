"use client"
import { useState } from "react";
import styles from "./EventsPage.module.scss"
import SearchBar from "../SearchBarComponent/SearchBar"
import Event from "../EventCompnent/Event";
import EventCard from "../EventCardComponent/EventCard";

interface EventsPageProps {
    query?: string ;
}


export default function EventsPage({ query: initialQuery = ""}: EventsPageProps) {
    const [articles, setArticles] = useState<Event[]>([]);
    const [query, setQuery] = useState(initialQuery || "");
    return(
        <div className={styles.events_page}>
            <div className={styles.events_page_wrapper}>
                <SearchBar onSearch={(newQuery) => setQuery(newQuery)}  header={"Поиск событий"} />

                <div className={styles.events_page__events}>
                    <EventCard href="/" tags={["Placeholder tag"]}></EventCard>
                    <EventCard href="/" ></EventCard>
                    <EventCard href="/" ></EventCard>
                    <EventCard href="/" ></EventCard>
                </div>
            </div>
        </div>
        
    )
    
}