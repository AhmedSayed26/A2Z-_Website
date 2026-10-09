"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function LogoSlider({ logos }) {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      grabCursor
      spaceBetween={16}
      slidesPerView={2}
      scrollbar={{ draggable: true, hide: false }}
      autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      breakpoints={{
        560: { slidesPerView: 3 },
        860: { slidesPerView: 4 },
        1200: { slidesPerView: 6 },
      }}
      className="w-full"
    >
      {logos.map((logo) => (
        <SwiperSlide key={logo.src}>
          <div
            className="cell m h-31 items-center justify-center p-4!">
            <span className="spot" aria-hidden="true" />
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={80} 
              className="w-auto h-auto max-w-[80%] max-h-40 object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
