import NavigationButton from "./NavigationButton.tsx";
import Logo from "./Logo.tsx";

export default function Header() {
  return (
    <div id="root" className="relative h-full w-36 sm:w-[5vw] md:w-[7.5vw] lg:w-[10vw] p-4 gap-2">
      <Logo className="absolute top-4 left-1/2 transform -translate-x-1/2" />
      <div id="navigation" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] space-y-4 text-catppuccin-text">
        <NavigationButton text="about" link="/about"/>
        <NavigationButton text="projects" />
        <NavigationButton text="contact" />
      </div>
    </div>
  );
}