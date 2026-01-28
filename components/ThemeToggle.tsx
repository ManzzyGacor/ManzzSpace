"use client"

import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      style={{
        border: "1px solid #ccc",
        padding: "4px 8px",
        cursor: "pointer",
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  )
}
