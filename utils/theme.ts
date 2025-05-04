import { Signal, useSignal } from "@preact/signals";

export type ColorScheme = "default" | "catppuccin";

interface ThemeState {
    scheme: Signal<ColorScheme>;
    setScheme: (scheme: ColorScheme) => void;
}

const createThemeState = (): ThemeState => {
    // deno-lint-ignore react-rules-of-hooks
    const scheme = useSignal<ColorScheme>(
        (typeof localStorage !== "undefined" 
            && (localStorage.getItem("colorScheme") as ColorScheme)) || "default"
    );

    const setScheme = (newScheme: ColorScheme) => {
        scheme.value = newScheme;
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("colorScheme", newScheme);
        }
        document.documentElement.setAttribute("data-theme", newScheme);
    };

    return { scheme, setScheme };
}

export default createThemeState;