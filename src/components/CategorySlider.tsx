import React, { useContext } from "react";
import Slider from "react-slick";
import { GlobalStateContext } from "../context/GlobalStateContext";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define types for Design and Category to use with TypeScript
interface Design {
  media: string[];
}

interface Category {
  name: string;
  designs: Design[];
}

interface GlobalState {
  categories: Category[];
}

const CategorySlider: React.FC = () => {
  const { state } = useContext(GlobalStateContext); // Get the state from context
  const { categories } = state as GlobalState; // Type assertion for state

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="py-[72px] overflow-hidden w-full"
      style={{ fontFamily: "Mona-Sans" }}
    >
      <Slider {...settings} className="w-auto">
        {categories.map(
          (
            item: Category,
            index: number // Explicitly define item type
          ) => (
            <div
              key={index}
              className="relative max-w-[200px] h-[150px] bg-slate-500 rounded-lg group"
            >
              <div className="absolute bottom-2 left-2 h-[150px] w-full bg-[#e3ebfd] rounded-lg z-[1] group-hover:bottom-[12px] group-hover:left-[12px] transition-all duration-300 ease-in-out"></div>
              <div className="absolute bottom-1 left-1 h-[150px] w-full bg-[#f6d9fb] border border-solid border-white rounded-lg z-[2] group-hover:bottom-[6px] group-hover:left-[6px] transition-all duration-300 ease-in-out delay-100"></div>
              <img
                src={item?.designs[0]?.media[0]}
                alt={item?.name}
                className="absolute inset-0 z-10 object-cover w-full h-full border border-white border-solid rounded-lg cursor-pointer"
              />
              <div className="absolute left-0 z-20 mt-2 text-sm font-medium text-center -bottom-9">
                {item?.name}
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default CategorySlider;
