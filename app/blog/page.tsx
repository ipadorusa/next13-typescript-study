'use client'
import { Suspense, useEffect, useState } from 'react'
import List from './list'

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

  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <List recentPosts={recentPosts} />
      </Suspense>
    </div>
  )
}
//@ts-ignore
