import Link from 'next/link'

type ItemProps = {
  title: string
}

const Item: React.FunctionComponent<ItemProps> = ({ post }) => {
  console.log(post)
  const { id, avatar, name, title } = post
  return (
    <li>
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