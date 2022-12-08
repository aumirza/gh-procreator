import { Input } from "./ui/Input";

export const IntroSubtitle = ({ className, setSubtitle }) => {
  const subtitleChangeHandler = (e) => {
    const subtitle = e.target.value;
    setSubtitle(subtitle);
  };

  return (
    <div className={"text-white my-3" + " " + className}>
      <h2 className="text-lg border-b border-white mb-2">Subtitle</h2>
      <Input
        className="w-80"
        onChange={subtitleChangeHandler}
        defaultValue={"A passionate frontend developer from India"}
      />
    </div>
  );
};
