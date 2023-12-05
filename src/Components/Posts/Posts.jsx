
import { useLoaderData } from 'react-router-dom';
import Post from './../Post/Post';
import './posts.css'

export default function Posts() {
    const posts = useLoaderData()

  return (
    <>
    <div className='py_30'>
        <h1 className='text_center mb_30'>Users Length: {posts.length}</h1>
        <div className="container posts_wrapper grid gap_20">
        {
            posts.map(post => <Post key={post.id} post={post}/>)   
        }
        </div>
    </div>
    </>
  )
}
