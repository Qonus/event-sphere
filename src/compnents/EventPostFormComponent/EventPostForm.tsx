"use client";

import { redirect } from "next/navigation";
import {
  LeafletMap
} from "../LeafletMapComponent/LeafletMap";
import styles from "./EventPostForm.module.scss";
import { useState } from "react";

export default function EventPostForm({ user_id }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [coords, setCoords] = useState({ lng: 0, lat: 0, address: "" });
  //const [image, setImage] = useState<File | null>(null);
  const [image, setImage] = useState("");

  // Handle file selection
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!image) {
      return alert("Загрузите картинку мероприятия.");
    }
  
    try {
      const res = await fetch(`http://localhost:3000/api/events/`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({user_id: user_id, title: title, description: description, start_time: startTime, end_time: endTime, tags: tags, image: image, lat: coords.lat, lng: coords.lng}),
      });
  
      console.log(res);
      if (res.ok) {
        redirect("/profile");
      }
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
          value={tags}
          onChange={(e) =>
            setTags(e.target.value)
          }
        />
      </label>
      <label>
        Ссылка изображения мероприятия:
        <input
          type="text"
          accept="image/*"
          onChange={(e) =>
            setImage(e.target.value)
          }
          required
        />
      </label>
      <p>Ваше изображение: <img src={image} alt="" /></p>
      <button className="primary-button" type="submit">
        Опубликовать Мероприятие
      </button>
    </form>
  );
}
