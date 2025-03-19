import HeaderSection from "@/components/ui/HeaderSection";
import React from "react";

const LocationMaps = () => {
  return (
    <div className="">
        <HeaderSection title="Visit Our Head Quarters"/>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3797207164903!2d90.398611774189!3d23.733834889414315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ee7858db49%3A0xd2c6cce617a3d4cb!2sThe%20Institution%20of%20Engineers%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1742369115069!5m2!1sen!2sbd"
          width="100%"
          height="400px"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bangladesh Engineers Council Location"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMaps;
