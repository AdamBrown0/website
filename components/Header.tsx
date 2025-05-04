import ThemeSelector from "./ThemeSelector.tsx";

export default function Header() {
    return (
        <header class="flex justify-between items-center p-4 border-b">
            <h1 class="text-xl font-bold">adbr</h1>
            <ThemeSelector />
        </header>
    );
}