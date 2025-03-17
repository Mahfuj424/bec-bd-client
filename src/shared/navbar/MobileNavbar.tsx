"use client";

import { useEffect, useState, useRef } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { navbarItems } from "@/constant/navbar";
import { usePathname } from "next/navigation";

interface MobileNavbarProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
  searchVisible: boolean;
}

const MobileNavbar = ({
  isDrawerOpen,
  setIsDrawerOpen,
  searchVisible,
}: MobileNavbarProps) => {
  const pathname = usePathname();
  const [activeSegment, setActiveSegment] = useState("");
  const [searchState, setSearchState] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchState(searchVisible);
  }, [searchVisible]);

  useEffect(() => {
    const segments = pathname.split("/");
    setActiveSegment(segments.pop() || ""); // Get the last part of the path
  }, [pathname]);

  const handleMenuClick = () => {
    setIsDrawerOpen(false);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));

    setTimeout(() => {
      dropdownRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-500 ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleMenuClick}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 border-b-2 border-green-600">
          <Image
            src="/logo/logo.png"
            alt="logo"
            height={40}
            width={40}
            priority
          />
          <button onClick={handleMenuClick}>
            <FaTimes className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Search Bar */}
        {searchState && (
          <div className="p-4">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Search..."
            />
          </div>
        )}

        {/* Menu Items */}
        <div className="flex flex-col p-4 space-y-2">
          {navbarItems.map((item, index) => (
            <div key={index} ref={dropdownRef}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.path || "#"}
                  className={`text-lg font-medium block py-2 px-3 rounded-lg ${
                    activeSegment === item.path?.split("/").pop()
                      ? "text-green-600 font-semibold"
                      : "text-gray-800"
                  }`}
                  onClick={handleMenuClick}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    className="p-2"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <FaChevronDown
                      className={`text-gray-600 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Dropdown for Submenu */}
              {item.children && openDropdown === item.label && (
                <div className="ml-4 border-l border-gray-300 pl-4 mt-2 space-y-2">
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.path || "#"}
                      className={`block py-2 px-3 rounded-lg ${
                        activeSegment === child.path?.split("/").pop()
                          ? "text-green-600 font-semibold"
                          : "text-gray-700"
                      }`}
                      onClick={handleMenuClick}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
