"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface EducationCard {
  id: string;
  subtitle: string;
  title: string;
  imageSrc: string;
  alt: string;
}

const educationCards: EducationCard[] = [
  {
    id: "workshops",
    subtitle: "PICKLEBALL",
    title: "WORKSHOPS",
    imageSrc: "/images/workshop-register.png",
    alt: "Pickleball workshops training session",
  },
  {
    id: "benefits",
    subtitle: "RPO MEMBER",
    title: "BENEFITS",
    imageSrc: "/images/workshop-benefits.png",
    alt: "RPO member benefits and perks",
  },
  {
    id: "certified",
    subtitle: "UNLOCK YOUR POTENTIAL",
    title: "GET CERTIFIED",
    imageSrc: "/images/workshop-certified.png",
    alt: "Professional certification training",
  },
  {
    id: "courses",
    subtitle: "RPO COURSES",
    title: "CHOOSE YOUR PATH",
    imageSrc: "/images/workshop-choose-your-path.png",
    alt: "Course pathway selection",
  },
];

export default function EducationHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const progressPercentage = ((activeIndex + 1) / educationCards.length) * 100;

  return (
    <section className="w-full py-6 md:py-12">
      {/* Section Header */}
      <header className="px-4 container mx-auto mb-6 md:mb-12">
        <h2 className="text-lg md:text-[2rem] font-bold text-brand-navy leading-tight">
          <span>WHAT SETS </span>
          <span className="text-brand-orange">RPO</span>
          <span> EDUCATION APART?</span>
        </h2>
      </header>

      {/* Cards Slider */}
      <div className="mb-6 md:mb-12 overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={-20} // Slight overlap for mobile
          slidesPerView={1.2} // Show part of next slide on mobile
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2.3,
              spaceBetween: -30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: -40,
            },
            1280: {
              slidesPerView: 2.5,
              spaceBetween: -40,
            },
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          className="education-slider"
        >
          {educationCards.map((card, index) => (
            <SwiperSlide key={card.id}>
              <article className="education-card group cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={card.imageSrc}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />

                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                    <div className="space-y-1">
                      <p className="text-xs md:text-sm font-semibold tracking-wider opacity-90">{card.subtitle}</p>
                      <h3 className="text-lg md:text-2xl xl:text-3xl font-bold tracking-tight">{card.title}</h3>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dynamic Progress Indicator */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-5xl h-0.5 bg-gray-300 rounded-full relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-brand-navy rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </section>
  );
}
