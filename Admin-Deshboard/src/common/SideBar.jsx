import React, { useState } from "react";
import { TbDashboardFilled } from "react-icons/tb";
import { sideBarFaq } from "../assets/apis/ApiAssets.jsx";
import { FaAngleDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrTarget } from "react-icons/gr";
import { Link, NavLink } from "react-router";

export default function SideBar({ sideBar, navsideBar, setNavSideBar }) {
  const [sideFaq, setSideFaq] = useState(0);

  return (
    <>
      <div
        className={`fixed ${
          navsideBar ? "" : "hidden"
        } bg-[#00000075] h-[100vh] w-full z-10`}
        onClick={() => setNavSideBar()}
      ></div>
      <div
        className={` fixed md:relative z-20 md:left-0 ${
          sideBar ? "" : "hidden"
        } ${navsideBar ? "left-0" : "right-[1000px]"}`}
      >
        <div className="p-4 h-[100vh] bg-[#F9FAFB] min-w-[300px] flex justify-center overflow-y-scroll ">
          <div className="w-full">
            <Link to="/dashboard">
              <div className="flex justify-center">
                <img src="/images/wscube-tech-logo-2.svg" alt="" />
              </div>
            </Link>

            <hr className="border-[#000000c2] mt-4 w-[100%]" />

            <div className="p-1 hover:bg-[#F3F4F6] group my-3 rounded-[5px]">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-[18px] "
              >
                <TbDashboardFilled className="opacity-50 group-hover:opacity-100" />
                <span className="font-[500]">Dashboard</span>
              </Link>
            </div>

            <div className="my-3 flex flex-col gap-2">
              {sideBarFaq.map((item, index) => (
                // <>
                <div key={index}>
                  <div
                    className="p-1 hover:bg-[#F3F4F6] group rounded-[5px]"
                    onClick={() => setSideFaq(item.id)}
                  >
                    <div className="flex justify-between items-center text-[17px] cursor-pointer">
                      <span className="flex items-center gap-2">
                        {item.icon}
                        <span className="font-[500]">{item.heading}</span>
                      </span>
                      <MdKeyboardArrowDown className="text-2xl" />
                    </div>
                  </div>
                  <div className={`${sideFaq == item.id ? "" : "hidden"}`}>
                    {item.ans.map((items, indexs) => (
                      <Link to={`/${items.link}`} key={indexs}>
                        <div
                          className={`p-2 hover:bg-[#F3F4F6] group rounded-[5px] `}
                          onClick={() => setNavSideBar()}
                        >
                          <div className="flex justify-between items-center text-[14px] cursor-pointer">
                            <span className="flex items-center  gap-2">
                              <GrTarget />
                              <span className="font-[500]">{items.answ}</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                // </>
              ))}

              {/* {sideBarFaq.ans.map((answ, index) => (
              <div className={`p-1 hover:bg-[#F3F4F6] group rounded-[5px] `}>
                <div className="flex justify-between items-center text-[16px] cursor-pointer">
                  <span className="flex items-center  gap-2">
                    <GrTarget />
                    <span className="font-[400]">{answ}</span>
                  </span>
                </div>
              </div>
            ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
