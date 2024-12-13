// @ts-nocheck
import CustomImage from "../CustomImage";
import { LeafletMap } from "../LeafletMapComponent/LeafletMap";
import Weather from "../WeatherComponent/Weather";
import styles from "./Event.module.scss";
import Image from "next/image";

interface EventProps {
  title?: string;
  start_time?: string;
  end_time?: string;
  image?: string;
  description?: string;
  tags?: string[];
  author?: string;
  author_profile?: string;
  lat?: number;
  lng?: number;
  address?: string;
}

export default function Event({
  title = "Заголовок",
  start_time = "00.00.0000",
  end_time = "00.00.0000",
  image = "/icon.png",
  description = "Содережание",
  tags = ["Placeholder tag", "Placeholder tag", "Placeholder tag", "Placeholder tag", "Placeholder tag", "Placeholder tag", "Placeholder tag", "Placeholder tag"],
  author = "Аноним",
  author_profile = "/user-icon.png",
  lat = 0,
  lng = 0,
  address = "",
}: EventProps) {
  return (
    <>
      <div className={styles.event}>
        <div className={styles.event_wrapper}>
          <div className={styles.event__hero_section}>
            <div className={styles.event__hero_section__author}>
              <a> От:{" "} </a>
              <Image
                className={styles.event__hero_section__author__profile}
                src={author_profile ?? "/default-profile.jpg"}
                alt="pfp"
                height={20}
                width={20}
              />
              <a> {author ?? "Аноним"} </a>
            </div>
            <div className={styles.event__hero_section__title}>
              <h1>{title}</h1>
            </div>
          </div>
          <CustomImage
            className={styles.event__img}
            src={image}
            defaultSrc="/icon.png"
            alt="article_image"
            layout="intrinsic"
            width={800}
            height={400}
          />
          <div className={styles.event__text + " glass"}>
            <div className={styles.event__text__description}>
              <p>{description}</p>
            </div>
            <div className={styles.event__text__dates}>
              <a>Время начала:</a> <p>{start_time}</p>
            </div>
            <div className={styles.event__text__dates}>
              <a>Время конца:</a> <p>{end_time}</p>
            </div>
            <div className={styles.event__text__tags}>
              {tags.map((tag, index) => (
                <span className={styles.event__text__tags__tag} key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.event__location}>
            <LeafletMap markers={[{ lat: lat, lng: lng, popupText: address }]}></LeafletMap>
          </div>
          <Weather lat={lat} lng={lng} timestamp={start_time} />
        </div>
      </div>
    </>
  );
}
