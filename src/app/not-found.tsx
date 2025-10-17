"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
      <div className="relative w-full h-[80vh]">
        <Image
          src="/not-found/404_page-not-found.png"
          alt="404 Not Found"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <button
        onClick={() => router.back()}
        className="mt-6 px-6 py-2 bg-white text-black rounded-md hover:bg-gray-300 transition"
      >
        Go Back
      </button>
    </div>
  );
}
