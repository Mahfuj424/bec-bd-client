"use client";

import { useEffect, useState } from "react";

const CustomButton = ({ name }: { name: string }) => {
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure the component only renders after mounting
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Prevent rendering before mounting to avoid hydration issues

  return (
    <button className="relative cursor-pointer text-white py-1 px-4 rounded overflow-hidden border border-green-600 transition-all duration-500 ease-out group">
      {/* Solid Green Background */}
      <span className="absolute inset-0 bg-green-600"></span>

      {/* Hover Effect */}
      <span className="absolute inset-0 bg-[#0002FF] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

      {/* Button Text */}
      <span className="relative text-xl group-hover:text-white">
        {name}
      </span>
    </button>
  );
};

export default CustomButton;
