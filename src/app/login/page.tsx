import LoginForm from "@/compnents/LoginFormComponent/LoginForm";
import styles from "./page.module.scss"

export default function Login() {
    return (
        <div className={styles.login_page}>
            <h3>Авторизация:</h3>
            <LoginForm />
        </div>
    )
}