"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaNewspaper,
  FaRegClock,
} from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import Image from "next/image";
import CustomButton from "@/components/Button/CustomButton";
import Link from "next/link";

// Define types for news and events
interface NewsEvent {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  type: "news" | "events";
  location?: string;
  time?: string;
}

export default function LatestNewsEvents() {
  const [activeTab, setActiveTab] = useState<"all" | "news" | "events">("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Sample data for news and events
  const newsEvents: NewsEvent[] = [
    {
      id: 1,
      title: "Annual Conference Announced for September",
      excerpt:
        "Join us for our biggest event of the year with industry leaders and innovative workshops.",
      date: "2025-09-15",
      image: "/carousel/slider3.jpg",
      type: "events",
      location: "Grand Convention Center",
      time: "09:00 AM - 05:00 PM",
    },
    {
      id: 2,
      title: "New Partnership with Global Tech Solutions",
      excerpt:
        "We're excited to announce our strategic partnership to expand our services worldwide.",
      date: "2025-03-10",
      image: "/carousel/slider2.jpg",
      type: "news",
    },
    {
      id: 3,
      title: "Quarterly Stakeholder Meeting",
      excerpt:
        "Important updates on our Q1 performance and future roadmap will be discussed.",
      date: "2025-04-05",
      image: "/carousel/slider1.jpg",
      type: "events",
      location: "Virtual Meeting",
      time: "02:00 PM - 04:00 PM",
    },
    {
      id: 4,
      title: "Product Launch: Next Generation Platform",
      excerpt:
        "Our revolutionary new platform is set to transform the industry with cutting-edge features.",
      date: "2025-03-22",
      image: "/carousel/slider2.jpg",
      type: "news",
    },
    {
      id: 5,
      title: "Community Outreach Program Expansion",
      excerpt:
        "We're expanding our community initiatives to support more local organizations.",
      date: "2025-03-18",
      image: "/carousel/slider2.jpg",
      type: "news",
    },
    {
      id: 6,
      title: "Workshop: Future of Technology",
      excerpt:
        "An interactive workshop exploring emerging technologies and their potential impact.",
      date: "2025-05-12",
      image: "/carousel/slider3.jpg",
      type: "events",
      location: "Innovation Hub",
      time: "10:00 AM - 01:00 PM",
    },
  ];

  // Filter news/events based on active tab
  const filteredItems = newsEvents.filter((item) =>
    activeTab === "all" ? true : item.type === activeTab
  );

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const tabVariants = {
    inactive: {
      borderBottom: "2px solid transparent",
      color: "#6B7280",
    },
    active: {
      borderBottom: "2px solid #3B82F6",
      color: "#1E40AF",
    },
  };

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Latest News & Events
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest announcements, news, and upcoming
            events
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-10 border-b border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.button
            className="px-6 py-3 text-lg font-medium focus:outline-none"
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "all" ? "active" : "inactive"}
            onClick={() => setActiveTab("all")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          <motion.button
            className="px-6 py-3 text-lg font-medium focus:outline-none flex items-center"
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "news" ? "active" : "inactive"}
            onClick={() => setActiveTab("news")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BiNews className="mr-2" />
            News
          </motion.button>
          <motion.button
            className="px-6 py-3 text-lg font-medium focus:outline-none flex items-center"
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "events" ? "active" : "inactive"}
            onClick={() => setActiveTab("events")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdEvent className="mr-2" />
            Events
          </motion.button>
        </motion.div>

        {/* News & Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 rounded-bl-lg flex items-center">
                  {item.type === "news" ? (
                    <FaNewspaper className="mr-1" />
                  ) : (
                    <MdEvent className="mr-1" />
                  )}
                  <span className="text-sm font-medium capitalize">
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2 text-green-600" />
                  <span>{formatDate(item.date)}</span>

                  {item.time && (
                    <div className="flex items-center ml-4">
                      <FaRegClock className="mr-2 text-green-600" />
                      <span>{item.time}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {item.location && (
                  <div className="text-gray-500 mb-4">
                    <strong>Location:</strong> {item.location}
                  </div>
                )}

                <motion.a
                  href="#"
                  className="inline-flex items-center text-green-600 font-medium hover:text-blue-800"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Read more <FaArrowRight className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <Link href={'/news-events'} className="text-center flex justify-center mt-10">
          <CustomButton name="View All News & Events >" />
        </Link>
      </div>
    </section>
  );
}
