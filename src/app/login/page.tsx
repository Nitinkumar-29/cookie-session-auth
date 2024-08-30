import LoginForm from "@/components/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col space-y-12 mt-20 items-center justify-center w-full ">
        <h1>login page</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
