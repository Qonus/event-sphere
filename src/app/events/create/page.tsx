
import { auth } from "@/auth";
import EventPostForm from "@/compnents/EventPostFormComponent/EventPostForm";
import styles from "./page.module.scss"
import { useSession } from "next-auth/react";

export default async function EventFormPage() {
    const session = await auth();
    return (
    <>
    <div className={styles.event_form_page}>
        <div className={styles.event_form_page_wrapper}>
            <h2>Ваше мероприятие:</h2>
            <EventPostForm user_id={session?.user?.id}/>
        </div>
    </div>
    </>
    );
}