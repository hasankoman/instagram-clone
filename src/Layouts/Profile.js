import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      Profile
      <Link to={""}>Posts</Link>
      <Link to={"saved/"}>Saved</Link>
      <Link to={"tagged/"}>Tagged</Link>
      <Outlet />
    </div>
  );
}
