import { doSocialLogin } from "@/app/actions";
import styles from "./LoginForm.module.scss"

export default function LoginForm() {
    return (
        <form action={doSocialLogin}>
            <button  className={styles.login_form} type="submit" name="action" value="google">
                Продолжить с Google
            </button>
        </form>
    )
}