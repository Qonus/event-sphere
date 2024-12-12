import { doSocialLogin } from "@/app/actions";


export default function LoginForm() {
    return (
        <form action={doSocialLogin}>
            <button type="submit" name="action" value="google">
                Продолжить с Google
            </button>
        </form>
    )
}