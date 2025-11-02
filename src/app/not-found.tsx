"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "react-hot-toast"

export default function UnderDevelopment() {
  const router = useRouter()

  useEffect(() => {
    toast("⚙️ This page is under development!", {
      style: {
        borderRadius: "10px",
        background: "#f0fdf4",
        color: "#166534",
      },
      iconTheme: {
        primary: "#16a34a",
        secondary: "#f0fdf4",
      },
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-green-50 text-center px-6">
      <div className="max-w-lg">
        <Image
          src="/not-found/coming-soon.png" // you can place your image in public/not-found/
          alt="Under Development"
          width={700}
          height={300}
          className="mx-auto"
        />

        <h1 className="text-4xl font-bold text-green-600 mt-6 mb-2">
          🚧 Page Under Development
        </h1>
        <p className="text-gray-600 mb-8">
          We’re working hard to build this page.
          Please check back soon for updates!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => router.back()}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-full shadow-md transition-all"
          >
            🔙 Go Back
          </button>

          <button
            onClick={() => router.push("/")}
            className="border border-green-600 text-green-700 hover:bg-green-600 hover:text-white py-2.5 px-6 rounded-full transition-all"
          >
            🏠 Go Home
          </button>
        </div>
      </div>
    </div>
  )
}
