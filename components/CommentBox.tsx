"use client"

import { useSession } from "next-auth/react"
import { useState } from "react"

export default function CommentBox({ postId }: { postId: string }) {
  const { data: session } = useSession()
  const [text, setText] = useState("")

  if (!session) {
    return <p>Login untuk menulis komentar.</p>
  }

  async function submit() {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        postId,
        content: text,
      }),
    })

    setText("")
    alert("Komentar terkirim")
  }

  return (
    <div style={{ marginTop: 24 }}>
      <h3>Komentar</h3>

      <textarea
        rows={4}
        placeholder="Tulis komentar..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <br />

      <button onClick={submit}>
        Kirim
      </button>
    </div>
  )
}
