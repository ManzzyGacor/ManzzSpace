async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  })
  return res.json()
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main style={{ padding: 24 }}>
      <h1>Blog</h1>

      {posts.map((post: any) => (
        <div key={post._id} style={{ marginBottom: 16 }}>
          <h2>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </h2>
          <p>{post.subtitle}</p>
        </div>
      ))}
    </main>
  )
}
