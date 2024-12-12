import LoginForm from "@/compnents/LoginFormComponent/LoginForm";
import styles from "./page.module.scss"

export default function Login() {
    return (
        <div className={styles.login_page}>
            <h2>Авторизация:</h2>
            <LoginForm />
        </div>
    )
}