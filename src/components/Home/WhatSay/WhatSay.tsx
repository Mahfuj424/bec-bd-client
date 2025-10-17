import HeaderSection from "@/components/ui/HeaderSection";
import PersonCard from "@/components/ui/PersonCard";
import React from "react";

const WhatSay = () => {
  return (
    <div>
      <HeaderSection title="What our key members say" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
        <PersonCard
          imageSrc="/member/shahabuddin.png"
          name="Md. Shahabuddin"
          designation="Vice-Chairman"
          description="Bismillahir Rahmanir Rahim. Dear Members, Colleagues, and Partners, It is a privilege to address you as the Vice-Chairman of our esteemed organization. At the heart of our vision lies a commitment to drive positive change and contribute to the development of Bangladesh."
        />
        <PersonCard
          imageSrc="/member/alamin.png"
          name="Engr. Shaikh Al Amin"
          designation="Chairman"
          description="Bismillahir Rahmanir Rahim. I hope this message finds you all in good health and high spirits. As the President of BEC, I wanted to take a moment to address each and every one of you and express my heartfelt gratitude for your unwavering dedication and commitment to our organization’s goals"
        />

        <PersonCard
          imageSrc="/member/reza.png"
          name="Md. Rezaul Islam"
          designation="Vice-Chairman"
          description="Bismillahir Rahmanir Rahim. Dear Members of BEC, Warm greetings to all of you! As the General Secretary of BEC, I wanted to take a moment to express my appreciation for your valuable contributions and unwavering support towards our organization. First and foremost."
        />
      </div>
    </div>
  );
};

export default WhatSay;
