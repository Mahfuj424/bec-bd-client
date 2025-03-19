"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import from react-icons
import Link from "next/link";
import CustomButton from "@/components/Button/CustomButton";
import { motion } from "framer-motion";

interface BannerSlide {
  id: number;
  imageUrl: string;
  title: string;
}

interface CarouselBannerProps {
  slides: BannerSlide[];
  autoPlayInterval?: number;
  className?: string;
}

export default function CarouselBanner({
  slides,
  autoPlayInterval = 5000,
  className,
}: CarouselBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasMounted, setHasMounted] = useState(false); // To track if the component has mounted

  // Ensures the component only renders after mounting (on client side)
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Run autoPlayInterval after component mounts
  useEffect(() => {
    if (!hasMounted) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval, hasMounted]);

  if (!hasMounted) return null;

  return (
    <div className={`relative w-full overflow-hidden ${className || ""}`}>
      {/* Slides */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.imageUrl || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute flex justify-center items-center inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <motion.div
                initial={{ opacity: 0, y: -150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="absolute text-center p-4 md:p-6 lg:p-8 text-white max-w-xl"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                  {slide.title}
                </h2>
                <Link href={"/become-a-member"}>
                  <CustomButton name="Register Now" />
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 cursor-pointer hover:bg-green-600 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 cursor-pointer hover:bg-green-600 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <FaChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
