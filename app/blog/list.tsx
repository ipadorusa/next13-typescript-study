import Item from './item'

interface BlogData {
  avatar: string
  createdAt: string
  id: string
  name: string
  title: string
}

interface HomeProps {
  recentPosts: BlogData[]
}

const List: React.FC<HomeProps> = ({ recentPosts }) => {
  return (
    <ul>
      {recentPosts.map((post) => (
        <Item key={post.id} post={post} />
      ))}
    </ul>
  )
}

export default List
