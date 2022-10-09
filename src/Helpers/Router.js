import { createBrowserRouter } from "react-router-dom";
//Pages
import Main from "Pages/Main";
import Explore from "Layouts/Explore";
import Login from "Pages/Login";
import Direct from "Layouts/Direct";
import SignUp from "Pages/SignUp";
import Profile from "Layouts/Profile";
import Saved from "Layouts/Saved";
import Loader from "Components/Loader";
import Tagged from "Layouts/Tagged";
import Posts from "Layouts/Posts";
import HomePosts from "Layouts/HomePosts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <HomePosts />,
      },
      {
        path: "direct/inbox",
        element: <div>Messages</div>,
      },
      {
        path: "stories/",
        element: <div>Stories</div>,
        children: [
          {
            path: ":username/:id",
            element: <div>hasankmns id:1 story</div>,
          },
          {
            path: "highlights/:storiesId",
            element: <div>hasankmns id:1 story</div>,
          },
        ],
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: ":username/",
        element: <Profile />,
        children: [
          {
            path: "saved",
            element: <Saved />,
          },
          {
            path: "tagged",
            element: <Tagged />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/direct",
    element: <Direct />,
  },
]);
export default Router;
