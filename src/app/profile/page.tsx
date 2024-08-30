import { changePremium, getSession } from "@/actions";
import React from "react";

const ProfilePage = async () => {
  const session = await getSession();
  return (
    <div className="mx-auto flex flex-col space-y-4 justify-center items-center mt-20 w-fit">
      <h1 className="font-semibold">
        welcome to the profie page {session.username}
      </h1>
      <form action={changePremium}>
        <button className="px-4 py-2 border-black border-[1px] rounded-md">
          {session.isPro ? "Cancel" : "Buy"} premium
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
