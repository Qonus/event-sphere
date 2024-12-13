'use client';
import Image from "next/image";
import styles from "./EventCard.module.scss";
import Link from "next/link";

async function deleteEvent(eventId: string): Promise<void> {
  try {
    const response = await fetch(`/api/events?id=${eventId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Event deleted successfully.");
      // Optionally, refresh the page or remove the deleted event from the UI
    } else {
      const result = await response.json();
      console.error("Failed to delete event:", result.error);
    }
  } catch (error) {
    console.error("Error while deleting event:", error);
  }
}

export default function EventCard({
  user_id = "/",
  title = "Placeholder TITLE",
  description = "Placeholder DESC",
  tags = ["Tag Placeholder", "Remove tags later"],
  img = "/icon.png",
  start_date = "00.00.0000",
  end_date = "00.00.0000",
  my_event = false,
}: any) {
  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the delete button
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
        <div className={styles.event_card__data__status}>Upcoming</div>
        <div className={styles.event_card__data__dates}>
          {start_date} - {end_date}
        </div>
      </div>
      <div className={styles.event_card__image_wrapper}>
        <Image
          className={styles.event_card__image_wrapper__image}
          src={img}
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
        {tags.map((tag: any, index: any) => (
          <span className={styles.event_card__tags} key={index}>
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
