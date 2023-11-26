"use client";
interface MenuItemProps {
  onCLick: () => void;
  label: string;
}
import React from "react";

const MenuItem: React.FC<MenuItemProps> = ({ onCLick, label }) => {
  return (
    <div onClick={onCLick} className="px-4 py-3  transition font-semibold">
      {label}
    </div>
  );
};

export default MenuItem;
