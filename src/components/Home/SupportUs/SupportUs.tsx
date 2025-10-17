"use client";

import Image from "next/image";
import HeaderSection from "@/components/ui/HeaderSection";
import { useEffect, useRef } from "react";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

export default function SupportUs() {
  const partners: Partner[] = [
    { id: 1, name: "Islami Bank", logo: "/support/ibbl-bank.png" },
    {
      id: 2,
      name: "Ministry of Science and Technology",
      logo: "/support/ibn-sina.png",
    },
    { id: 3, name: "Dhaka University", logo: "/support/ieb.png" },
    { id: 4, name: "Islami Bank", logo: "/support/ibbl-bank.png" },
    {
      id: 5,
      name: "Ministry of Science and Technology",
      logo: "/support/ibn-sina.png",
    },
    { id: 6, name: "Dhaka University", logo: "/support/ieb.png" },
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);

  // Hover করলে অ্যানিমেশন থামানোর জন্য JavaScript ব্যবহার করা হয়েছে
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const stopMarquee = () => (marquee.style.animationPlayState = "paused");
    const startMarquee = () => (marquee.style.animationPlayState = "running");

    marquee.addEventListener("mouseover", stopMarquee);
    marquee.addEventListener("mouseout", startMarquee);

    return () => {
      marquee.removeEventListener("mouseover", stopMarquee);
      marquee.removeEventListener("mouseout", startMarquee);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <HeaderSection title="Support Us" />
        </div>

        {/* Marquee Section */}
        <div className="relative overflow-hidden w-full py-8">
          <div ref={marqueeRef} className="marquee flex gap-10">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 transition-transform duration-300"
              >
                <div className="relative h-20 w-40">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for Marquee Animation */}
      <style jsx>{`
        .marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee-scroll 20s linear infinite;
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
