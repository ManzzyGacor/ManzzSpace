
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <strong>ManzzSpace</strong>

      <div style={{ display: "flex", gap: "12px" }}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>

        <ThemeToggle />
      </div>
    </nav>
  )
}
