"use client";

const CustomButton = ({ name }: { name: string }) => {
  return (
    <button className="relative cursor-pointer text-white py-1 px-4 rounded overflow-hidden border border-green-600 transition-all duration-500 ease-out group">
      {/* Gradient Background */}
      <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-red-500 to-green-600"></span>

      {/* Hover Effect */}
      <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

      {/* Button Text */}
      <span className="relative text-xl group-hover:text-green-600">
        {name}
      </span>
    </button>
  );
};

export default CustomButton;
