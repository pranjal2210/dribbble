import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
import dribbbleIcon from "../assets/dribbble.svg";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import { FaAngleDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext)!; // Non-null assertion
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <div
      style={{ fontFamily: "Mona-Sans" }}
      className="grid grid-cols-[1fr_96px_1fr] max-laptop:grid-cols-[90px_1fr_auto] max-laptop_sm:grid-cols-[20px_90px_1fr] max-laptop:gap-[24px] gap-[40px] px-10 h-[100px] justify-center items-center bg-[#f8f7f4] relative w-full"
    >
      {openMenu ? (
        <img
          src={close}
          alt="close"
          className="hidden cursor-pointer max-w-8 max-laptop_sm:block"
          onClick={() => setOpenMenu(false)}
        />
      ) : (
        <img
          src={hamburger}
          alt="hamburger"
          className="hidden cursor-pointer max-w-8 max-laptop_sm:block"
          onClick={() => setOpenMenu(true)}
        />
      )}

      <div
        className={`absolute z-[2] w-full top-[100px] left-0 h-screen bg-black/20 ${
          openMenu ? "block" : "hidden"
        } laptop_sm:hidden block`}
      >
        <div
          className={`absolute z-[2] w-full top-0 ${
            openMenu ? "left-0" : "-left-full"
          } border-t border-solid border-t-[#e7e7e9] bg-[#f8f7f4] p-8 transition-all ease-in-out`}
        >
          <ul className="flex flex-col items-start w-full list-none">
            <li className="flex flex-col items-start w-full text-[#0d0c22] leading-[1]">
              <a
                href="/hiring"
                className="pb-3 text-sm font-semibold text-inherit"
              >
                Find designers
              </a>
              <ul className="my-3 pl-6 border-l border-solid border-l-[#e7e7e9] flex flex-col list-none gap-6">
                <li>
                  <a
                    className="flex flex-col text-inherit text-[15px] font-medium leading-[1]"
                    href="/designers"
                  >
                    Designer search
                    <span className="mt-1 text-[#3d3d4e] text-xs font-normal">
                      Quickly find your next designer
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex flex-col text-inherit text-[15px] font-medium leading-[1]"
                    href="/hiring"
                  >
                    Post a job
                    <span className="mt-1 text-[#3d3d4e] text-xs font-normal">
                      The #1 job board for design talent
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="flex flex-col items-start w-full text-[#0d0c22] leading-[1]">
              <a
                href="/shots/popular"
                className="py-3 text-sm font-semibold text-inherit"
              >
                Inspiration
              </a>
            </li>

            <li className="flex flex-col items-start w-full text-[#0d0c22] leading-[1]">
              <a
                className="py-3 text-sm font-semibold text-inherit"
                href="/jobs"
              >
                Jobs
              </a>
            </li>

            <li className="flex flex-col items-start w-full text-[#0d0c22] leading-[1]">
              <a
                className="pt-3 text-sm font-semibold text-inherit"
                href="/pro"
              >
                Go Pro
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Link to="/" className="hidden max-laptop:block">
        <img src={dribbbleIcon} alt="Logo" className="h-24" />
      </Link>
      <div className="block max-laptop_sm:hidden">
        <ul className="flex flex-row text-[14px] gap-[32px] max-laptop:gap-4 font-bold">
          <li className="flex items-center gap-1 cursor-pointer">
            Find Designers <FaAngleDown />
          </li>
          <li className="cursor-pointer">Inspiration</li>
          <li className="cursor-pointer">Jobs</li>
          <li className="cursor-pointer">Go Pro</li>
        </ul>
      </div>
      <Link to="/" className="block max-laptop:hidden">
        <img src={dribbbleIcon} alt="Logo" className="h-24" />
      </Link>
      <div className="flex flex-row items-center justify-end w-full gap-6 max-laptop:gap-4">
        <div className="relative flex items-center max-laptop:hidden">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="absolute w-4 h-4 left-4 fill-gray-500"
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            className="h-12 pl-10 pr-4 border-2 border-transparent rounded-full outline-none bg-white text-gray-900 transition duration-300 ease-in-out placeholder-gray-400 focus:shadow-[0_0_0_4px_rgba(234,76,137,0.1)]"
            type="text"
            placeholder="Search"
          />
        </div>
        <FiSearch className="hidden max-laptop_sm:block max-laptop:block max-laptop:text-xl" />
        {state.isAuthenticated ? (
          <div className="relative flex items-center justify-center w-12 h-12 text-xl font-medium leading-none text-white bg-gray-900 rounded-full cursor-pointer group">
            {state?.currentUser?.fullname?.[0] || state?.currentUser?.username?.[0]}

            <div className="absolute top-full right-0 w-[320px] pt-7 -translate-y-[10px] hidden group-hover:block cursor-pointer z-10">
              <div className="border border-solid border-[#f3f3f4] rounded-2xl bg-white shadow-sm p-8 w-full flex flex-col items-center justify-center gap-3">
                <div className="relative flex items-center justify-center w-20 h-20 text-4xl font-medium leading-none text-white bg-gray-900 rounded-full cursor-pointer">
                  {state?.currentUser?.fullname?.[0] ||
                    state?.currentUser?.username?.[0]}
                </div>
                <div className="mt-1 text-base font-medium leading-[20px] whitespace-normal text-gray-900">
                  {state?.currentUser?.fullname || state?.currentUser?.username}
                </div>
                <div className="text-[#565564] text-left w-full text-[15px] mt-5 leading-none cursor-pointer">
                  Upload Design Work
                </div>
                <div className="text-[#565564] text-left w-full text-[15px] mt-4 leading-none cursor-pointer">
                  Settings
                </div>
                <button
                  className="w-full h-10 font-bold text-[14px] text-white bg-[#ea4c89] cursor-pointer transition-all ease-in rounded-full shadow hover:shadow-lg mt-6"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-4 max-laptop:gap-2">
            <button className="font-bold text-[14px] text-[#0d0c22] transition-all ease-in-out hover:text-[#ea4c89]">
              Sign In
            </button>
            <button className="w-[88px] h-[40px] max-laptop:w-[56px] max-laptop:h-[32px] font-bold text-[14px] text-white bg-[#ea4c89] transition-all ease-in rounded-full shadow hover:shadow-lg">
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
