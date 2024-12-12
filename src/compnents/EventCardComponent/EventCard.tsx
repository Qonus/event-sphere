import Image from "next/image";
import styles from "./EventCard.module.scss";
import Link from "next/link";

export default function EventCard({
  href="/",
  title = "Placegolder TITLE",
  description = "placegoler DESC",
  likes = 0,
  tags = ["Тэг Плейсхолдер", "Убрать тэги позже","Тэг Плейсхолдер", "Убрать тэги позже"],
  img = "/icon.png",
  start_date = "00.00.0000",
  end_date="00.00.0000",
}: {
  href?: string;
  title?: string;
  description?: string;
  likes?: number;
  tags?: string[];
  img?: string;
  start_date?:string;
  end_date?:string;
}) {

  return (
    <Link
      href={href}
      className={styles.event_card + " glass"}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.event_card__data}>
          <div className={styles.event_card__data__status}>
            Upcoming
          </div>

          <div className={styles.event_card__data__dates}>
            {start_date}-{end_date}
          </div>
      </div>

      <div className={styles.event_card__image_wrapper}>
          <Image 
          className={styles.event_card__image_wrapper__image}
          src={img}
          alt="event image"
          width={500}
          height={250}/>
      </div>

      <div className={styles.event_card__text}>
        <div className={styles.event_card__text__title}>
          {title}
        </div>

        <div className={styles.event_card__text__description}> 
          {description}
        </div>
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