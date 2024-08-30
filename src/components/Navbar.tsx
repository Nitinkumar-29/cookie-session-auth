import Link from "next/link";
import React from "react";
import { getSession, logout } from "@/actions";
import Logout from "./Logout";

const Navbar = async () => {
  const session = await getSession();
  console.log(session);
  return (
    <>
      <nav className="flex items-center justify-around h-16 bg-zinc-100 text-black w-[80%] mx-auto ">
        <div className="font-medium">Auth-Cookie-Session</div>
        <div className="flex items-center h-full space-x-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/premium"}>Premium</Link>
        </div>
        <div>
          {!session.isLoggedIn ? (
            <Link href={"/login"}>LogIn</Link>
          ) : (
            <div className="flex space-x-4 items-center h-full">
              <Logout />
              <Link href={"/profile"}>Profile</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
