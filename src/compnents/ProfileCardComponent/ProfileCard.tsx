import Image from "next/image"
import styles from "./ProfileCard.module.scss"

export default function ProfileCard({name, email, image}: any) {
    return (
        <div className={styles.profile_card}>
            <div className={styles.profile_card_wrapper}>
                <h3>{name}</h3>
                <h3>{email}</h3>
            </div>
            <Image
                src={image}
                width={72}
                height={72}
                alt={name + " image"}
            />

        </div>
    )
}