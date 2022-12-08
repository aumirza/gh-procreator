import { useState } from "react";
import { VisualAboutEditor } from "./VisualAboutEditor";

export const AboutEditor = ({ markdown, setMarkdown }) => {
  const [markdownMode, setMarkdownMode] = useState(false);

  const markdownChangeHandler = (markdown) => setMarkdown(markdown);

  return (
    <div
      className="w-[42.5vw] h-[34rem]
        scrollbar:w-1 scrollbar:bg-slate-600  scroll-thumb:bg-slate-500 rounded-md border-4 p-3 mr-5 overflow-y-scroll"
    >
      {markdownMode ? (
        <textarea
          onChange={(e) => markdownChangeHandler(e.target.value)}
          className="w-full h-full focus:outline-none"
        >
          {markdown}
        </textarea>
      ) : (
        <VisualAboutEditor markdownChangeHandler={markdownChangeHandler} />
      )}
    </div>
  );
};
