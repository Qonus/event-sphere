import { LeafletMap } from "../LeafletMapComponent/LeafletMap";
import styles from "./Event.module.scss"
import Image from "next/image";

export default function Event({
  title = "Заголовок",
  start_time = "00.00.0000",
  end_time="00.00.0000",
  image = "/icon.png",
  description = "Содережание",
  tags = ["Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag",],
  author="Аноним",
  author_profile="/user-icon.png",
  lat=0,
  lng=0,
  address=""
}: any) {
  return (
    <>
        <div className={styles.event}> 
            <div className={styles.event_wrapper}>
                <div className={styles.event__hero_section}>
                    <div className={styles.event__hero_section__author}>
                        От:{" "}
                        <Image
                            className={styles.mevent__hero_section__author__profile}
                            src={author_profile ?? "/default-profile.jpg"}
                            alt="pfp"
                            height={15}
                            width={15}
                        />
                        {author ?? "Аноним"}
                    </div>

                    <div className={styles.event__hero_section__title}>
                        <h1>{title}</h1>
                    </div>
                </div>
                
                <Image 
                    className={styles.event__img}
                    src={image}
                    alt="article_image"
                    layout="intrinsic"
                    width={800}
                    height={400}
                />

                <div className={styles.event__text}>
                    <div className={styles.event__text__description}>
                        <p>{description}</p>
                    </div>

                    <div className={styles.event__text__dates}>
                        <a>Время начала:</a> <p>{start_time}</p>
                    </div>
                    <div className={styles.event__text__dates}>
                        <a>Время конца:</a> <p>{end_time}</p>
                    </div>
                </div>
                
                <div className={styles.event__tags}>
                    {tags.map((tag: any, index: any) => (
                        <span
                            className={styles.event__tags__tag}
                            key={index}
                            >
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className={styles.event__location}>
                    <LeafletMap markers={[{lat: lat, lng: lng, popupText: address}]}></LeafletMap>
                </div>
            </div>
        </div>
    </>
  );
}
