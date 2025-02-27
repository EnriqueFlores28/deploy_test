"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface Slide {
  src: string;
  caption: string;
}

const Carousel = ({ slides }: { slides: Slide[] }) => {
  const [currentCaption, setCurrentCaption] = useState(slides[0].caption);

  return (
    <div className="bg-secondary py-10 flex flex-col items-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentCaption(slides[swiper.activeIndex].caption)}
        className="w-full max-w-5xl h-[500px] rounded-xl shadow-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={500}
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="italic mt-4 text-black text-lg bg-secondary px-4 py-2 rounded-md">
        {currentCaption}
      </div>
    </div>
  );
};

export default Carousel;
