"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaNewspaper,
  FaRegClock,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
} from "react-icons/fa";
import { MdEvent, MdEngineering } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import Image from "next/image";
import { newsEvents } from "@/constant/news&events";



export default function LatestNewsEvents() {
  const [activeTab, setActiveTab] = useState<"all" | "news" | "events">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Sample data for Bangladesh Engineers Council news and events
  

  // Filter news/events based on active tab
  const filteredItems = newsEvents.filter((item) =>
    activeTab === "all" ? true : item.type === activeTab
  );

  // Reset to first page when changing tabs
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page change
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the news section
    if (ref.current) {
      (ref.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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

  const paginationVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const pageVariants = {
    inactive: {
      backgroundColor: "#FFFFFF",
      color: "#1F2937",
      border: "1px solid #E5E7EB",
    },
    active: {
      backgroundColor: "#047857",
      color: "#FFFFFF",
      border: "1px solid #047857",
    },
  };

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center">
            <MdEngineering className="text-green-600 mr-3 text-4xl md:text-5xl" />
            News & Events
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements, news, and upcoming
            events from Bangladesh Engineers Council
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
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
          >
            {currentItems.map((item) => (
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
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {item.location && (
                    <div className="text-gray-500 mb-4 flex items-start">
                      <FaMapMarkerAlt className="mr-2 text-green-600 mt-1 flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  {item.time && (
                    <div className="text-gray-500 mb-4 flex items-center">
                      <FaRegClock className="mr-2 text-green-600" />
                      <span>{item.time}</span>
                    </div>
                  )}

                  <motion.a
                    href={`event/${item?.id}`}
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
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center mt-12"
            variants={paginationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <nav
              className="flex items-center space-x-2"
              aria-label="Pagination"
            >
              {/* Previous Page Button */}
              <motion.button
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-md border ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
                whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
              >
                <FaChevronLeft className="w-5 h-5" />
                <span className="sr-only">Previous Page</span>
              </motion.button>

              {/* Page Numbers */}
              <div className="flex items-center space-x-1">
                {pageNumbers.map((number) => {
                  // Show first page, last page, current page, and pages around current
                  const showPageNumber =
                    number === 1 ||
                    number === totalPages ||
                    (number >= currentPage - 1 && number <= currentPage + 1);

                  // Show ellipsis after first page if needed
                  const showFirstEllipsis = number === 2 && currentPage > 3;

                  // Show ellipsis before last page if needed
                  const showLastEllipsis =
                    number === totalPages - 1 && currentPage < totalPages - 2;

                  if (showFirstEllipsis) {
                    return (
                      <span key={`ellipsis-1`} className="px-3 py-2">
                        <FaEllipsisH className="w-5 h-5 text-gray-400" />
                      </span>
                    );
                  }

                  if (showLastEllipsis) {
                    return (
                      <span key={`ellipsis-2`} className="px-3 py-2">
                        <FaEllipsisH className="w-5 h-5 text-gray-400" />
                      </span>
                    );
                  }

                  if (showPageNumber) {
                    return (
                      <motion.button
                        key={number}
                        onClick={() => paginate(number)}
                        variants={pageVariants}
                        initial="inactive"
                        animate={currentPage === number ? "active" : "inactive"}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-medium transition-colors duration-200`}
                      >
                        {number}
                      </motion.button>
                    );
                  }

                  return null;
                })}
              </div>

              {/* Next Page Button */}
              <motion.button
                onClick={() =>
                  currentPage < totalPages && paginate(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className={`p-2 rounded-md border ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
                whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
              >
                <FaChevronRight className="w-5 h-5" />
                <span className="sr-only">Next Page</span>
              </motion.button>
            </nav>
          </motion.div>
        )}

        {/* Page Indicator */}
        {totalPages > 1 && (
          <motion.div
            className="text-center mt-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Page {currentPage} of {totalPages}
          </motion.div>
        )}
      </div>
    </section>
  );
}
