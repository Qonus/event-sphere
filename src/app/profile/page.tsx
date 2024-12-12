import { auth } from "@/auth";
import ProfileCard from "@/compnents/ProfileCardComponent/ProfileCard";
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
      <ProfileCard name={session?.user?.name} email={session?.user?.email} image={session?.user?.image}/>
      </>
    )
}