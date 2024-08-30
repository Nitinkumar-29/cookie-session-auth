"use client";
import { login } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);
  return (
    <>
      <form
        action={formAction}
        className="flex flex-col space-y-4 w-80 items-center justify-center"
      >
        <input
          type="text"
          required
          name="username"
          placeholder="Enter your username"
          className="outline-none bg-zinc-200 text-black px-4 py-2"
        />
        <input
          type="password"
          required
          name="password"
          placeholder="Enter your password"
          className="outline-none bg-zinc-200 text-black px-4 py-2"
        />
        <button
          type="submit"
          className="border-[1px] border-black px-4 py-2 rounded-md"
        >
          LogIn
        </button>
        {state?.error && <p className="text-red-600">{state.error}</p>}
      </form>
    </>
  );
};

export default LoginForm;
