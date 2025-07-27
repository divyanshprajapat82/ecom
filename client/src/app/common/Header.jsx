"use client";

import React, { useEffect, useState } from "react";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import { FaBars, FaHeart } from "react-icons/fa";
import { IoIosArrowDown, IoIosCart } from "react-icons/io";
import NavBar from "./NavBar";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../slice/userSlice";
import { redirect } from "next/navigation";
import { fetchCart } from "../slice/cartSlice";
import axios from "axios";

export default function Header() {

  let user = useSelector((store) => store.login.user)
  let cart = useSelector((store) => store.cart.cart)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCart())
  }, [])

  let totle = 0
  cart.forEach((price) => totle += price.qty * price.price)


  const [sideCart, setSideCart] = useState(false);
  const [navAction, setNavAction] = useState(false);
 


  return (
    <>
      <div className="z-50">
        <div className="sm:block hidden">
          <div className="md:max-w-[1100px] m-auto p-2">
            <div className="flex justify-between text-[14px]">
              <div className="">
                Contact us 24/7 : +91-9781234560 / furniture@gmail.com
              </div>
              {user ?
                <div onClick={() => {
                  dispatch(logOut())
                  redirect("/login-register")
                }} className="hover:text-[#C09578] cursor-pointer">
                  LogOut
                </div>
                :
                <Link href="/login-register">
                  <div className="hover:text-[#C09578] cursor-pointer">
                    Login / Register
                  </div>
                </Link>
              }
            </div>
          </div>
          <hr className="border-[#00000024]" />
        </div>
        <div className="md:max-w-[1100px] m-auto p-2 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img src="/images/logo.png" width={120} alt="" />
            </Link>
            <div className="flex items-center gap-4 h-[45px]">
              <div className="sm:flex hidden items-center h-full px-3 border border-[#0000003f]">
                <input
                  type="text"
                  className="w-full h-full outline-none"
                  placeholder="Search product..."
                />
                <div className="cursor-pointer px-1 h-full flex items-center hover:text-[#C09578]">
                  <IoSearchSharp />
                </div>
              </div>
              <div className="flex items-center h-full px-3 text-[20px] border border-[#0000003f] cursor-pointer hover:text-[#C09578]">
                <FaHeart />
              </div>
              <div
                onClick={() => setSideCart(true)}
                className="relative flex items-center h-full px-2 border border-[#0000003f] cursor-pointer hover:text-[#C09578]"
              >
                <div className="cursor-pointer px-2 text-[20px] h-full flex items-center hover:text-[#C09578] ">
                  <div className="absolute flex justify-center left-[-10px] w-[20px] h-[20px] text-center text-white bg-[#C09578] rounded-[50%]">
                    <span className="h-full flex items-center text-[15px] pt-[1px]">
                      {cart.length}
                    </span>
                  </div>
                  <IoIosCart />
                </div>
                <hr className="border-r h-[30px] border-[#0000003f]" />
                <h2 className="px-2 text-[15px] font-bold">Rs. {totle}</h2>
                <div className="">
                  <IoIosArrowDown />
                </div>
              </div>
              <div className="sm:hidden block h-full">
                <div
                  onClick={() => setNavAction(true)}
                  className="flex items-center h-full px-3 text-[20px] border border-[#0000003f] cursor-pointer hover:text-[#C09578]"
                >
                  <FaBars />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-[#00000024]" />
      </div>
      <NavBar navAction={navAction} setNavAction={setNavAction} />
      <div
        className={`fixed top-0 
          ${sideCart
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          } 
          transition-all duration-300
          w-full h-[100vh]  z-50`}
      >
        <div
          onClick={() => setSideCart(false)}
          className="absolute w-full h-full bg-[#00000034]"
        ></div>
        <div
          className={`absolute ${sideCart ? "right-0" : "right-[-1000px]"} 
          w-full max-w-[350px] h-full bg-[#fff] p-4 transition-all duration-300`}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-[25px]">Cart</h1>
            <IoClose
              onClick={() => setSideCart(false)}
              className="text-[25px] cursor-pointer"
            />
          </div>
          <hr className="border-[#00000024] mt-2" />
          <div className="mt-5">
            <img src="/images/my-Order.jpg" alt="" />
          </div>
          <hr className="border-[#00000024] mt-2" />
          <h2 className="text-center text-[#555] my-4">
            Your shopping cart is empty!
          </h2>
          <hr className="border-[#00000024]" />
        </div>
      </div>
    </>
  );
}
