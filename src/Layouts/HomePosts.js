import HomeFooter from "Components/HomeFooter";
import Post from "Components/Post";
import Story from "Components/Story";
import { Users } from "Helpers/DataBase/Users";
import { Stories } from "Helpers/DataBase/Stories";
import { Link } from "react-router-dom";
import { Following } from "Helpers/DataBase/Following";
import Footer from "Components/Footer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Posts } from "Helpers/DataBase/Posts";
import Modals from "Components/Modals";

export default function HomePosts() {
  const settings = {
    infinite: false,
    draggable: false,
    className: "max-w-full w-full",
    adaptiveHeight: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    swipe: false,
  };

  const uid = useSelector((state) => state.auth.user.uid);
  const [currentUser, setCurrentUser] = useState();
  // takip edilenler array
  const [currentUsersFollowing, setCurrentUsersFollowing] = useState([]);
  //takip edilenlerin objesi obje
  const [followingUsers, setFollowingUsers] = useState([]);
  const [currentUsersStories, setCurrentUsersStories] = useState([]);
  const [currentUsersPosts, setCurrentUsersPosts] = useState([]);

  useEffect(() => {
    getCurrentUser();
  }, []);
  useEffect(() => {
    getCurrentUsersFollowing();
  }, [currentUser]);
  useEffect(() => {
    getFollowingUsers();
  }, [currentUsersFollowing]);
  useEffect(() => {
    getCurrentUsersPosts();
  }, [followingUsers]);
  useEffect(() => {
    getCurrentUsersStories();
  }, [followingUsers]);

  const getCurrentUser = () => {
    for (let user of Users) {
      if (user.uid === uid) {
        setCurrentUser(user);
      }
    }
  };
  const getCurrentUsersFollowing = () => {
    for (let currentUserFollow of Following) {
      if (currentUserFollow.uid === uid) {
        console.log(currentUserFollow);
        setCurrentUsersFollowing(currentUserFollow.following);
      }
    }
  };
  const getFollowingUsers = () => {
    setFollowingUsers([]);
    for (let followingUser of currentUsersFollowing) {
      for (let user of Users) {
        if (user.uid === followingUser.uid) {
          setFollowingUsers((oldArray) => [...oldArray, user]);
        }
      }
    }
  };
  const getCurrentUsersPosts = () => {
    setCurrentUsersPosts([]);
    for (let followingUser of currentUsersFollowing) {
      for (let post of Posts) {
        if (post.uid === followingUser.uid) {
          for (let p of post.posts) {
            setCurrentUsersPosts((oldArray) => [
              ...oldArray,
              [p, followingUser],
            ]);
          }
        }
      }
    }
  };
  const getCurrentUsersStories = () => {
    setCurrentUsersStories([]);
    for (let followingUser of currentUsersFollowing) {
      for (let story of Stories) {
        if (story.uid === followingUser.uid) {
          for (let s of story.stories) {
            setCurrentUsersStories((oldArray) => [
              ...oldArray,
              [s, followingUser],
            ]);
          }
        }
      }
    }
  };

  // const getCurrentUsersStories = () => {};

  // const sortArray = (accounts) => {
  //   console.log(accounts);
  //   let sortedArray = [];
  //   for (let Users of accounts) {
  //     if (Users.stories > 0) {
  //       sortedArray.unshift(Users);
  //     } else {
  //       sortedArray.push(Users);
  //     }
  //   }
  //   setSort(sortedArray);
  //   return sort;
  // };

  return (
    <section className=" flex justify-center relative bg-[#fafafa] mt-[70px]">
      <Modals />
      <div className="w-[470px] mr-8">
        <div className=" flex-shrink-0">
          <div className="flex my-4 border border-gray-300 py-3 rounded-lg  bg-white overflow-hidden stories-container">
            <Slider {...settings}>
              {followingUsers.map((user) => {
                return (
                  <Story
                    username={user.username}
                    profilePhoto={user.profilePhoto}
                    uid={user.uid}
                    type={"main"}
                    currentUid={uid}
                  />
                );
              })}
            </Slider>
          </div>
          {currentUsersPosts.map((item) => {
            return <Post post={item[0]} acc={item[1]} />;
          })}
        </div>
        {/* {getFollowingUser} */}

        {/* {Users.map((account, index) =>
          account.posts.map((post) => )
        )} */}
      </div>
      <div className="sticky bottom-0 w-[319px] hidden lg:block ">
        <div className="flex gap-5 h-[66px] mt-8 items-center">
          <div className="ring-1 ring-offset-2 ring-gray-200 rounded-full cursor-pointer">
            <Link to={`hasannkmnn`}>
              <figure>
                <img
                  src="https://randomuser.me/api/portraits/men/18.jpg"
                  alt=""
                  className="rounded-full w-14 h-14"
                />
              </figure>
            </Link>
          </div>
          <div className="flex flex-col text-sm">
            <Link to={`hasannkmnn`}>
              <span className="font-medium">hasannkmnn</span>
            </Link>
            <span className="text-gray-500">h a s a n</span>
          </div>
          <div className="text-[12px] text-[#0095f6] font-medium ml-auto">
            <a href="#!">
              <span>Switch</span>
            </a>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between mt-3 ">
            <span className="font-medium text-sm text-instagram-text">
              Suggestion For You
            </span>
            <Link to="/explore/people" className="text-[12px] font-medium">
              See All
            </Link>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <div className="flex gap-5 mt-2 items-center ">
              <div>
                <Link to={`eceozcnnn_`}>
                  <figure>
                    <img
                      src="https://randomuser.me/api/portraits/women/19.jpg"
                      alt=""
                      className="rounded-full w-8 h-8"
                    />
                  </figure>
                </Link>
              </div>
              <div className="flex flex-col text-sm">
                <div className="leading-[18px]">
                  <Link to={`eceozcnnn_`}>
                    <span className="font-medium leading-[14px]">
                      eceozcnnn_
                    </span>
                  </Link>
                </div>
                <div className="leading-4">
                  <span className="text-gray-500 text-[12px]">
                    New to Instagram
                  </span>
                </div>
              </div>
              <div className="text-[12px] text-[#0095f6] font-medium ml-auto">
                <a href="#!">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="flex gap-5 mt-2 items-center">
              <div>
                <Link to={`eceozcnnn_`}>
                  <figure>
                    <img
                      src="https://randomuser.me/api/portraits/women/19.jpg"
                      alt=""
                      className="rounded-full w-8 h-8"
                    />
                  </figure>
                </Link>
              </div>
              <div className="flex flex-col text-sm">
                <div className="leading-[18px]">
                  <Link to={`eceozcnnn_`}>
                    <span className="font-medium leading-[14px]">
                      eceozcnnn_
                    </span>
                  </Link>
                </div>
                <div className="leading-4">
                  <span className="text-gray-500 text-[12px]">
                    New to Instagram
                  </span>
                </div>
              </div>
              <div className="text-[12px] text-[#0095f6] font-medium ml-auto">
                <a href="#!">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="flex gap-5 mt-2 items-center">
              <div>
                <Link to={`eceozcnnn_`}>
                  <figure>
                    <img
                      src="https://randomuser.me/api/portraits/women/19.jpg"
                      alt=""
                      className="rounded-full w-8 h-8"
                    />
                  </figure>
                </Link>
              </div>
              <div className="flex flex-col text-sm">
                <div className="leading-[18px]">
                  <Link to={`eceozcnnn_`}>
                    <span className="font-medium leading-[14px]">
                      eceozcnnn_
                    </span>
                  </Link>
                </div>
                <div className="leading-4">
                  <span className="text-gray-500 text-[12px]">
                    New to Instagram
                  </span>
                </div>
              </div>
              <div className="text-[12px] text-[#0095f6] font-medium ml-auto">
                <a href="#!">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="flex gap-5 mt-2 items-center">
              <div>
                <Link to={`eceozcnnn_`}>
                  <figure>
                    <img
                      src="https://randomuser.me/api/portraits/women/19.jpg"
                      alt=""
                      className="rounded-full w-8 h-8"
                    />
                  </figure>
                </Link>
              </div>
              <div className="flex flex-col text-sm">
                <div className="leading-[18px]">
                  <Link to={`eceozcnnn_`}>
                    <span className="font-medium leading-[14px]">
                      eceozcnnn_
                    </span>
                  </Link>
                </div>
                <div className="leading-4">
                  <span className="text-gray-500 text-[12px]">
                    New to Instagram
                  </span>
                </div>
              </div>
              <div className="text-[12px] text-[#0095f6] font-medium ml-auto">
                <a href="#!">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="flex gap-5 mt-2 items-center">
              <div>
                <Link to={`eceozcnnn_`}>
                  <figure>
                    <img
                      src="https://randomuser.me/api/portraits/women/19.jpg"
                      alt=""
                      className="rounded-full w-8 h-8"
                    />
                  </figure>
                </Link>
              </div>
              <div className="flex flex-col text-sm">
                <div className="leading-[18px]">
                  <Link to={`eceozcnnn_`}>
                    <span className="font-medium leading-[14px]">
                      eceozcnnn_
                    </span>
                  </Link>
                </div>
                <div className="leading-4">
                  <span className="text-gray-500 text-[12px]">
                    New to Instagram
                  </span>
                </div>
              </div>
              <div className="text-[12px] text-[#0095f6] font-medium ml-auto">
                <a href="#!">
                  <span>Follow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <HomeFooter />
      </div>
    </section>
  );
}
