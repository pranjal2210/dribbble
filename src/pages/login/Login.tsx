import React, { useContext, useEffect, useState, FormEvent } from "react";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import wixIcon from "../../assets/wixicon.svg";
import googleIcon from "../../assets/google.svg";
import bcrypt from "bcryptjs";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { User } from "../../types/User";

const Login: React.FC = () => {
  const { dispatch, state } = useContext(GlobalStateContext);
  const [identifier, setIdentifier] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [state.isAuthenticated, navigate]);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response = await fetch("http://localhost:3001/users");
      const users: User[] = await response.json(); // Assuming User[] is the correct type

      const user = users.find(
        (user) => user.username === identifier || user.email === identifier
      );

      if (user && bcrypt.compareSync(password, user.password)) {
        // Dispatch action to log in the user, ensuring `id` is included
        dispatch({
          type: "LOGIN",
          payload: {
            id: user.id,
            fullname: user.fullname,
            username: user.username,
            email: user.email,
            password: "",
          },
        });

        setIdentifier("");
        setPassword("");
        toast.success("Login Successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        console.log("Invalid username/email or password");
      }
    } catch (error: any) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="max-w-[388px] h-full relative max-laptop_sm:hidden">
        <div className="h-[45%] bg-[#0c0c21] px-8 pt-[68px]">
          <img src={wixIcon} className="h-8" alt="Wix Icon" />
          <p className="text-white text-[28px] leading-[38px] font-normal mt-10 mb-2 tracking-[1px] font-sans">
            Deliver more value to clients with an expert-led SEO course.
          </p>
          <a
            href="http://wix.com/seo/learn/course?utm_campaign=pa_media_buying_studio_all_brnd_all_en_10/24_des_clicks_dribbble_sign-in%5Efix&amp;experiment_id=%5Eseo%5E%5Eseo-course"
            className="mt-4 inline-flex items-center text-base text-white gap-[6px]"
          >
            <span className="underline">Take the course</span>
            <img
              src="https://cdn.dribbble.com/assets/ads/wix-link-arrow-8f0466c1e5b205f07bf5dca616aa21fe6e3d6f9931a50729cdf25612eda73377.png"
              className="w-[15px]"
              alt="Arrow"
            />
          </a>
        </div>
        <div className="h-[55%]">
          <a href="http://wix.com/seo/learn/course?utm_campaign=pa_media_buying_studio_all_brnd_all_en_10/24_des_clicks_dribbble_sign-in%5Efix&amp;experiment_id=%5Eseo%5E%5Eseo-course">
            <video
              className="block w-full h-full max-h-[704px] object-cover"
              muted
              autoPlay
              loop
              src="https://cdn.dribbble.com/uploads/58489/original/9d10766cd3ed04dbbe770edb40140700.mp4?1727183698"
            ></video>
          </a>
        </div>
      </div>
      <div className="relative flex items-center w-full h-full shadow-md max-laptop_sm:justify-center overflow-y-auto">
        <div className="ml-[100px] px-[60px] py-[30px] w-full h-full max-w-[536px] max-laptop_sm:ml-0">
          <h2
            className="mb-10 text-2xl font-bold"
            style={{ fontFamily: "Mona-Sans" }}
          >
            Sign in to Dribbble
          </h2>
          <div className="h-14 w-full flex items-center justify-center rounded-[100px] border border-solid border-gray-200 cursor-pointer gap-4 font-semibold font-serif">
            <img src={googleIcon} className="h-[18px]" alt="Google Icon" />
            Sign in with Google
          </div>
          <div className="relative flex items-center justify-center my-[30px] w-full">
            <hr className="w-full h-[1px] bg-gray-200 border-0" />
            <span className="absolute px-4 text-base text-gray-400 bg-white">
              or sign in with email
            </span>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mt-[14px] mb-[4px] w-full">
              <label className="text-[15px] font-bold text-[#0c0c21] mb-2">
                Username or Email
                <input
                  className="w-full p-4 font-normal text-gray-900 bg-white border border-gray-200 outline-none h-14 rounded-xl"
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  aria-label="Username or Email"
                />
              </label>
            </div>
            <div className="mt-[14px] mb-[4px] w-full">
              <label className="text-[15px] font-bold text-[#0c0c21] mb-2">
                Password
                <input
                  className="w-full p-4 text-gray-900 bg-white border border-gray-200 outline-none h-14 rounded-xl"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-label="Password"
                />
              </label>
            </div>

            <button
              className="w-full bg-[#0c0c21] rounded-[100px] font-semibold text-white mt-5 h-14"
              type="submit"
            >
              Sign in
            </button>
          </form>
          <p className="text-[#3d3b4e] text-center mt-5 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
