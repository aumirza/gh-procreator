import { useState } from "react";

import { SiGithub } from "react-icons/si";
import { FaArrowCircleRight } from "react-icons/fa";

export const UsernameSection = ({ next }) => {
  const [username, setUsername] = useState("");

  const isValidUsername = (username) => {
    const pattern = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    return pattern.test(username);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!isValidUsername(username)) return;
    next();
  };

  return (
    <div className="flex flex-col items-center text-white">
      <div className="flex flex-col items-center mb-5">
        <SiGithub className="text-9xl mb-5" />
        <span className=" text-3xl font-sans">Enter your Github username</span>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex items-center">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="h-12 w-72 px-2 rounded-l-xl shadow-lg border-4 border-r-0 border-indigo-500 focus:border-indigo-300 caret- text-indigo-500 focus:outline-none"
            type="text"
          />
          <button
            type="submit"
            className="h-12 px-5 bg-indigo-500 rounded-r-md  flex justify-center items-center"
          >
            <FaArrowCircleRight className="text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
};
