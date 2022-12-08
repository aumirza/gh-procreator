import { Input } from "../ui/Input";
import React from "react";
import { socials } from "../../constants";

export const SocialSection = ({ next }) => {
  const submitHandler = () => {
    next();
  };

  return (
    <div className="pt-28 h-full w-full flex flex-col items-center overflow-x-scroll">
      <h1 className="text-4xl font-bold text-white">Social Section</h1>

      <div className="mt-16 grid gap-5 gap-x-20 grid-cols-2">
        {socials.map((social) => (
          <div className="flex items-end">
            <social.icon className="h-8 w-8 mr-2 text-white" />

            <Input className="my-0 bg-transparent h-8 " />
          </div>
        ))}
      </div>

      <div className="my-5">
        <button
          onClick={submitHandler}
          className="w-28 border-2 border-white text-white hover:border-gray-500 px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};
