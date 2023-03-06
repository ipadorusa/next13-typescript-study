import Item from './item'

interface recentPostsProps {
  avatar: string
  createdAt: string
  id: string
  name: string
  title: string
}


const List = ({ recentPosts:Array<recentPostsProps> }) => {
  return (
    <ul>
      {recentPosts.map((post) => (
        <Item key={post.id} post={...post} />
      ))}
    </ul>
  )
}

export default List
