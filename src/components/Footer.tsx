import React from "react";
import dribbleIcon from "../assets/dribbble.svg";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div
      className="max-w-[1200px] overflow-hidden flex flex-col items-center justify-center pb-7"
      style={{ fontFamily: "Mona-Sans" }}
    >
      <div className="flex max-laptop:flex-col max-laptop:gap-5 justify-between pt-[72px] pb-[44px] items-center gap-20 ">
        <img src={dribbleIcon} alt="dribble" className="h-12" />
        <ul className="flex items-center justify-center gap-10 text-sm font-semibold max-laptop:gap-4 max-tablet_sm:flex-wrap">
          <li>
            <a href="#designers">For designers</a>
          </li>
          <li>
            <a href="#hiretalent">Hire talent</a>
          </li>
          <li>
            <a href="#inspiration">Inspiration</a>
          </li>
          <li>
            <a href="#advertising">Advertising</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
        </ul>
        <div className="flex gap-3 text-2xl">
          <FaTwitter />
          <IoLogoFacebook />
          <FaInstagram />
          <FaPinterest />
        </div>
      </div>
      <div className="flex items-center justify-between py-[44px] w-full max-laptop:py-[12px] max-tablet:flex-col max-laptop:gap-3">
        <ul className="flex gap-3 text-sm text-gray-500">
          <li>© 2024 Dribbble</li>
          <li>
            <a href="#terms">Terms</a>
          </li>
          <li>
            <a href="#privacy">Privacy</a>
          </li>
          <li>
            <a href="#cookies">Cookies</a>
          </li>
        </ul>
        <ul className="flex gap-3 text-sm text-gray-500">
          <li>
            <a href="#jobs">Jobs</a>
          </li>
          <li>
            <a href="#designers">Designers</a>
          </li>
          <li>
            <a href="#freelancers">Freelancers</a>
          </li>{" "}
          {/* Fixed typo from "Freelencers" to "Freelancers" */}
          <li>
            <a href="#tags">Tags</a>
          </li>
          <li>
            <a href="#places">Places</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>{" "}
          {/* Fixed typo from "resouces" to "resources" */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
