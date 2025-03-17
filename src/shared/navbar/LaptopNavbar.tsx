/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import CustomButton from "@/components/Button/CustomButton";
import NavDropdown from "@/components/Navbar/NavDropdown";
import TopHeader from "@/components/Navbar/TopHeader";
import { navbarItems } from "@/constant/navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [firstSegment, setFirstSegment] = useState<string>("");

  // This effect will run only after the component has mounted
  useEffect(() => {
    setFirstSegment(`/${pathname.split("/")[1] || ""}`);
  }, [pathname]);

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { label: string; path: string }[]
  >([]);
  const [hasMounted, setHasMounted] = useState(false);

  // This effect ensures that the component only renders after mount (client-side)
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const filterNavItems = (query: string) => {
    if (query.length < 3) return [];
    const results: { label: string; path: string }[] = [];

    const searchRecursive = (items: typeof navbarItems) => {
      for (const item of items) {
        if (item.label.toLowerCase().includes(query.toLowerCase())) {
          results.push({ label: item.label, path: item.path || "#" });
        }
        if (item.children) {
          searchRecursive(item.children);
        }
      }
    };

    searchRecursive(navbarItems);
    return results;
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSearchResults(filterNavItems(query));
  };

  if (!hasMounted) return null; // Prevent rendering before mounting to avoid hydration issues

  return (
    <nav className="bg-white shadow-md">
      <div>
        <TopHeader />
      </div>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsDrawerOpen(true)}>
            <FaBars className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="logo"
            height={50}
            width={50}
            priority
          />
        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          {navbarItems?.map((item, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.path || "#"}
                className={`font-medium transition text-xl duration-300 flex items-center ${
                  firstSegment === item.path
                    ? "text-green-600 font-semibold"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.label}
                {item.children && <FaChevronDown className="ml-1 text-xs" />}
              </Link>

              {/* Show dropdown only if item has children and is hovered */}
              {item.children && hoveredItem === index && (
                <NavDropdown items={item.children} />
              )}
            </div>
          ))}
        </div>

        {/* Search & Button Section */}
        <div className="flex items-center gap-4 justify-center">
          {/* Search Input */}
          {isSearching ? (
            <div className="relative w-48 md:w-72 transition-all duration-500">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Search..."
              />
              <button
                onClick={() => {
                  setIsSearching(false);
                  setSearchQuery("");
                  setSearchResults([]);
                }}
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                <FaTimes />
              </button>

              {/* Search Suggestion Modal */}
              {searchResults.length > 0 && (
                <div className="absolute w-full mt-2 bg-white shadow-lg rounded-md border-2 border-gray-100 max-h-60 overflow-auto">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => router.push(result.path)}
                    >
                      {result.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => setIsSearching(true)}
                className="bg-green-600 shadow-xl cursor-pointer p-2 text-white rounded-md"
              >
                <FaSearch className="text-xl" />
              </button>

              <Link
                href={"/become-a-member"}
                className="hidden md:block shadow-md"
              >
                <CustomButton name="Become A Member" />
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        searchVisible={searchVisible}
      />
    </nav>
  );
};

export default Navbar;
