import { useState } from "react";
import { AboutEditor } from "../AboutEditor";
import { AboutPreview } from "../AboutPreview";

export const AboutSection = ({ next }) => {
  const [markdown, setMarkdown] = useState("");
  const [showPreview, setShowPreview] = useState(true);

  const onSaveHandler = (e) => {
    e.preventDefault();
    if (markdown === "") return;
    next();
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">About</h1>

      <div className="mt-10 flex items-center">
        <AboutEditor markdown={markdown} setMarkdown={setMarkdown} />
        {showPreview ? <AboutPreview markdown={markdown} /> : null}
      </div>

      <div className="mt-5 flex justify-end">
        <button
          onClick={onSaveHandler}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};
