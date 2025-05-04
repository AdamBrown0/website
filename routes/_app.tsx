import { type PageProps } from "$fresh/server.ts";
import themeState from "../utils/theme.ts";

export default function App({ Component }: PageProps) {
  const { scheme } = themeState();

  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", scheme.value);
  }

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>adbr</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <div data-theme={scheme.value}>
        <Component />
      </div>
    </html>
  );
}
