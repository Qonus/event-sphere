import Image from "next/image"
import styles from "./ProfileCard.module.scss"
import Logout from "../LogoutComponent/Logout"

export default function ProfileCard({name, email, image}: any) {
    return (
        <div className={styles.profile_card + " glass"}>
            <div className={styles.profile_card__info}>
                <Image
                    src={image}
                    width={72}
                    height={72}
                    alt={name + " image"}
                    />
                <div className={styles.profile_card__credentials}>
                    <h3>Username: {name}</h3>
                    <h3>Email: {email}</h3>
                </div>
            </div>
            <Logout />
        </div>
    )
}