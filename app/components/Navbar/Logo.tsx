"use client";

import React, { use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src={"/images/logo.png"}
      alt="Logo"
      onClick={() => router.push("/")}
      width={75}
      height={75}
      className=" cursor-pointer"
    />
  );
};

export default Logo;
