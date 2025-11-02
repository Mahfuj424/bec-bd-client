import CustomButton from "@/components/Button/CustomButton";
import HeaderSection from "@/components/ui/HeaderSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutBec = () => {
  return (
    <div>
      <HeaderSection title="Bangladesh Engineers Council" />
      <div className="md:flex gap-10 container  mx-auto">
        <div className="">
          <Image
            src={"/about/about.webp"}
            alt="about"
            width={500}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-[50%] mt-5 md:mt-0">
          <p className="mb-10">
            <span className="font-semibold">BEC</span> was born in 2015 under
            the shade of IEB. To motivate young engineers cultivate innovation
            for the nation. To make a footprint of IEB among young engineers, so
            that they can solidify the . There was charm and enthusiasm among
            you, which inspired us to foster your dream to unite the countrywide
            young engineers and push them into dream of innovation and
            fascination. Since then, on foot step, we started to sow the seeds,
            to formulate a committee we planted a constitution, a media team, a
            web and publication team, and some other committees to work smoother
            and better. We already come long way, but we need to reach far.
          </p>
          <Link href={"/"} className="pt-5">
            <CustomButton buttonSize="py-1 px-4" textSize="text-xl" name="Learn More..." />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutBec;
