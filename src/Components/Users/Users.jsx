/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./users.css";
export default function Users({ user }) {
  const { id, name, email, phone, website } = user;
  return (
    <>
      <div>
        <div className="single_user bg_secondary p_20 br_5">
          <span>{id}</span>
          <h2>Name: {`${name.split(" ")[0]}  ${name.split(" ")[1]}`}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Website: {website}</p>
          <Link to={`/users/${id}`}>
            <button className="fz_18 pointer p_5 px_20 bg_color_green br_5 mt_10">
              See more...
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
