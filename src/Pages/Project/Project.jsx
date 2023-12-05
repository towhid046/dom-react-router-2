import { useLoaderData } from "react-router-dom";
import Users from "../../Components/Users/Users";
import './project.css'
export default function Project() {
  const users = useLoaderData();

  return (
    <>
      <div>
        <div className="container py_50">
          <h1 className="text_center mb_30">This is Projects Page</h1>
          <div className="users_wrapper jc-sb gap_20 grid">
            {users.map((user) => (
              <Users key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
