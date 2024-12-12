import { auth } from "@/auth";
import ProfileCard from "@/compnents/ProfileCardComponent/ProfileCard";
import { redirect } from 'next/navigation'
import styles from "./page.module.scss"

export default async function Profile(){
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }

    return(
      <div className={styles.profile_page}>
        <div className="hr">Добро пожаловать, {session?.user?.name}</div>
        <ProfileCard name={session?.user?.name} email={session?.user?.email} image={session?.user?.image}/>
      </div>
    )
}