import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput, SigninInput } from "@lo_ewolf/medium-common";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInput, setPostInput] =
    type === "signup"
      ? useState<SignupInput>({
          email: "",
          name: "",
          password: "",
        })
      : useState<SigninInput>({
          email: "",
          password: "",
        });
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {type === "signup" ? (
        <div className="flex flex-col justify-center">
          <div className="font-bold text-3xl">Create an account</div>
          <div className="flex text-slate-500">
            Already have an account?
            <Link className="underline ml-1 text-slate-500" to="/signin">
              Login
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <div className="font-bold text-3xl">Welcome Back !</div>
          <div className="flex text-slate-500">
            Dont have an account?
            <Link className="underline ml-1 text-slate-500" to="/signup">
              Sign-up
            </Link>
          </div>
        </div>
      )}
      <div className="w-2/5 mt-4 flex flex-col">
        <LabelledInput
          label="Email"
          placeholder="z@example.com"
          type="text"
          onChange={(e) => {
            setPostInput((c) => ({
              ...c,
              email: e.target.value,
            }));
          }}
        ></LabelledInput>

        {type === "signup" && (
          <LabelledInput
            label="Name"
            placeholder="John Doe"
            type="text"
            onChange={(e) => {
              setPostInput((c) => ({
                ...c,
                name: e.target.value,
              }));
            }}
          ></LabelledInput>
        )}

        <LabelledInput
          label="Password"
          placeholder="******"
          type="password"
          onChange={(e) => {
            setPostInput((c) => ({
              ...c,
              password: e.target.value,
            }));
          }}
        ></LabelledInput>

        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {type === "signup" ? "Sign-up !" : "Sign-in !"}
        </button>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput = ({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) => {
  return (
    <div className="w-full grid gap-6 mb-6">
      <div className="w-full">
        <label className="block mb-2 text-sm font-bold text-black">
          {label}
        </label>
        <input
          type={type}
          id="first_name"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};

export default Auth;
export { LabelledInput };
