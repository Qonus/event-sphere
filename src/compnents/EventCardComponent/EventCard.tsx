import Image from "next/image";
import styles from "./EventCard.module.scss";
import Link from "next/link";

export default function EventCard({
  href,
  title = "Placegolder TITLE",
  description = "placegoler DESC",
  likes = 0,
  tags = ["Тэг Плейсхолдер", "Убрать тэги позже"],
  img = "/icon.png"
}: {
  href: string;
  title?: string;
  description?: string;
  likes?: number;
  tags?: string[];
  img?: string;
}) {
  return (
    <Link
      href={href}
      className={styles.event_card + " glass"}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.event_card__image_wrapper}>
        <div className={styles.event_card__image_wrapper__image}>
          <Image 
          src={img}
          alt="event image"
          width={500}
          height={250}/>
        </div>
      </div>

      <div className={styles.event_card__text}>
        <div className={styles.event_card__text__title}>
          {title}
        </div>

        <details className={styles.event_card__text__description}>
          <summary>увидеть больше</summary>
          {description}
        </details>
      </div>

      <div
          style={{
            padding: "10px",
            marginTop: "20px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {tags.map((tag, index) => (
            <span
              className={styles.event_card__tags}
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      
    </Link>
  );
}
{/* 

        */}