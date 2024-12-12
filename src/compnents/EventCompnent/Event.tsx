import styles from "./Event.module.scss"
import Image from "next/image";

export default function Event({
  title = "Заголовок",
  start_date = "00.00.0000",
  end_date="00.00.0000",
  start_time="00:00",
  image = "/icon.png",
  description = "Содережание",
  tags = ["Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag","Placeholder tag",],
  author="Аноним",
  author_profile="/user-icon.png"
}: {
  title: string;
  start_date:string;
  end_date:string;
  start_time?:string;
  image?:string;
  description?: string;
  tags?: string[];
  author?: string;
  author_profile?: string;
}) {
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
                        <a>Даты проведения:</a> <p>{start_date}</p> <p>-</p> <p>{end_date}</p>
                    </div>

                    <div className={styles.event__text__dates}>
                        <a>Время начала:</a> <p>{start_time}</p>
                    </div>
                </div>
                
                <div className={styles.event__tags}>
                    {tags.map((tag, index) => (
                        <span
                            className={styles.event__tags__tag}
                            key={index}
                            >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
}
