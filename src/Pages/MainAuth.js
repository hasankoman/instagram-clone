import Footer from "Components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login } from "../firebase";

export default function MainAuth() {
  const [imgNumber, setImgNumber] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //Login page image loop
  const changeImage = () => {
    setTimeout(() => {
      setImgNumber(imgNumber === 4 ? 1 : imgNumber + 1);
    }, 5000);
  };
  useEffect(() => {
    changeImage();
  }, []);

  useEffect(() => {
    changeImage();
  }, [imgNumber]);

  //Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <main className="flex min-h-[612px] mx-auto justify-center w-10/12 flex-col h-screen">
      <div className="flex justify-center h-full mt-8 ">
        <div className="--main-phone-bg w-[380.312px] flex self-center">
          <div className="relative mt-[27px] ml-[113px] w-full h-full">
            <img
              className={`--main-bg ${imgNumber === 1 ? "--bg-current" : ""} ${
                imgNumber - 1 === 1 ? "--bg-previous" : ""
              } `}
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
              alt=""
            />
            <img
              className={`--main-bg ${imgNumber === 2 ? "--bg-current" : ""} ${
                imgNumber - 1 === 2 ? "--bg-previous" : ""
              } `}
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
              alt=""
            />
            <img
              className={`--main-bg ${imgNumber === 3 ? "--bg-current" : ""} ${
                imgNumber - 1 === 3 ? "--bg-previous" : ""
              } `}
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
              alt=""
            />
            <img
              className={`--main-bg ${imgNumber === 4 ? "--bg-current" : ""} ${
                imgNumber === 1 ? "--bg-previous" : ""
              } `}
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[350px] flex flex-col gap-3 justify-center">
          <div className=" py-1 border border-gray-300 bg-white flex flex-col justify-center items-center">
            <a className="mt-8 cursor-pointer" href="#!">
              <figure>
                <img
                  src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                  alt=""
                />
              </figure>
            </a>
            <div className="mb-2 px-10 w-full">
              <form
                action=""
                className="flex flex-col gap-2 w-full mt-8"
                onSubmit={handleSubmit}
              >
                <div className="relative h-[38px] flex">
                  <span
                    className={`form-span ${
                      email !== "" ? "transform-form-span" : ""
                    }`}
                  >
                    Phone Number, username, or email
                  </span>
                  <input
                    type="text"
                    className={`w-full focus:outline-none pl-2 rounded-[3px] border border-gray-300 focus:border-gray-400 text-xs ${
                      email !== "" ? "pt-3.5 pb-1" : ""
                    }`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative h-[38px] flex ">
                  <span
                    className={`form-span ${
                      password !== "" ? "transform-form-span" : ""
                    }`}
                  >
                    Password
                  </span>
                  <input
                    className={`w-full focus:outline-none pl-2 rounded-[3px] border border-gray-300 focus:border-gray-400 text-xs ${
                      password !== "" ? "pt-3.5 pb-1" : ""
                    }`}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password !== "" ? (
                    <div className="h-full absolute right-0 pr-2 inline-flex text-[14px] leading-[14px]  justify-center items-center">
                      <button
                        type="button"
                        className=" cursor-pointer font-semibold ml-2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <button
                  className={` btn mb-0 ${
                    password.length >= 6 ? "opacity-100" : "opacity-30"
                  }`}
                  disabled={password.length >= 6 ? false : true}
                >
                  <div className="flex justify-center">Log In</div>
                </button>
                <div className="flex justify-center items-center my-3">
                  <div className="flex-1 h-[1px] bg-gray-300"></div>
                  <div className="px-4 text-gray-500 font-medium text-sm">
                    OR
                  </div>
                  <div className="flex-1 h-[1px] bg-gray-300"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 my-3 text-[#385185] cursor-pointer">
                  <i class="fa-brands fa-square-facebook"></i>
                  <span className="text-sm font-medium">
                    Log in with Facebook
                  </span>
                </div>
                <div className="flex justify-center mb-2 text-[#00376b]">
                  <a href="#!" className="text-xs">
                    Forgot password?
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="border border-gray-300 text-sm py-2 bg-white flex justify-center items-center">
            <span className="my-3">
              Don't have an account?{" "}
              <Link to="signup" className="font-semibold text-[#0095f7]">
                Sign Up
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center mt-1 text-sm">
            <span>Get the app.</span>
            <div className="flex gap-2">
              <figure>
                <img
                  className="h-10"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt=""
                />
              </figure>
              <figure>
                <img
                  className="h-10"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <Footer type="main" />
    </main>
  );
}
