type LogoProps = {
  text?: string;
  className?: string;
}

export default function Logo({ text = "adbr", className = "" }: LogoProps) {
  return (
    <a href="/" className={`${className} flex justify-center items-center w-fit sm:text-sm md:text-xl lg:text-5xl text-center text-catppuccin-mauve font-iosevka font-bold italic`}>
      {text}
    </a>
  )
}
