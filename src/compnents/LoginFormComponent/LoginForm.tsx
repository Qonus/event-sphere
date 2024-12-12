import { doSocialLogin } from "@/app/actions";
import styles from "./LoginForm.module.scss"

export default function LoginForm() {
    return (
        <form className={styles.login_form} action={doSocialLogin}>
            <button type="submit" name="action" value="google">
                Продолжить с Google
            </button>
        </form>
    )
}