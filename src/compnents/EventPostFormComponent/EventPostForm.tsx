"use client";

import { redirect } from "next/navigation";
import { LeafletMap } from "../LeafletMapComponent/LeafletMap";
import styles from "./EventPostForm.module.scss";
import { useState } from "react";
import Image from "next/image";

interface EventPostFormProps {
  user_id: string | number;
}

export default function EventPostForm({ user_id }: EventPostFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [coords, setCoords] = useState<{ lng: number; lat: number; address: string }>({ lng: 0, lat: 0, address: "" });
  const [imageUrl, setImageUrl] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setImageUrl(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/events/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_id,
          title,
          description,
          start_time: startTime,
          end_time: endTime,
          tags,
          image: imageUrl,
          lat: coords.lat,
          lng: coords.lng,
        }),
      });

      console.log(res);
      if (res.ok) {
        alert("Мероприятие опубликовано!");
        redirect("/profile");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form className={styles.postform} onSubmit={handleSubmit}>
      <label>
        <a>Заголовок:</a>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        <a>Описание:</a>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        <a>Начало мероприятия:</a>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </label>
      <label>
        <a> Конец мероприятия: </a>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </label>
      <label>
        <a>Место мероприятия:</a>
        <div className={styles.postform_map} onClick={(e) => e.stopPropagation()}>
          <LeafletMap
            onLocationSelect={(selectedCoords) => setCoords(selectedCoords)}
            markers={
              coords
                ? [
                    {
                      lat: coords.lat,
                      lng: coords.lng,
                      popupText: coords.address,
                    },
                  ]
                : []
            }
          />
        </div>
      </label>
      <label>
        <a> Тэги(разделенные пробелом):</a>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </label>
      <label>
        <a> Ссылка изображения мероприятия: </a>
        <input
          type="text"
          accept="image/*"
          onChange={handleInputChange}
          required
        />
      </label>
      <button className="primary-button" type="submit">
        Опубликовать Мероприятие
      </button>
    </form>
  );
}
