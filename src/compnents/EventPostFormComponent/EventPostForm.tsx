"use client";

import {
  LeafletMap
} from "../LeafletMapComponent/LeafletMap";
import styles from "./EventPostForm.module.scss";
import { useState } from "react";

export default function EventPostForm({ user_id }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [coords, setCoords] = useState({ lng: 0, lat: 0, address: "" });
  const [image, setImage] = useState<File | null>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!image) {
      return alert("Загрузите картинку мероприятия.");
    }
  
    try {
      const formData = new FormData();
      formData.append("user_id", user_id);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("start_time", startTime);
      formData.append("end_time", endTime);
      formData.append("coords", JSON.stringify(coords));
      formData.append("tags", JSON.stringify(tags));
      formData.append("image", image);
      const res = await fetch(`${process.env.URL}/api/events`, {
        method: "POST",
        body: formData,
      });
  
      console.log(res);
      const data = await res.json();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  

  return (
    <form className={styles.postform} onSubmit={handleSubmit}>
      <label>
        Заголовок:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Описание:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Начало мероприятия:
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </label>
      <label>
        Конец мероприятия:
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </label>
      <label>
        Место мероприятия:
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
        Тэги (разделенные запятой):
        <input
          type="text"
          value={tags.join(", ")}
          onChange={(e) =>
            setTags(e.target.value.split(",").map((tag) => tag.trim()))
          }
        />
      </label>
      <label>
        Изображение мероприятия:
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
      </label>
      <button className="primary-button" type="submit">
        Опубликовать Мероприятие
      </button>
    </form>
  );
}
