import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="bg_secondary py_25 color_ash">
        <div className="container flex jc_sb ai_c">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <ul className="flex gap_25 ai_c fz_18">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to={"/project"}>Users</Link>
            </li>
            <li>
              <Link to={"/posts"}>Posts</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <Link to={"/login"}>
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
