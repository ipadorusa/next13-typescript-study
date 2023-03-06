import Link from 'next/link'
import { recentPostsProps } from './type'

type ItemProps = {
  post: recentPostsProps
}

const Item = ({ post }: ItemProps) => {
  console.log(post)
  const { id, avatar, name, title } = post
  return (
    <li className="item">
      <Link href={`/blog/${id}`}>
        <div className="img">
          <img src={avatar} alt={name} />
        </div>
        <strong className="title">{title}</strong>
        <span className="name">{name}</span>
      </Link>
    </li>
  )
}
export default Item
