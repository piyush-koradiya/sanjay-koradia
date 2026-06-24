"use client";

import Image from "next/image";
import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  objectFit?: "cover" | "contain" | "fill";
  priority?: boolean;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  objectFit = "cover",
  priority = false,
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  const objectFitClass =
    objectFit === "cover"
      ? "object-cover"
      : objectFit === "contain"
        ? "object-contain"
        : "object-fill";

  if (fill) {
    return (
      <>
        {!loaded && (
          <div className="absolute inset-0 bg-[var(--color-secondary-dark)] animate-pulse" />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${objectFitClass} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          onLoad={() => setLoaded(true)}
        />
      </>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div
          className="absolute inset-0 bg-[var(--color-secondary-dark)] animate-pulse rounded-inherit"
          style={{ width, height }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={`${objectFitClass} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} w-full h-full`}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
