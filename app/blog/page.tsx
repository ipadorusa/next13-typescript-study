'use client'
import { Suspense, useEffect, useState } from 'react'

export default function Page() {
  // Fetch data directly in a Server Component
  const [recentPosts, setRecentPosts] = useState([])
  useEffect(() => {
    async function getPosts() {
      const res = await fetch('https://63d271c606556a0fdd3c55ed.mockapi.io/articles')
      const posts = await res.json()
      setRecentPosts(posts)
    }
    getPosts()
  }, [recentPosts])
  // Forward fetched data to your Client Component
  //@ts-ignore
  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <List recentPosts={recentPosts} />
      </Suspense>
    </div>
  )
}
//@ts-ignore
function List({ recentPosts }) {
  return (
    <ul>
      {recentPosts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
