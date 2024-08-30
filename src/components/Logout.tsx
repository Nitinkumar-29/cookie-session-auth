import { logout } from "@/actions";
import React from "react";

const Logout = () => {
  return (
    <>
      <form action={logout}>
        <button>LogOut</button>
      </form>
    </>
  );
};

export default Logout;
