"use client";
import {
  FaBuilding,
  FaHandshake,
  FaGlobe,
  FaChalkboardTeacher,
  FaFlag,
  FaUserPlus,
} from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";
import CustomButton from "@/components/Button/CustomButton";

export default function MembershipSection() {
  const facilities = [
    {
      id: "gov-facilities",
      icon: <FaBuilding className="text-green-600 text-xl" />,
      text: "Ensure Government Facilities for Business",
    },
    {
      id: "rental",
      icon: <FaHandshake className="text-green-600 text-xl" />,
      text: "Subsidized Rental and other Facilities at BEC",
    },
    {
      id: "international",
      icon: <FaGlobe className="text-green-600 text-xl" />,
      text: "Joining International Exhibition and Conferences",
    },
    {
      id: "seminars",
      icon: <FaChalkboardTeacher className="text-green-600 text-xl" />,
      text: "Seminars and workshops",
    },
    {
      id: "national",
      icon: <FaFlag className="text-green-600 text-xl" />,
      text: "National Exhibition and Conference with support",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto  px-6">
        {/* Member Facilities Card */}
        <div className="group relative bg-white  rounded-2xl hover:rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-green-600 transform origin-left transition-transform duration-700 group-hover:scale-x-100 scale-x-0"></div>

          {/* Left accent bar */}
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-green-600 transform origin-bottom transition-transform duration-700 group-hover:scale-y-100 scale-y-0"></div>

          {/* Bottom accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600 transform origin-right transition-transform duration-700 group-hover:scale-x-100 scale-x-0"></div>

          {/* Right accent bar */}
          <div className="absolute top-0 right-0 bottom-0 w-1 bg-green-600 transform origin-top transition-transform duration-700 group-hover:scale-y-100 scale-y-0"></div>

          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <MdBusinessCenter className="text-green-600 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 ">
                MEMBER FACILITIES
              </h2>
            </div>

            <ul className="space-y-5">
              {facilities.map((facility) => (
                <li
                  key={facility.id}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-green-50  transition-all duration-300"
                >
                  <div className="mt-0.5 transition-all duration-300 transform group-hover:rotate-12">
                    {facility.icon}
                  </div>
                  <span className="text-gray-700 ">{facility.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Member Registration Card */}
        <div className="group relative bg-white  rounded-2xl hover:rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-green-600 transform origin-left transition-transform duration-700 group-hover:scale-x-100 scale-x-0"></div>

          {/* Left accent bar */}
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-green-600 transform origin-bottom transition-transform duration-700 group-hover:scale-y-100 scale-y-0"></div>

          {/* Bottom accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600 transform origin-right transition-transform duration-700 group-hover:scale-x-100 scale-x-0"></div>

          {/* Right accent bar */}
          <div className="absolute top-0 right-0 bottom-0 w-1 bg-green-600 transform origin-top transition-transform duration-700 group-hover:scale-y-100 scale-y-0"></div>

          <div className="p-8 flex flex-col h-full">
            <div className="flex items-center justify-center mb-8">
              <FaUserPlus className="text-green-600 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 ">
                MEMBER REGISTRATION
              </h2>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center py-8">
              <h3 className="text-4xl font-bold text-gray-800  mb-8 text-center relative">
                Become a Member
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-600 rounded-full"></span>
              </h3>

              <div className="flex flex-col items-center space-y-6 mb-8">
                <div className="flex items-center">
                  <IoMdCheckmarkCircleOutline className="text-green-600 text-xl mr-2" />
                  <span className="text-gray-700 ">
                    Access to exclusive benefits
                  </span>
                </div>
                <div className="flex items-center">
                  <IoMdCheckmarkCircleOutline className="text-green-600 text-xl mr-2" />
                  <span className="text-gray-700 ">
                    Networking opportunities
                  </span>
                </div>
                <div className="flex items-center">
                  <IoMdCheckmarkCircleOutline className="text-green-600 text-xl mr-2" />
                  <span className="text-gray-700 ">
                    Business growth support
                  </span>
                </div>
              </div>

              <Link href={"/become-a-member"}>
                <CustomButton name="Apply Now" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
