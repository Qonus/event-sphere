import { auth } from "@/auth";
import ProfileCard from "@/compnents/ProfileCardComponent/ProfileCard";
import { redirect } from 'next/navigation'
import styles from "./page.module.scss"
import EventCard from "@/compnents/EventCardComponent/EventCard";

export default async function Profile(){
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }

    return(
      <div className={styles.profile_page}>
        <div className="hr">Добро пожаловать, {session?.user?.name}</div>
          <div className={styles.profile_page_wrapper}>
            <ProfileCard name={session?.user?.name} email={session?.user?.email} image={session?.user?.image}/>

            <div className={styles.profile_page__events}>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
            </div>
          </div>
      </div>
    )
}