import React from "react";

const HeaderSection = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="text-center mb-14">
        <h1 className="uppercase pb-3 md:text-3xl text-xl font-semibold ">
          {title}
        </h1>
        <div className="w-32 rounded-full h-1 bg-green-600 mx-auto"></div>
      </div>
    </div>
  );
};

export default HeaderSection;
