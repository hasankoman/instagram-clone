import Footer from "Components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="flex flex-col min-h-screen justify-between w-11/12 mx-auto ">
      <main className="flex min-h-[612px] my-auto justify-center">
        <div className="w-[350px] flex flex-col gap-3 justify-center min-h-full">
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
                // onSubmit={handleSubmit}
              >
                <div className="relative h-[38px] flex">
                  <span
                    className={`form-span ${
                      username !== "" ? "transform-form-span" : ""
                    }`}
                  >
                    Phone Number, username, or email
                  </span>
                  <input
                    type="text"
                    className={`w-full focus:outline-none pl-2 rounded-[3px] border border-gray-300  focus:border-gray-400 text-xs ${
                      username !== "" ? "pt-3.5 pb-1" : ""
                    }`}
                    onChange={(e) => setUsername(e.target.value)}
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
                  className={` bg-[#0094f5] opacity-40  text-white font-medium rounded-[3px] py-[5px] mt-1.5 border border-transparent text-[14px] leading-[18px] ${
                    password.length >= 8 ? "opacity-100" : ""
                  }`}
                  disabled={password.length >= 8 ? false : true}
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
          <div className="border border-gray-300 bg-white text-sm py-2 flex justify-center items-center">
            <span className="my-3">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold text-[#0095f7]">
                Sign Up
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center mt-1 text-sm">
            <span className="">Get the app.</span>
            <div className="flex gap-2">
              <a>
                <img
                  className="h-10"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt=""
                />
              </a>
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
      </main>

      <Footer />
    </section>
  );
}
