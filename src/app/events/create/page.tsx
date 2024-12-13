
import { auth } from "@/auth";
import EventPostForm from "@/compnents/EventPostFormComponent/EventPostForm";
import styles from "./page.module.scss"
import { redirect } from 'next/navigation'

export default async function EventFormPage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }
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