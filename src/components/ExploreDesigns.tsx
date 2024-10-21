import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
import DesignCard from "./DesignCard";
import DesignDetails from "./DesignDetails";

// Define types for Designer and Media
interface Designer {
  image: string;
  name: string;
  isCompany: boolean; // Ensure it's always a boolean
}

interface DesignData {
  id: number;
  title: string; // Required property
  media: string[]; // Array of media URLs
  designer: Designer; // Designer object
  description?: string; // Optional description
  tags?: string[]; // Optional tags
}

// Define the Category interface
interface Category {
  name: string;
  designs: DesignData[]; // Use DesignData instead of Design
}

// Define the context state type
interface GlobalState {
  categories: Category[];
}

const ExploreDesigns: React.FC = () => {
  const { state } = useContext(GlobalStateContext) as { state: GlobalState }; // Specify context type
  const { categories } = state;
  const [selectedDesign, setSelectedDesign] = useState<DesignData | null>(null); // Use DesignData type

  useEffect(() => {
    document.body.style.overflow = selectedDesign ? "hidden" : "auto";
  }, [selectedDesign]);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[43px] mb-[150px]">
      <p
        className="text-[48px] leading-[56px] mb-12"
        style={{ fontFamily: "Mona-Sans" }}
      >
        Explore inspiring designs
      </p>
      <div className="flex flex-wrap w-full px-[72px] justify-center">
        {categories.length > 0 &&
          categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-wrap justify-center mb-10"
            >
              {category?.designs?.slice(0, 1).map((design) => (
                <div
                  key={design.id}
                  className="m-2"
                  onClick={() => setSelectedDesign(design)}
                >
                  <DesignCard data={design} />
                </div>
              ))}
            </div>
          ))}
      </div>
      <button className="px-6 mt-12 text-sm font-medium border-[1.5px] border-black rounded-full h-14 cursor-pointer hover:border-gray-600 hover:text-gray-600">
        Browse more inspiration
      </button>
      {selectedDesign !== null && (
        <DesignDetails
          data={selectedDesign}
          setSelectedDesign={setSelectedDesign}
        />
      )}
    </div>
  );
};

export default ExploreDesigns;
