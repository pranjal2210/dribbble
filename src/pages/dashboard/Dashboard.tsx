import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DesignCard from "../../components/DesignCard";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { IoChevronDown } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import DesignDetails from "../../components/DesignDetails";
import withAuth from "../../components/HOC/authHOC";

// Ensure this matches the DesignData structure
interface Designer {
  image: string;
  name: string;
  isCompany: boolean;
}

interface DesignData {
  id: number; // Changed from string to number
  title: string;
  media: string[];
  designer: Designer;
  description?: string;
  tags?: string[];
}

interface Category {
  name: string;
  designs: DesignData[];
}

interface GlobalState {
  categories: Category[];
  isAuthenticated: boolean;
}

const Dashboard: React.FC = () => {
  const { state } = useContext(GlobalStateContext) as { state: GlobalState };
  const [selectedDesign, setSelectedDesign] = useState<DesignData | null>(null); // Use DesignData type
  const [selectedCategory, setSelectedCategory] = useState<string>("Discover");

  useEffect(() => {
    document.body.style.overflow = selectedDesign ? "hidden" : "auto";
  }, [selectedDesign]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "Discover" : category);
  };

  const filteredDesigns =
    selectedCategory === "Discover"
      ? state?.categories?.flatMap((category) => category.designs) || []
      : state?.categories?.find((cat) => cat.name === selectedCategory)
          ?.designs || [];

  return (
    <div className="bg-[#f8f7f4] flex flex-col items-center w-full">
      <Header />
      <div className="h-[72px] w-full pt-8 px-8 flex justify-between items-center">
        <div className="relative mr-8 h-10 py-[18px] pr-[35px] pl-[18px] min-w-[115px] whitespace-nowrap flex items-center border-[1.5px] border-gray-300 rounded-lg shadow-sm text-[14px] font-medium leading-[19px] hover:shadow cursor-pointer">
          Popular <IoChevronDown className="absolute right-3" />
        </div>
        <div className="flex gap-2 overflow-x-scroll h-9 whitespace-nowrap no-scrollbar">
          <div
            className={`${
              selectedCategory === "Discover"
                ? "bg-[#ecebe9] cursor-default"
                : "bg-transparent cursor-pointer"
            } h-full inline-flex items-center px-4 rounded-full text-sm font-semibold leading-none`}
            onClick={() => handleCategoryClick("Discover")}
          >
            Discover
          </div>
          {state?.categories?.length > 0 &&
            state?.categories.map((category) => (
              <div
                key={category.name}
                className={`${
                  category.name === selectedCategory
                    ? "bg-[#ecebe9] cursor-default"
                    : "bg-transparent cursor-pointer"
                } h-full inline-flex items-center px-4 rounded-full text-sm font-semibold leading-none`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </div>
            ))}
        </div>
        <div className="h-10 w-[100px] flex items-center justify-center border-[1.5px] border-gray-300 rounded-full py-[10px] px-5 text-[13px] cursor-pointer ml-8">
          <IoFilter className="mr-2 text-base" /> Filters
        </div>
      </div>
      <div className="grid grid-cols-1 tablet_sm:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-x-4 gap-y-16 w-full px-[72px] py-8">
        {filteredDesigns.length > 0 ? (
          filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="flex items-center justify-center"
              onClick={() => setSelectedDesign(design)}
            >
              <DesignCard data={design} />
            </div>
          ))
        ) : (
          <div>No designs found.</div>
        )}
      </div>
      <Footer />
      {selectedDesign && (
        <DesignDetails
          data={selectedDesign}
          setSelectedDesign={setSelectedDesign}
        />
      )}
    </div>
  );
};

export default withAuth(Dashboard);
