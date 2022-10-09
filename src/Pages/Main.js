import { useSelector } from "react-redux";
import Footer from "Components/Footer";
import { useEffect, useState } from "react";
import { login, logout } from "../firebase";
import { handleUser } from "Helpers/utils";
import { Toaster } from "react-hot-toast";
import Loader from "Components/Loader";
import Home from "./Home";
import MainAuth from "./MainAuth";
import { useLocation } from "react-router-dom";

export default function Main() {
  const location = useLocation();
  //Redux
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  //States
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [user, token]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <section className={`flex flex-col min-h-screen justify-between  w-full  `}>
      {user && token ? <Home isLoading={isLoading} /> : <MainAuth />}

      
      <Toaster />
    </section>
  );
}
