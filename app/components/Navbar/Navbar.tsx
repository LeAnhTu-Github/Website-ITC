import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}
const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className="navbar bg-base-100 px-10 ">
      <div className="navbar-start">
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <Menu currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Navbar;
