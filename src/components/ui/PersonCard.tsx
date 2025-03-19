"use client";

import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

interface PersonCardProps {
  imageSrc: string;
  name: string;
  designation: string;
  description: string;
  onLearnMore?: () => void;
}

export default function PersonCard({
  imageSrc = "/placeholder.svg?height=300&width=300",
  name = "John Doe",
  designation = "Software Engineer",
  description = "Experienced software engineer with expertise in React, Next.js, and TypeScript. Passionate about creating beautiful and functional user interfaces.",
  onLearnMore = () => console.log("Learn more clicked"),
}: PersonCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-sm mx-auto overflow-hidden rounded-lg group shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundSize: "200% 200%",
          animation: isHovered ? "gradient-animation 3s ease infinite" : "none",
        }}
      />

      {/* Card content */}
      <div className="relative m-[2px] bg-white rounded-lg p-6 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-800">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mb-2 font-semibold">
          {designation}
        </p>

        <p className="text-gray-800 text-center mb-4">
          {description}
        </p>

        <button
          onClick={onLearnMore}
          className="flex items-center text-green-600 cursor-pointer hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-200"
        >
          Learn more
          <MdKeyboardArrowRight  className="ml-1 h-4 w-4" />
        </button>
      </div>

      {/* CSS for the gradient animation */}
      <style jsx>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
