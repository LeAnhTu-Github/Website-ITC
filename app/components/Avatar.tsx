"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}
const Avatar = ({ src }: AvatarProps) => {
  return (
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <Image
        src={src || "/images/placeholder.jpg"}
        alt="Avatar"
        width={30}
        height={30}
        className=" rounded-full"
      />
    </label>
  );
};

export default Avatar;
