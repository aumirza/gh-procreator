import { useEffect } from "react";
import { useState } from "react";
import { intros } from "../constants";
import { GenUId } from "../Utils";
import { IntroLine } from "./IntroLine";

export const IntroLines = ({ className, setlines }) => {
  const [selectedLines, setSelectedLines] = useState([]);
  const [introsLeft, setIntrosLeft] = useState([...intros]);

  const generatefilledLines = () => {
    let lines = [];
    selectedLines.forEach((selLine) =>
      selLine.value
        ? lines.push(
            selLine.text +
              " " +
              (selLine.link?.value
                ? `[${selLine.value}](${selLine.link.value})`
                : selLine.value)
          )
        : ""
    );
    setlines(lines);
  };

  const lineSelectHandler = (line) =>
    setSelectedLines((selectedLines) => [...selectedLines, line]);

  const lineChangeHandler = (newLine, curLineID) => {
    const index = selectedLines.findIndex(
      (selLine) => selLine.id === curLineID
    );
    const newSelLines = [...selectedLines];
    newSelLines[index] = newLine;
    setSelectedLines(newSelLines);
  };

  const deleteLineHandler = (linId) =>
    selectedLines.length > 1
      ? setSelectedLines(
          selectedLines.filter((selLine) => selLine.id !== linId)
        )
      : (selectedLines[0].value = null);

  const incrementHandler = () =>
    selectedLines.length < intros.length
      ? lineSelectHandler(introsLeft[0])
      : null;

  useEffect(() => {
    // To stop it from running initially
    if (selectedLines) {
      setIntrosLeft((_) =>
        intros.filter(
          (line) => !selectedLines.find((intro) => intro.id === line.id)
        )
      );
      generatefilledLines();
    }
  }, [selectedLines]);

  useEffect(() => {
    lineSelectHandler(introsLeft[0]);
  }, []);

  return (
    <div className={"my-3" + " " + className}>
      <h3 className="text-white text-lg border-b">About</h3>

      <div className="">
        {selectedLines.map((line) => (
          <IntroLine
            key={line.id}
            line={line}
            linesLeft={introsLeft}
            lineChangeHandler={lineChangeHandler}
            deleteLineHandler={deleteLineHandler}
          />
        ))}
      </div>

      <button
        className="px-2 py-1 bg-white rounded-sm"
        onClick={incrementHandler}
      >
        Add Another
      </button>
    </div>
  );
};
