"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <div style={{ display: "none" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div style={{ display: "none" }} onClick={onClick} />;
}

export default function CustumersSay() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="md:max-w-[1100px] m-auto p-2 my-4">
        <div className="">
          <h1 className="text-[25px] font-bold text-center">
            What Our Custumers Say ?
          </h1>
          <div className="">
            <Slider {...settings}>
              <div>
                <div className="max-w-[800px] m-auto p-2 mt-4 text-center">
                  <p className="text-center text-[#000000bb]">
                    These guys have been absolutely outstanding. Perfect Themes
                    and the best of all that you have many options to choose!
                    Best Support team ever! Very fast responding! Thank you very
                    much! I highly recommend this theme and these people!
                  </p>
                  <div className="flex justify-center mt-3">
                    <img src="/images/custumer-1.jpg" alt="" />
                  </div>
                  <h4 className="uppercase mt-3">Kathy young</h4>
                  <p className="text-[14px] mt-2">CEO of SunPark</p>
                  <div className="flex justify-center text-[#C09578] mt-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-[800px] m-auto p-2 mt-4 text-center">
                  <p className="text-center text-[#000000bb]">
                    These guys have been absolutely outstanding. Perfect Themes
                    and the best of all that you have many options to choose!
                    Best Support team ever! Very fast responding! Thank you very
                    much! I highly recommend this theme and these people!
                  </p>
                  <div className="flex justify-center mt-3">
                    <img src="/images/custumer-2.jpg" alt="" />
                  </div>
                  <h4 className="uppercase mt-3">Kathy young</h4>
                  <p className="text-[14px] mt-2">CEO of SunPark</p>
                  <div className="flex justify-center text-[#C09578] mt-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-[800px] m-auto p-2 mt-4 text-center">
                  <p className="text-center text-[#000000bb]">
                    These guys have been absolutely outstanding. Perfect Themes
                    and the best of all that you have many options to choose!
                    Best Support team ever! Very fast responding! Thank you very
                    much! I highly recommend this theme and these people!
                  </p>
                  <div className="flex justify-center mt-3">
                    <img src="/images/custumer-3.jpg" alt="" />
                  </div>
                  <h4 className="uppercase mt-3">Kathy young</h4>
                  <p className="text-[14px] mt-2">CEO of SunPark</p>
                  <div className="flex justify-center text-[#C09578] mt-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
