'use client';
import Image from "next/image";
import styles from "./EventCard.module.scss";
import Link from "next/link";
import CustomImage from "../CustomImage";

async function deleteEvent(eventId: string): Promise<void> {
  try {
    const response = await fetch(`/api/events?id=${eventId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Event deleted successfully.");
    } else {
      const result = await response.json();
      console.error("Failed to delete event:", result.error);
    }
  } catch (error) {
    console.error("Error while deleting event:", error);
  }
}

interface EventCardProps {
  user_id: string;
  title?: string;
  description?: string;
  tags?: string[];
  img?: string;
  start_time?: string;
  end_time?: string;
  my_event?: boolean;
}

export default function EventCard({
  user_id = "/",
  title = "Placeholder TITLE",
  description = "Placeholder DESC",
  tags = ["Tag Placeholder", "Remove tags later"],
  img = "/icon.png",
  start_time = "00.00.0000",
  end_time = "00.00.0000",
  my_event = false,
}: EventCardProps) {
  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    await deleteEvent(user_id);
  };

  return (
    <Link
      href={"/events/" + user_id}
      className={styles.event_card + " glass"}
      style={{ textDecoration: "none" }}
    >
      {my_event && (
        <button
          className={styles.event_card__delete}
          onClick={handleDelete}
        >
          <Image
            className={styles.event_card__delete__icon}
            src="/delete.svg"
            alt="delete button"
            width={25}
            height={25}
          />
        </button>
      )}
      <div className={styles.event_card__data}>
        <div className={styles.event_card__data__status + " " + (new Date() < new Date(start_time) ? "primary" : (new Date() > new Date(end_time) ? "negative" : "gray"))}>{(new Date() < new Date(start_time) ? "Скоро" : (new Date() > new Date(end_time)) ? "Прошедший" : "Идет")}</div>
        <div className={styles.event_card__data__dates}>
          {start_time} - {end_time}
        </div>
      </div>
      <div className={styles.event_card__image_wrapper}>
        <CustomImage
          className={styles.event_card__image_wrapper__image}
          src={img}
          defaultSrc="/icon.png"
          alt="event image"
          width={500}
          height={250}
        />
      </div>
      <div className={styles.event_card__text}>
        <div className={styles.event_card__text__title}>{title}</div>
        <div className={styles.event_card__text__description}>{description}</div>
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
          <span className={styles.event_card__tags} key={index}>
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
