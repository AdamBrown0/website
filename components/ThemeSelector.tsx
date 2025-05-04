import themeState, { ColorScheme } from "../utils/theme.ts";

export default function ThemeSelector() {
    const { scheme, setScheme } = themeState();

    const themes = [
        { name: "Default", value: "default", bg: "bg-primary-500" },
        { name: "Catppuccin", value: "catppuccin", bg: "bg-primary-500"}
    ];

    return (
        <div class="flex items-center gap-2">
            <label for="theme-select" class="sr-only">Colour scheme</label>
            <select 
                id="theme-select"
                value={scheme.value}
                onChange={(e) => setScheme(e.currentTarget.value as ColorScheme)}
                class="p-2 border rounded"    
            >
                {themes.map((theme) => (
                    <option value={theme.value}>{theme.name}</option>
                ))}
            </select>
            <div class="flex gap-1">
                {themes.map((theme) => (
                    <button
                        onClick={() => setScheme(theme.value as ColorScheme)}
                        class={
                            `w-6 h-6 rounded-full
                            ${theme.bg} 
                            ${scheme.value === theme.value ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
                        aria-label={`${theme.name} theme`}    
                    />
                ))}
            </div>
        </div>
    );
}