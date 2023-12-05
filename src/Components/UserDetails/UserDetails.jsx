
import { useLoaderData } from 'react-router-dom';
import './userDetails.css'

export default function UserDetails() {

  const {id, name, email, phone, website} = useLoaderData()
  return (
    <>
    <div className="container">
        <div className="p_20 bg_color_green singel_user_details">
          <h1>{id}</h1>
          <h2>{name}</h2>
          <h3>{email}</h3>
          <p>{phone}</p>
          <p>{website}</p>
        </div>
    </div>
    </>
  )
}
