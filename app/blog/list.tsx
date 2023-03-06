import Item from './item'
import { recentPostsProps } from './type'

const List = ({ recentPosts }: { recentPosts: recentPostsProps[] }) => {
  return (
    <ul className="blog__list">
      {recentPosts.map((post) => (
        <Item key={post.id} post={post} />
      ))}
    </ul>
  )
}

export default List
