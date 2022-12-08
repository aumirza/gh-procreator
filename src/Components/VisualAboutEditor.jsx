import { useState } from "react";
import { IntroLines } from "./IntroLines";
import { IntroSubtitle } from "./IntroSubtitle";
import { IntroTitle } from "./IntroTitle";

export const VisualAboutEditor = ({ markdownChangeHandler }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [lines, setLines] = useState("");

  const titleChangeHandler = (title) => {
    setTitle(title);
    generateMarkDown();
  };

  const subtitleChangeHandler = (subtitle) => {
    setSubtitle(subtitle);
    generateMarkDown();
  };

  const lineChangeHandler = (lines) => {
    setLines(lines);
    generateMarkDown();
  };

  const generateMarkDown = () => {
    let markdown = "";
    if (title) {
      markdown += "# " + title + "\n";
    }
    if (subtitle) {
      markdown += "### " + subtitle + "\n";
    }
    if (lines) {
      markdown += lines.join("\n\n") + " ";
    }
    markdownChangeHandler(markdown);
  };

  return (
    <div className="">
      <IntroTitle setTitle={titleChangeHandler} className="mb-3" />
      <IntroSubtitle setSubtitle={subtitleChangeHandler} className="mb-3" />
      <IntroLines setlines={lineChangeHandler} />
    </div>
  );
};
