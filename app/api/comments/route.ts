import { getToken } from "next-auth/jwt"
import { connectDB } from "../../../../lib/mongodb"
import Comment from "../../../../lib/models/Comment"

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const token = await getToken({ req: req as any })
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" })
  }

  const body = await req.json()
  await connectDB()

  const comment = await Comment.create({
    ...body,
    userId: token.sub,
  })

  return NextResponse.json(comment)
}
