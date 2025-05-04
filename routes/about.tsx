import Header from "../components/Header.tsx";

export default function About() {
  return (
    <div className="dark:bg-catppuccin-base w-screen h-screen flex flex-col">
      <Header />
      <div className="flex justify-center">
        <p className="text-catppuccin-text">
          about
        </p>
      </div>
    </div>
  );
}
