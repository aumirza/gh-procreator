import { useEffect, useState } from "react";
import { FaSync } from "react-icons/fa";
import { Input } from "./ui/Input";

const titles = ["Hi 👋, I'm", "Hi! my name is"];

export const IntroTitle = ({ className, setTitle }) => {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState(null);

  const titleChangeHandler = () =>
    setIndex((index) => (index < titles.length - 1 ? index + 1 : 0));
  const nameChangeHandler = (e) => setName(e.target.value);

  useEffect(() => {
    if (name) setTitle(titles[index] + " " + name);
    else setTitle("");
  }, [name, index, setTitle]);

  return (
    <div className={`text-white ${className}`}>
      <h1 className="border-b border-white text-xl mb-2">Title</h1>
      <div className="flex items-center">
        <h1 className="text-xl mr-5">{titles[index]}</h1>
        <FaSync onClick={titleChangeHandler} className="text-sm" />
      </div>
      <Input
        value={name}
        onChange={nameChangeHandler}
        placeholder="Your name"
      />
    </div>
  );
};
