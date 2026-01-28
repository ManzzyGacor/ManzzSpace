"use client"

import { useState } from "react"

export default function AdminPage() {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    imageUrl: "",
    content: "",
  })

  async function submit() {
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        slug: form.title.toLowerCase().replace(/\s+/g, "-"),
      }),
    })

    alert("Artikel berhasil dibuat")
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Admin – Post Artikel</h1>

      <input
        placeholder="Judul"
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />
      <br />

      <input
        placeholder="Sub Judul"
        onChange={(e) =>
          setForm({ ...form, subtitle: e.target.value })
        }
      />
      <br />

      <input
        placeholder="Image URL"
        onChange={(e) =>
          setForm({ ...form, imageUrl: e.target.value })
        }
      />
      <br />

      <textarea
        placeholder="Isi artikel (HTML)"
        rows={10}
        onChange={(e) =>
          setForm({ ...form, content: e.target.value })
        }
      />
      <br />

      <button onClick={submit}>Publish</button>
    </main>
  )
}
