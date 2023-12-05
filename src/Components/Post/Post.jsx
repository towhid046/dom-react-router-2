import "./post.css";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  const { id, title, body } = post;

  return (
    <>
      <div>
        <div className="container">
          <div className="single_post p_20 br_5 bg_secondary">
            <h3 className="mb_20">{id}</h3>
            <h2 className="mb_20">{title}</h2>
            <Link to={`/posts/${id}`}>
              <button className="p_5 px_20 br_5 bg_primary mt_10 pointer">
                See details..
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
