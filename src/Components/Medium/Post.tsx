const Post: React.FC<any> = ({ post }) => {
  return (
    <div className='hover:scale-105 transition-all duration-200 w-10/12'>
      <a href={post.link}>
        <img
          src={post.img}
          alt='medium img'
        />
      </a>
    </div>
  )
}

export default Post
