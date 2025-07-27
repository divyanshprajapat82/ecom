import React from "react";
import { IoEarth } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";

export default function Service() {
  return (
    <>
      <div className="bg-[#F8F9F9] mt-4 py-[40px] px-2">
        <div className="md:max-w-[800px] m-auto">
          {/* <div className="flex justify-center gap-8"> */}
          <div className="flex flex-wrap justify-between gap-2">
            <div className="text-center flex flex-col items-center group flex-grow">
              <div className="w-[70px] h-[70px] flex justify-center items-center text-[20px] rounded-[50%] border-2 group-hover:text-[#C09578] group-hover:border-[#C09578] transition-all duration-200 mb-2">
                <IoEarth />
              </div>
              <div className="">
                <h1 className="text-[20px] font-bold">Free Shipping</h1>
                <p>Free shipping on all order</p>
              </div>
            </div>
            <div className="text-center flex flex-col items-center group flex-grow">
              <div className="w-[70px] h-[70px] flex justify-center items-center text-[20px] rounded-[50%] border-2 group-hover:text-[#C09578] group-hover:border-[#C09578] transition-all duration-200 mb-2">
                <FiCheckCircle />
              </div>
              <div className="">
                <h1 className="text-[20px] font-bold">Money Return</h1>
                <p>Back guarantee under 7 days</p>
              </div>
            </div>
            <div className="text-center flex flex-col items-center group flex-grow">
              <div className="w-[70px] h-[70px] flex justify-center items-center text-[20px] rounded-[50%] border-2 group-hover:text-[#C09578] group-hover:border-[#C09578] transition-all duration-200 mb-2">
                <MdAccessTime />
              </div>
              <div className="">
                <h1 className="text-[20px] font-bold">Online Support</h1>
                <p>Support online 24 hours a day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
