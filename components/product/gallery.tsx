"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { GridTileImage } from "@/components/grid/tile";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastIndex, setIsLastIndex] = useState(false);
  const [isFirstIndex, setIsFirstIndex] = useState(false);

  useEffect(() => {
    if (currentIndex + 1 >= images.length) setIsLastIndex(true);
    if (currentIndex === 0) setIsFirstIndex(true);
  }, [currentIndex, images.length]);

  const nextImage = () => {
    if (isLastIndex) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const previousImage = () => {
    if (isFirstIndex) return;
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[currentIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[currentIndex]?.altText as string}
            src={images[currentIndex]?.src as string}
            priority={true}
          />
        )}
        <div className="absolute bottom-[15%] flex w-full justify-center">
          <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
            <button
              aria-label="Previous product image"
              onClick={previousImage}
              className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white"
            >
              <ArrowLeftIcon className="h-5" />
            </button>
            <div className="mx-1 h-6 w-px bg-neutral-500"></div>
            <button
              aria-label="Next product image"
              onClick={nextImage}
              className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white"
            >
              <ArrowRightIcon className="h-5" />
            </button>
          </div>
        </div>
      </div>
      {images.length > 1 ? (
        <ul className="my-12 flex items-center flex-wrap justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => (
            <li key={image.src} className="h-20 w-20">
              <button
                aria-label="Enlarge product image"
                onClick={() => setCurrentIndex(index)}
                className="h-full w-full"
              >
                <GridTileImage
                  alt={image.altText}
                  src={image.src}
                  width={80}
                  height={80}
                  isActive={index === currentIndex}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
