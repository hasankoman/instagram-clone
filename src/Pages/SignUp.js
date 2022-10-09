import { useEffect, useRef, useState } from "react";
import { register } from "../firebase";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Footer from "Components/Footer";

export default function SignUp() {
  const form = useRef();
  const navigate = useNavigate();
  const [formItems, setFormItems] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    return (formItems.email.length > 0) &
      (formItems.username.length > 0) &
      (formItems.password.length >= 6)
      ? true
      : false;
  };

  useEffect(() => {
    setIsValid(validate());
  }, [formItems]);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formItems);
    // navigate("/");
  };

  return (
    <section className="flex flex-col min-h-full justify-between w-11/12 mx-auto">
      <main className="flex min-h-[612px] mt-8 mb-14 justify-center">
        <div className="w-[350px] flex flex-col gap-3 justify-center">
          <div className=" py-1 border border-gray-300 bg-white flex flex-col justify-center items-center px-10 ">
            <a className="mt-8 cursor-pointer" href="#!">
              <figure>
                <img
                  src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                  alt=""
                />
              </figure>
            </a>
            <div className="flex justify-center items-center my-3">
              <h5 className="text-center font-medium text-instagram-text">
                Sign up to see photos and videos from your friends.
              </h5>
            </div>
            <button className="flex gap-2 justify-center items-center w-full rounded-md py-[6px]   bg-[#0094f5] text-white ">
              <i class="fa-brands fa-square-facebook"></i>
              <span className="text-sm font-medium">Log in with Facebook</span>
            </button>
            <div className="flex justify-center items-center my-5 w-full">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <div className="px-4 text-instagram-text font-medium text-sm">
                OR
              </div>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            <div className="mb-2 w-full">
              <form
                action=""
                className="flex flex-col gap-2 w-full "
                ref={form}
                // onChange={handleChange}
                onSubmit={handleSubmit}
              >
                <div className="relative h-[38px] flex">
                  <span
                    className={`form-span ${
                      formItems.email !== "" ? "transform-form-span" : ""
                    }`}
                  >
                    Mobile Number or Email
                  </span>
                  <input
                    autoComplete="off"
                    name="email"
                    required={true}
                    type="email"
                    className={`w-full focus:outline-none pl-2 rounded-[3px] border border-gray-300 focus:border-gray-400 text-xs ${
                      formItems.email !== "" ? "pt-3.5 pb-1" : ""
                    }`}
                    onChange={(e) =>
                      setFormItems({
                        ...formItems,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="relative h-[38px] flex">
                  <span
                    className={`form-span ${
                      formItems.fullName !== "" ? "transform-form-span" : ""
                    }`}
                  >
                    Full Name
                  </span>
                  <input
                    autoComplete="off"
                    name="fullName"
                    required={true}
                    type="text"
                    className={`w-full focus:outline-none pl-2 rounded-[3px] border border-gray-300 focus:border-gray-400 text-xs ${
                      formItems.fullName !== "" ? "pt-3.5 pb-1" : ""
                    }`}
                    onChange={(e) =>
                      setFormItems({
                        ...formItems,
                        fullName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="relative h-[38px] flex">
                  <span
                    className={`form-span ${
                      formItems.username !== "" ? "transform-form-span" : ""
                    }`}
                  >
                    Username
                  </span>
                  <input
                    autoComplete="off"
                    name="username"
                    required={true}
                    type="text"
                    className={`w-full focus:outline-none pl-2 rounded-[3px] border border-gray-300 focus:border-gray-400 text-xs ${
                      formItems.username !== "" ? "pt-3.5 pb-1" : ""
                    }`}
                    onChange={(e) =>
                      setFormItems({
                        ...formItems,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="relative h-[38px] flex ">
                  <span
                    className={`form-span ${
                      formItems.password !== "" ? "transform-form-span" : ""
                    }`}
                  >
                    Password
                  </span>
                  <input
                    autoComplete="off"
                    name="password"
                    required={true}
                    className={`w-full focus:outline-none pl-2 rounded-[3px] border border-gray-300 focus:border-gray-400 text-xs ${
                      formItems.password !== "" ? "pt-3.5 pb-1" : ""
                    }`}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) =>
                      setFormItems({
                        ...formItems,
                        password: e.target.value,
                      })
                    }
                  />
                  {formItems.password !== "" ? (
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
                <div className="text-xs text-instagram-text flex gap-2 flex-col text-center">
                  <span>
                    People who use our service may have uploaded your contact
                    information to Instagram.{" "}
                    <a
                      href="https://www.facebook.com/help/instagram/261704639352628"
                      className="font-medium "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </span>
                  <span>
                    By signing up, you agree to our{" "}
                    <a
                      href="https://help.instagram.com/581066165581870"
                      className="font-medium "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms
                    </a>
                    {" , "}
                    <a
                      href="https://www.facebook.com/privacy/policy"
                      className="font-medium "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                    {" and "}
                    <a
                      href="https://help.instagram.com/1896641480634370?ref=ig"
                      className="font-medium "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cookies Policy{" "}
                    </a>
                    .
                  </span>
                </div>
                <button
                  className={` btn disabled:pointer-events-none  ${
                    isValid ? "opacity-100" : "opacity-30"
                  }`}
                  disabled={!isValid}
                  type="submit"
                >
                  <div className="flex justify-center">Sign up</div>
                </button>
              </form>
            </div>
          </div>
          <div className="border border-gray-300 bg-white text-sm py-2 flex justify-center items-center">
            <span className="my-3">
              Have an account?{" "}
              <Link to="/login" className=" text-[#0095f7] ">
                Log in
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center mt-1 text-sm">
            <span className="">Get the app.</span>
            <div className="flex gap-2">
              <a
                href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure>
                  <img
                    className="h-10"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                    alt=""
                  />
                </figure>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D0104A932-2FB8-4775-8EAB-095B634880BA%26utm_content%3Dlo%26utm_medium%3Dbadge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure>
                  <img
                    className="h-10"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                    alt=""
                  />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer type="signUp" />
    </section>
  );
}
