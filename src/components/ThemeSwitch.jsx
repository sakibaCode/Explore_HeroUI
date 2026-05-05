"use client";

import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="px-3 py-1 border rounded"
    >
      Toggle {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}