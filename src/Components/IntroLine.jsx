import { Input } from "./ui/Input";

export const IntroLine = ({
  linesLeft,
  line,
  lineChangeHandler,
  deleteLineHandler,
}) => {
  const optionChangeHandler = (e) => {
    const newLineId = e.target.value;
    const newLine = linesLeft.find((intro) => intro.id == newLineId);
    lineChangeHandler(newLine, line.id);
  };

  const valueInputChangeHandler = (e) => {
    const value = e.target.value;
    const newLine = { ...line };
    newLine.value = value;
    lineChangeHandler(newLine, line.id);
  };

  const linkInputChangeHadler = (e) => {
    const link = e.target.value;
    const newLine = { ...line };
    newLine.link.value = link;
    lineChangeHandler(newLine, line.id);
  };

  return (
    <div className="my-3 flex">
      <div className="flex-grow">
        <select
          className="h-6 w-80 mb-1 rounded-sm bg-white focus:outline-none"
          onChange={optionChangeHandler}
          name=""
          id=""
        >
          <option value={line.id}>{line.text}</option>
          {linesLeft.map(({ id, text }) => (
            <option key={id} value={id}>
              {text}
            </option>
          ))}
        </select>

        <div className="flex flex-col w-48">
          <Input
            onChange={valueInputChangeHandler}
            value={line.value}
            placeholder={line.placeholder}
          />
          {line.link ? (
            <Input
              onChange={linkInputChangeHadler}
              placeholder={line.link.placeholder}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="">
        <button
          onClick={() => deleteLineHandler(line.id)}
          className="bg-white px-2 rounded py-1"
        >
          X
        </button>
      </div>
    </div>
  );
};
