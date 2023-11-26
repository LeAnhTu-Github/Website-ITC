"use client";
import React from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface userMenuProps {
  currentUser?: SafeUser | null;
}
const Menu = ({ currentUser }: userMenuProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  return (
    <div className="dropdown dropdown-end">
      <div className="flex items-center">
        <a className="px-4 mx-6 py-3 btn btn-ghost">
          {currentUser ? currentUser.name : "From ITC with love"}
        </a>
        <Avatar src={currentUser?.image} />
      </div>
      {currentUser ? (
        <>
          {session?.user.role === "admin" ? (
            <>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <MenuItem
                    onCLick={() => router.push("/admin")}
                    label="Admin Doashboard"
                  />
                </li>
                <li>
                  <MenuItem onCLick={() => {}} label="Settings" />
                </li>
                <li>
                  <MenuItem onCLick={() => {}} label="Profile" />
                  <hr />
                  <MenuItem onCLick={() => signOut()} label="Logout" />
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <MenuItem onCLick={() => {}} label="Settings" />
                </li>
                <li>
                  <MenuItem onCLick={() => {}} label="Profile" />
                  <hr />
                  <MenuItem onCLick={() => signOut()} label="Logout" />
                </li>
              </ul>
            </>
          )}
        </>
      ) : (
        <>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <MenuItem onCLick={loginModal.onOpen} label="Login" />
            </li>
            <li>
              <MenuItem onCLick={registerModal.onOpen} label="Register" />
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Menu;
