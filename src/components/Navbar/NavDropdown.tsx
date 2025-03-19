"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  path: string;
}

interface NavDropdownProps {
  items: NavItem[];
}

const NavDropdown = ({ items }: NavDropdownProps) => {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure the component only renders after mounting
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Prevent rendering before mounting to avoid hydration issues

  return (
    <div className="absolute left-0 pt-7 w-[290px] z-50">
      <div className="bg-white border-2 border-gray-100 p-4 rounded-md shadow-lg">
        {/* Links section - now full width */}
        <div className="w-full">
          {items.map((item, index) => (
            <div key={index} className="mb-2">
              <Link
                href={item.path}
                className={`block hover:text-green-600 text-lg transition duration-300 ${
                  pathname === item.path
                    ? "text-green-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
              {index < items.length - 1 && (
                <div className="my-2 border-b border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
