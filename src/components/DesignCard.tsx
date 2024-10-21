import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { LuBookmark } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";

interface Designer {
  image: string;
  name: string;
  isCompany: boolean; // Ensure it's always a boolean
}

interface DesignData {
  id: number;
  title: string;
  media: string[];
  designer: Designer;
  description?: string;
  tags?: string[];
}

interface DesignCardProps {
  data: DesignData;
}

const DesignCard: React.FC<DesignCardProps> = ({ data }) => {
  return (
    <div className="relative w-[315px] h-[236px] bg-black rounded-lg group cursor-pointer">
      <img
        src={data?.media[0]}
        className="object-cover w-full h-full rounded-lg"
        alt={data.title}
      />
      <div className="absolute bottom-0 left-0 w-full transition-opacity duration-300 opacity-0 h-1/3 bg-gradient-to-t from-black to-transparent group-hover:opacity-100 group-hover:rounded-lg"></div>
      <div className="absolute bottom-0 left-0 flex items-center justify-between w-full p-4 mb-3 text-white transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100">
        <h3 className="w-1/2 overflow-hidden text-sm font-semibold text-ellipsis whitespace-nowrap">
          {data.title}
        </h3>
        <div className="flex justify-end w-1/2 gap-2">
          <div className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-full">
            <IoHeartOutline className="text-lg text-black hover:text-gray-600" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-full">
            <LuBookmark className="text-base" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 transition-shadow duration-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:shadow-xl"></div>
      <div className="absolute left-0 w-full h-4 -bottom-[28px] z-10 flex gap-2 justify-between">
        <div className="flex items-center gap-2">
          <img
            src={data?.designer?.image}
            className="w-6 h-6 rounded-full"
            alt={data.designer.name}
          />
          <p className="overflow-hidden text-sm font-medium text-ellipsis whitespace-nowrap">
            {data?.designer?.name}
          </p>
          <div className="text-white bg-gray-400 h-[16px] font-bold text-[10px] p-[3px] rounded-[3px] leading-[1] hover:bg-black">
            {data?.designer?.isCompany ? "TEAM" : "PRO"}
          </div>
        </div>
        <div className="flex justify-end text-[#9e9ea7] text-xs font-normal items-center">
          <FaHeart className="mr-1 text-lg transition-all duration-200 hover:text-pink-500" />
          <p className="text-black ">53</p>
          <IoIosEye className="ml-2 text-lg" />
          <p className="ml-1 text-black">6k</p>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
