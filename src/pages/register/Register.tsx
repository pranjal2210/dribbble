import React, { useContext, useEffect, useState, FormEvent } from "react";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import wixIcon from "../../assets/wixicon.svg";
import googleIcon from "../../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/api";
import toast from "react-hot-toast";

const Register: React.FC = () => {
  const { dispatch, state } = useContext(GlobalStateContext);
  const [fullname, setFullname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [state.isAuthenticated, navigate]);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const savedUser = await registerUser(fullname, username, email, password);
      dispatch({ type: "REGISTER", payload: savedUser });

      setSuccessMessage("Registration successful!");
      setFullname("");
      setUsername("");
      setEmail("");
      setPassword("");
      toast.success("Registration Successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setErrorMessage((error as Error).message);
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
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="underline">Take the course</span>
            <img
              src="https://cdn.dribbble.com/assets/ads/wix-link-arrow-8f0466c1e5b205f07bf5dca616aa21fe6e3d6f9931a50729cdf25612eda73377.png"
              className="w-[15px]"
              alt="Arrow Icon"
            />
          </a>
        </div>
        <div className="h-[55%]">
          <a
            href="http://wix.com/seo/learn/course?utm_campaign=pa_media_buying_studio_all_brnd_all_en_10/24_des_clicks_dribbble_sign-in%5Efix&amp;experiment_id=%5Eseo%5E%5Eseo-course"
            rel="noopener noreferrer"
            target="_blank"
          >
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
        <div className="ml-[100px] px-[60px] py-4 w-full h-full max-w-[536px] max-laptop_sm:ml-0">
          <h2
            className="mb-6 text-2xl font-bold"
            style={{ fontFamily: "Mona-Sans" }}
          >
            Sign up to Dribbble
          </h2>
          <div className="h-14 w-full text-white text-sm flex items-center justify-center rounded-[100px] bg-black cursor-pointer gap-4 font-semibold font-serif">
            <img src={googleIcon} className="h-[18px]" alt="Google Icon" />
            Sign up with Google
          </div>
          <div className="relative flex items-center justify-center my-[30px] w-full">
            <hr className="w-full h-[1px] bg-gray-200 border-0" />
            <span className="absolute px-4 text-base text-gray-400 bg-white">
              or
            </span>
          </div>
          <form onSubmit={handleRegister}>
            <div className="flex w-full gap-4">
              <div className="mt-[14px] mb-[4px] w-full">
                <label className="text-[15px] text-[#0c0c21] mb-2">
                  Name
                  <input
                    className="h-14 p-4 w-full border border-gray-200 rounded-xl outline-none bg-white text-gray-900 transition duration-300 ease-in-out hover:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] focus:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] focus:border-pink-300"
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mt-[14px] mb-[4px] w-full">
                <label className="text-[15px] text-[#0c0c21] mb-2">
                  Username
                  <input
                    className="h-14 p-4 w-full border border-gray-200 rounded-xl outline-none bg-white text-gray-900 transition duration-300 ease-in-out hover:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] focus:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] focus:border-pink-300"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="mt-[14px] mb-[4px] w-full">
              <label className="text-[15px] text-[#0c0c21] mb-2">
                Email
                <input
                  className="h-14 p-4 w-full border border-gray-200 rounded-xl outline-none bg-white text-gray-900 transition duration-300 ease-in-out hover:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] focus:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] focus:border-pink-300"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="mt-[14px] mb-[4px] w-full">
              <label className="text-[15px] text-[#0c0c21] mb-2">
                Password
                <input
                  className="h-14 p-4 w-full border border-gray-200 rounded-xl outline-none bg-white text-gray-900 transition duration-300 ease-in-out hover:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] focus:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] focus:border-pink-300"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  placeholder="6+ Characters"
                />
              </label>
            </div>
            <div className="mt-[14px] mb-[4px] w-full flex gap-2">
              <input type="checkbox" id="agree" required />
              <p className="text-sm text-gray-700">
                I agree with Dribbble's Terms of Service, Privacy Policy, and
                default Notification Settings.
              </p>
            </div>
            <button
              className="w-full bg-[#0c0c21] rounded-[100px] font-semibold text-white mt-5 h-14"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <p className="text-[#3d3b4e] text-center mt-5 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
