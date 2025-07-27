"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <div style={{ display: "none" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div style={{ display: "none" }} onClick={onClick} />;
}

export default function TopSlider() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          // backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          bottom: "0",
        }}
      >
        <ul style={{ margin: "0px" }} className="">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;
  let [sliderstaticPath, setsliderstaticPath] = useState('')
  let [sliderData, setsliderData] = useState([])

  let sliderdetails = () => {
    // alert("hi")
    console.log(apiBaseUrl)
    axios.get(`http://localhost:8000/web/home/slider`)
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes.data)
        setsliderData(finalRes.data)
        setsliderstaticPath(finalRes.staticPath)
      })

  }


  useEffect(() => {
    sliderdetails()
  }, [])




  return (
    <>
      <div className="relative">
        <Slider {...settings}>
          {sliderData.map((items, index) => (
            <div className="min-w-[700px]">
              <img
                src={sliderstaticPath + items.sliderImage}
                className="w-[100%] bg-center object-center"
                alt=""
              />
            </div>
          ))}
          {/* <div className="min-w-[700px]">
            <img
              src="/images/slide-1.jpg"
              className="w-[100%] bg-center object-center"
              alt=""
            />
          </div> */}
          {/* <div className="min-w-[700px]">
            <img
              src="/images/slide-2.jpg"
              className="w-[100%] bg-center object-center"
              alt=""
            />
          </div>
          <div className="min-w-[700px]">
            <img
              src="/images/slide-3.jpg"
              className="w-[100%] bg-center object-center"
              alt=""
            />
          </div> */}
        </Slider>
      </div>
    </>
  );
}
