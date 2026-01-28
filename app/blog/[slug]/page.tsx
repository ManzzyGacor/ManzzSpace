import { connectDB } from "@/lib/mongodb"
import Post from "@/lib/models/Post"

export default async function BlogDetail({
  params,
}: {
  params: { slug: string }
}) {
  await connectDB()
  const post = await Post.findOne({ slug: params.slug })

  if (!post) return <div>Artikel tidak ditemukan</div>

  return (
    <main style={{ padding: 24 }}>
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  )
}
