"use client";

import { featured, newArrivals, onSale } from "@/assets/assets";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`absolute right-[20px] top-[-37px] text-[#000] text-[20px] cursor-pointer  `}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`absolute right-[50px] top-[-37px] text-[#000] text-[20px] cursor-pointer `}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

export default function Bestsell_Slider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
      <div className="md:max-w-[1100px] m-auto p-2 mt-4">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-[25px] font-bold">Bestselling Products</h1>
          <hr className="lg:w-[68%] md:w-[50%] w-[40%] sm:block hidden border-[#00000053]" />
        </div>
        <Slider {...settings}>
          {featured.map((item, index) => (
            <div
              key={index}
              className="shadow-md sm:max-w-[250px] max-w-[100%]"
            >
              <div className="cursor-pointer">
                <img src={item.img} alt="" />
              </div>
              <div className="bg-[#fff] p-4 text-center">
                <p className="text-[15px] text-[#00000098]">{item.cat}</p>
                <h2 className="font-bold mt-3 text-[15px] sm:text-[16px] hover:text-[#C09578] cursor-pointer transition-all duration-200 line-clamp-1">
                  {item.title}
                </h2>
                <hr className="mx-8 border-[#0000002e] mt-3" />
                <div className="flex justify-center gap-2 mt-3">
                  <h2 className="line-through text-[#000000a5]">
                    {item.cutPrice}
                  </h2>
                  <h2 className="font-bold text-[#C09578]">{item.price}</h2>
                </div>
                <div className="flex justify-center gap-1 mt-3">
                  <button className="p-2 text-[20px] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                    <FaRegHeart />
                  </button>
                  <button className="p-2 text-[#000000a5] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          {newArrivals.map((item, index) => (
            <div
              key={index}
              className="shadow-md sm:max-w-[250px] max-w-[350px]"
            >
              <div className="cursor-pointer">
                <img src={item.img} alt="" />
              </div>
              <div className="bg-[#fff] p-4 text-center">
                <p className="text-[15px] text-[#00000098]">{item.cat}</p>
                <h2 className="font-bold mt-3 text-[15px] sm:text-[16px] hover:text-[#C09578] cursor-pointer transition-all duration-200 line-clamp-1">
                  {item.title}
                </h2>
                <hr className="mx-8 border-[#0000002e] mt-3" />
                <div className="flex justify-center gap-2 mt-3">
                  <h2 className="line-through text-[#000000a5]">
                    {item.cutPrice}
                  </h2>
                  <h2 className="font-bold text-[#C09578]">{item.price}</h2>
                </div>
                <div className="flex justify-center gap-1 mt-3">
                  <button className="p-2 text-[20px] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                    <FaRegHeart />
                  </button>
                  <button className="p-2 text-[#000000a5] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          {onSale.map((item, index) => (
            <div
              key={index}
              className="shadow-md sm:max-w-[250px] max-w-[350px]"
            >
              <div className="cursor-pointer">
                <img src={item.img} alt="" />
              </div>
              <div className="bg-[#fff] p-4 text-center">
                <p className="text-[15px] text-[#00000098]">{item.cat}</p>
                <h2 className="font-bold mt-3 text-[15px] sm:text-[16px] hover:text-[#C09578] cursor-pointer transition-all duration-200 line-clamp-1">
                  {item.title}
                </h2>
                <hr className="mx-8 border-[#0000002e] mt-3" />
                <div className="flex justify-center gap-2 mt-3">
                  <h2 className="line-through text-[#000000a5]">
                    {item.cutPrice}
                  </h2>
                  <h2 className="font-bold text-[#C09578]">{item.price}</h2>
                </div>
                <div className="flex justify-center gap-1 mt-3">
                  <button className="p-2 text-[20px] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                    <FaRegHeart />
                  </button>
                  <button className="p-2 text-[#000000a5] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
