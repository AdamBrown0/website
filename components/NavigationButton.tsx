
// TODO: add some way to be able to customise stuff like hover colour
type ButtonProps = {
  text: string;
  link?: string;
  className?: string;
}

export default function NavigationButton({ text, link, className = "" }: ButtonProps) {
  return (
    <a
      href={link}
      className={`flex items-center justify-center w-full font-iosevka text-sm sm:text-sm md:text-lg lg:text-xl p-2 hover:bg-catppuccin-crust hover:font-bold rounded-full hover:text-catppuccin-mauve transform hover:scale-150 transition duration-300 ${className}`}>
      {text}
    </a>
  );
}