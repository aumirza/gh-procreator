import { Logo } from "../Logo/Logo"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"

export const Header = () => {
    return (
        <div className="absolute w-full flex justify-between py-5 px-20">
            <Logo />
            <ThemeToggle />
        </div>
    )
}
