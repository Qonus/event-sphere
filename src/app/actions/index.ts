'use server'

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData : FormData
) {
    const action = formData.get('action');

    if (typeof action === 'string') {
        await signIn(action, { redirectTo: "/profile" });
    } else {
        console.error('Invalid action value');
    }

}

export async function doLogout () {
    await signOut({ redirectTo: "/"});
}