import { connectDB } from "@/lib/mongodb"
import Post from "@/lib/models/Post"
import { NextResponse } from "next/server"

export async function GET() {
  await connectDB()
  const posts = await Post.find({ published: true }).sort({
    createdAt: -1,
  })
  return NextResponse.json(posts)
}

export async function POST(req: Request) {
  await connectDB()
  const body = await req.json()
  const post = await Post.create(body)
  return NextResponse.json(post)
}
