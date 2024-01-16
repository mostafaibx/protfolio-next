import Post from './Post'
import { posts } from '../../data/medium'

const Medium = () => {
  return (
    <>
      <h1 className='text-4xl font-bold text-white text-center mt-10 mb-20'>
        Medium Posts
      </h1>

      <div className='flex justify-center items-center'>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </>
  )
}

export default Medium
