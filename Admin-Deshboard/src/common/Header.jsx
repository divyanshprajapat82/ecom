import React, { useContext, useEffect } from "react";
import { FaBars, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { FaCircleUser } from "react-icons/fa6";
import { RiProfileFill } from "react-icons/ri";
import { loginContext } from "../context/MainContext";

export default function Header({
  setSideBar,
  sideBar,
  setNavSideBar,
  navsideBar,
}) {

  let { adminID, setAdminID } = useContext(loginContext)

  let navigate = useNavigate()

  useEffect(()=>{
    if(adminID==""){
      navigate("/")
    }
  },[adminID])

  return (
    <>
      <div className="w-[100%] sticky top-0 bg-[#fff] z-9">
        <div className="flex justify-between mb-1 p-4 md:px-[40px] px-4">
          <h1 className="flex items-center gap-3 text-[20px]">
            <FaBars
              className="cursor-pointer opacity-60 hidden md:block"
              onClick={() => setSideBar(!sideBar)}
            />
            <FaBars
              className="cursor-pointer opacity-60 md:hidden block"
              onClick={() => setNavSideBar(true)}
            />
            <span>Dashboard</span>
          </h1>
          <div className="group relative  z-50">
            <img
              src="/images/User_Profile.jpeg"
              className="rounded-full w-11 h-11 object-cover"
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[45px] left-[-150px] bg-[#fff] shadow-md border rounded-[10px] z-50">
              <ul>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 font-[500] py-1 pl-3 hover:bg-[#F1F4F5] hover:text-[blue] rounded-[10px_10px_0_0]"
                >
                  <FaCircleUser /> Profile
                </Link>
                <hr className="border-[#00000076]" />
                <Link
                  to="/company_profile"
                  className="flex items-center gap-2 font-[500] py-1 pl-3 pr-5 hover:bg-[#F1F4F5] hover:text-[blue]"
                >
                  <RiProfileFill />
                  Company Profile
                </Link>
                <hr />
                <div onClick={()=>setAdminID("")} className="flex items-center gap-2 font-[500] py-1 pl-3 pr-5 hover:bg-[#F1F4F5] hover:text-[blue] cursor-pointer rounded-[0px_0px_10px_10px]">
                  <FaLock />
                  LogOut
                </div>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-[#00000029]" />
      </div>
    </>
  );
}
