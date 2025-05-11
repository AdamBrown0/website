import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function NotFoundPage({}: PageProps) {
  return (
    <div class="bg-black text-white h-screen flex flex-col justify-center items-center text-5xl font-iosevka">
      <h1 class="justify-center text-5xl font-extrabold">404</h1>
      <p class="justify-center mt-4 text-2xl">page not found</p>
      <a
        href="/"
        class="justify-center mt-6 text-catppuccin-mauve hover:text-catppuccin-red text-2xl"
      >
        return home
      </a>
    </div>
  );
}