import { useLoaderData } from 'react-router-dom';
import './postDetails.css'

export default function PostDetails() {
  
  const {id, title, body} =  useLoaderData()

  return (
    <>
    <div className="container">
    <div className="post_details p_20 bg_color_green">
            <h3 className="mb_20">{id}</h3>
            <h2 className="mb_20">{title}</h2>
            <p className='fz_18'>{body}</p>
          </div>
    </div>
    </>
  )
}
