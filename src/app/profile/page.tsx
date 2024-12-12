import { auth } from "@/auth";
import { redirect } from 'next/navigation'

export default async function Profile(){
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }

    return(
      <>
      <div></div>
      <h1>Добропожаловать, {session?.user?.name}</h1>
      </>
    )
}