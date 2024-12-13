import { LeafletMap } from "../LeafletMapComponent/LeafletMap";
import styles from "./Homepage.module.scss";
import EventCard from "../EventCardComponent/EventCard";
import { fetchEvents } from "@/functions";

export default async function Homepage() {
    try {
        const events = await fetchEvents(); // Fetch events data

        // Map events to markers
        const markers = events.map((event: any) => ({
            lat: event.lat,
            lng: event.lng,
            popupText: event.title, // Title as the popup text
        }));

        return (
            <div className={styles.homepage}>
                <div className={styles.homepage_wrapper}>
                    <div className={styles.homepage__hero_section + " glass"}>
                        <div className={styles.homepage__hero_section__header}>
                            <h2>This Is</h2>
                            <h1>Event Sphere!</h1>
                        </div>
                        <div>
                            <p style={{ fontSize: "17px" }}>
                                Городская карта событий: находите концерты, выставки, фестивали и другие мероприятия поблизости.
                                Удобный поиск, актуальные данные и лучшие идеи для вашего досуга.
                            </p>
                        </div>
                    </div>

                    <div className={styles.homepage__map}>
                        <LeafletMap markers={markers} />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching events:", error);

        return (
            <div className={styles.homepage}>
                <div className={styles.homepage_wrapper}>
                    <p>Failed to load events. Please try again later.</p>
                </div>
            </div>
        );
    }
}
