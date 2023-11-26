"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
import React from "react";

const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className=" text-lg md:text-2xl font-bold">{title}</div>
      <div className=" text-base md:text-sm font-light text-neutral-500 mt-2">
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
