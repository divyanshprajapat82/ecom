import React from "react";
import { CardData } from "../assets/apis/ApiAssets";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { Link } from "react-router";

// const colors = ["#5956D3,#2998FE,#FCB01E,#E95353"];

export default function Home() {
  return (
    <>
      <div>
        <div className=" py-1 px-5">
          <h1 className="text-[17px] font-[500] text-[#00000095] ">
            <Link
              to="/dashboard"
              className="hover:text-[#0000ff88] cursor-pointer"
            >
              {" "}
              Home{" "}
            </Link>{" "}
            /{" "}
            <span className="hover:text-[#0000ff88] cursor-pointer">
              {" "}
              Dashboard
            </span>
          </h1>
        </div>
        <hr className="border-[#00000029] mt-1" />
        <div className=" lg:px-10 px-2 mt-4 flex flex-wrap gap-5 w-full m-auto">
          {CardData.map((item, index) => (
            <div
              className={`p-4 ${item.color} rounded-[8px] xl:w-[31%] w-[250px] h-[150px] grow xl:grow-0`}
              key={index}
            >
              <div className="flex items-center justify-between">
                <h1 className=" text-[25px] text-[#fff] font-[700]">
                  {item.money}{" "}
                  <span className="text-[18px] text-[#fff] font-[600]">
                    {" "}
                    ({item.grow})
                  </span>
                </h1>
                <PiDotsThreeOutlineVerticalFill className="text-[#fff] cursor-pointer" />
              </div>

              <h1 className=" text-[20px] text-[#fff] font-[500]">
                {item.head}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
