import { auth } from "@/auth";
import ProfileCard from "@/compnents/ProfileCardComponent/ProfileCard";
import { redirect } from 'next/navigation'
import styles from "./page.module.scss"
import EventCard from "@/compnents/EventCardComponent/EventCard";
import { fetchEvents } from "@/functions";
import { IEvent } from "@/objects";

export default async function Profile(){
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }
    const events = await fetchEvents({user_id: session.user.id});
    return(
      <div className={styles.profile_page}>
        <div className="hr">Добро пожаловать, {session?.user?.name}</div>
          <div className={styles.profile_page_wrapper}>
            <ProfileCard name={session?.user?.name} email={session?.user?.email} image={session?.user?.image}/>

            <div className={styles.profile_page__users_events_text}>
                <h1>Ваши События:</h1>
            </div>

            <div className={styles.profile_page__events}>
                  {events.map((event: IEvent) => (
                        <EventCard
                            key={event._id}
                            user_id={event._id.toString()}
                            tags={event.tags.split(" ")}
                            title={event.title}
                            description={event.description}
                            img={event.image}
                            end_time={event.end_time}
                            start_time={event.start_time}
                            my_event={true}
                        >
                        </EventCard>
                    ))}
            </div>
          </div>
      </div>
    )
}