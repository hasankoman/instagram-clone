import Loader from "Components/Loader";
import { Outlet } from "react-router-dom";
import { logout } from "../firebase";
import { handleUser } from "Helpers/utils";
import { Link } from "react-router-dom";
import Navbar from "Components/Navbar";

export default function Home({ isLoading }) {
  if (isLoading) {
    return <Loader />;
  }
  const logoutHandle = async () => {
    await logout();
    handleUser(null);
  };

  return (
    <div className="">
      <Navbar />
      {/* <button onClick={logoutHandle}>Logout</button> */}
      <Outlet />
    </div>
  );
}
