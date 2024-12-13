"use client";

import { useState } from "react";
import Image from "next/image";

type CustomImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  defaultSrc: string;
  className?: string;
};

export default function CustomImage({
  src,
  alt,
  width,
  height,
  defaultSrc,
  className,
}: CustomImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc(defaultSrc);
  };

  return (
    <Image
      className={className}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
    />
  );
}
