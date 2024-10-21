import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { LuBookmark } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";

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

interface DesignDetailsProps {
  data: DesignData;
  setSelectedDesign: (design: DesignData | null) => void;
}

const DesignDetails: React.FC<DesignDetailsProps> = ({
  data,
  setSelectedDesign,
}) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedDesign(null);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer bg-black/50"
      onClick={handleClose}
    >
      <IoCloseOutline
        className="absolute h-6 text-lg text-white cursor-pointer right-3 top-2"
        onClick={() => setSelectedDesign(null)}
      />
      <div className="w-full h-auto max-h-[100vh] overflow-y-auto mt-10 bg-white rounded-t-lg py-16 px-[220px] flex flex-col cursor-default">
        <div className="text-xl font-bold mb-[22px]">{data?.title}</div>
        <div className="sticky z-10 flex items-center justify-between py-3 mb-3 bg-white -top-16">
          <div className="flex items-center gap-3">
            <img
              src={data?.designer?.image}
              className="w-12 h-12 rounded-full"
              alt={data?.designer?.name}
            />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold">{data?.designer?.name}</p>
              <div className="flex items-center gap-3">
                <p className="text-xs font-medium text-green-600">
                  Available for work
                </p>
                <button className="text-xs font-medium text-gray-500 transition-all duration-200 hover:text-black">
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full cursor-pointer">
              <IoHeartOutline className="text-lg text-black" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full cursor-pointer">
              <LuBookmark className="text-base text-black" />
            </div>
            <button className="flex items-center justify-center h-10 text-white bg-black rounded-full text-[13px] font-medium w-[118px] hover:bg-gray-700 transition-all duration-300 ease-in-out">
              Get in touch
            </button>
          </div>
        </div>
        {data?.media.map((item, index) => {
          const isVideo =
            item.endsWith(".mp4") ||
            item.endsWith(".webm") ||
            item.endsWith(".ogg");
          return (
            <div key={index} className="mb-4">
              {isVideo ? (
                <video
                  src={item}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full rounded-md"
                ></video>
              ) : (
                <img
                  src={item}
                  alt={`media-${index}`}
                  className="w-full h-full rounded-md"
                />
              )}
            </div>
          );
        })}
        <div className="text-[20px] text-center my-10 font-normal">
          {data?.description}
        </div>
        <div className="relative flex items-center justify-center my-[30px] w-full">
          <hr className="w-full h-[2px] bg-gray-200 border-0" />
          <img
            src={data?.designer?.image}
            className="absolute w-12 h-12 rounded-full outline outline-[20px] outline-white"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[20px] font-medium text-center mt-4">
            {data?.designer?.name}
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            {data?.tags?.map((item, index) => (
              <div key={index} className="text-sm text-center">
                {item}
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center h-10 p-5 mt-4 text-white bg-black rounded-full text-[13px] font-medium w-[150px] hover:bg-gray-700 transition-all duration-300 ease-in-out">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignDetails;
