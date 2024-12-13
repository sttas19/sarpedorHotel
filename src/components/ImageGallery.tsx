"use client";

import React, { useState } from "react";
import { Image } from "./ui/image";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

const ImageGallery = ({
  images,
}: {
  images: { id: number; src: string }[];
}) => {
  const [expandedImage, setExpandedImage] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedImage(expandedImage === id ? null : id);
  };

  return (
    <div className="flex flex-wrap justify-center items-start gap-5 max-md: gap-y-10 md:flex-row max-md:flex-col">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`flex flex-col gap-5 transition-all duration-300 overflow-hidden ${
            expandedImage === image.id
              ? "w-[553px] h-full max-md:w-full"
              : "w-[168px] h-full max-md:w-full "
          } ${index % 2 === 0 ? "mt-10 max-md:mt-0" : "mt-0"} `}
        >
          <Image
            onClick={() => toggleExpand(image.id)}
            src={image.src}
            alt={`Image ${image.id}`}
            className={`object-cover transition-all duration-300 ${
              expandedImage === image.id
                ? "w-full h-[550px] max-md:h-[250px]"
                : "h-[550px] max-md:h-[100px]"
            }`}
            width={552}
            height={550}
          />

          {expandedImage !== image.id && (
            <button
              className="rounded-full self-center max-md:mt-2 p-2 bg-transparent border-black border hover:bg-gray-400 transition-colors"
              onClick={() => toggleExpand(image.id)}
            >
              <PlusIcon className="w-6 h-6" strokeWidth={1} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
