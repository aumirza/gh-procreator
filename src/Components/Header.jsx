import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <div className="absolute w-full flex justify-between py-5 px-20">
      <Logo />
      <ThemeToggle />
    </div>
  );
};
