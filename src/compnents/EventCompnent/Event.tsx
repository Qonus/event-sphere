import styles from "./Event.module.scss"
import Image from "next/image";

export default function Event({
  title = "Заголовок",
  start_date = "00.00.0000",
  end_date="00.00.0000",
  image = "/icon.png",
  description = "Содережание",
  tags = ["Placeholder tag"]
}: {
  title: string;
  start_date:string;
  end_date:string;
  image?:string;
  description?: string;
  tags?: string[];
}) {
  return (
    <>
        <div className={styles.event}> 
            <div className={styles.event_wrapper}>
                <div className={styles.event__title}>
                    <h1>{title}</h1>
                </div>
                <Image 
                    className={styles.event__img}
                    src={image}
                    alt="article_image"
                    width={800}
                    height={400}
                    layout="responsive"
                />

                <div className={styles.event__text}>
                    <div className={styles.event__text__description}>
                        <p>{description}</p>
                    </div>
                    
                    <div className={styles.event__text__dates}>
                        <a>Время проведения:</a> <p>{start_date}</p> <p>-</p> <p>{end_date}</p>
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
