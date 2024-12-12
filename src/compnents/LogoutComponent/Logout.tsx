import { doLogout } from "@/app/actions";
import styles from "./Logout.module.scss"

export default function Logout() {
    return (
        <form action={doLogout}>
            <button className={styles.logout} type="submit">Выйти</button>
        </form>
    )
}