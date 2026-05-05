"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
        isDark ? "bg-cyan-500" : "bg-blue-500"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
          isDark ? "translate-x-7" : ""
        }`}
      />
    </button>
  );
}