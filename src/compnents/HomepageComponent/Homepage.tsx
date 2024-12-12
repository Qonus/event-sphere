import { LeafletMap } from "../LeafletMapComponent/LeafletMap"
import styles from "./Homepage.module.scss"
import EventCard from "../EventCardComponent/EventCard"

export default async function Homepage(){
    return(
        <div className={styles.homepage}>
            <div className={styles.homepage_wrapper}>
                <div className={styles.homepage__hero_section + " glass"}>
                    <div className={styles.homepage__hero_section__header}>
                        <h2>This Is</h2>
                        <h1>Event Sphere!</h1>
                    </div>
                    <div>
                        <p style={{fontSize:'17px'}}> Городская карта событий: находите концерты, выставки, фестивали и другие мероприятия поблизости. Удобный поиск, актуальные данные и лучшие идеи для вашего досуга </p>
                    </div>
                </div>
                
                <div className={styles.homepage__map}>
                    <LeafletMap />
                </div>

                <div className={styles.homepage__top_events}>
                    <EventCard href="/" tags={["Placeholder tag"]}></EventCard>
                    <EventCard href="/" ></EventCard>
                    <EventCard href="/" ></EventCard>
                    <EventCard href="/" ></EventCard>
                </div>
                
            </div>
        </div>
        
    )
    
}