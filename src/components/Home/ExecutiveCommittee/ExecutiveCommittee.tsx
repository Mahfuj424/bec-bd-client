"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import HeaderSection from "@/components/ui/HeaderSection";

// Define the type for committee members
interface CommitteeMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

export default function ExecutiveCommittee() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if scroll position is beyond a certain point
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Committee members data
  const committeeMembers: CommitteeMember[] = [
    {
      id: 1,
      name: "ENGR. SHAIKH AL AMIN",
      position: "CHAIRMAN",
      image: "/member/alamin.png",
    },
    {
      id: 2,
      name: "MD. SHAHABUDDIN",
      position: "VICE-CHAIRMAN",
      image: "/member/shahabuddin.png",
    },
    {
      id: 3,
      name: "MD. REZAUL ISLAM",
      position: "VICE-CHAIRMAN",
      image: "/member/reza.png",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  return (
    <section className=" mx-auto py-12 bg-white">
      {/* Header with green border */}
      <div className="container mx-auto px-6">
        <div>
          <HeaderSection title="PRESENT EXECUTIVE COMMITTEE" />
        </div>

        {/* Committee members grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {committeeMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-blue-700">
                  {member.name}
                </h3>
                <p className="text-gray-500 mt-1">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.5,
          y: isVisible ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none z-50 animate-bounce"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </motion.button>
    </section>
  );
}
