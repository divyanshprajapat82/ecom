import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="border-t  border-[#00000034] z-90">
        <div className="md:max-w-[1100px] m-auto py-4 px-2 mt-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <ul>
              <h1 className="text-[20px] mb-4">Contact Us</h1>
              <li className="text-[#000000ad] text-[15px]">
                Address: Claritas est etiam processus dynamicus
              </li>
              <li className="text-[#000000ad] text-[15px]">
                Phone: 9781234560
              </li>
              <li className="text-[#000000ad] text-[15px]">
                Email: furniture@gmail.com
              </li>
              <div className="flex gap-2 mt-2">
                <div className="p-2 text-[#00000064] border border-[#00000064] rounded-[50%] hover:text-[#C09578] hover:border-[#C09578] transition-all duration-200 cursor-pointer">
                  <FaFacebookF />
                </div>
                <div className="p-2 text-[#00000064] border border-[#00000064] rounded-[50%] hover:text-[#C09578] hover:border-[#C09578] transition-all duration-200 cursor-pointer">
                  <FaInstagram />
                </div>
                <div className="p-2 text-[#00000064] border border-[#00000064] rounded-[50%] hover:text-[#C09578] hover:border-[#C09578] transition-all duration-200 cursor-pointer">
                  <FaTwitter />
                </div>
                <div className="p-2 text-[#00000064] border border-[#00000064] rounded-[50%] hover:text-[#C09578] hover:border-[#C09578] transition-all duration-200 cursor-pointer">
                  <FaLinkedinIn />
                </div>
                <div className="p-2 text-[#00000064] border border-[#00000064] rounded-[50%] hover:text-[#C09578] hover:border-[#C09578] transition-all duration-200 cursor-pointer">
                  <FaYoutube />
                </div>
                <div className="p-2 text-[#00000064] border border-[#00000064] rounded-[50%] hover:text-[#C09578] hover:border-[#C09578] transition-all duration-200 cursor-pointer">
                  <FaTelegram />
                </div>
              </div>
            </ul>
            <ul>
              <h1 className="text-[20px] mb-4">Information</h1>
              <a href="/about-us">
                <li className="text-[#000000ad] text-[15px] hover:text-[#C09578] transition-all duration-200">
                  About Us
                </li>
              </a>
              <a href="/contect-us">
                <li className="text-[#000000ad] text-[15px] hover:text-[#C09578] transition-all duration-200">
                  Contact Us
                </li>
              </a>
              <a href="/faq">
                <li className="text-[#000000ad] text-[15px] hover:text-[#C09578] transition-all duration-200">
                  Frequently Questions
                </li>
              </a>
            </ul>
            <ul>
              <h1 className="text-[20px] mb-4">My Account</h1>
              <a href="/deshboard">
                <li className="text-[#000000ad] text-[15px] hover:text-[#C09578] transition-all duration-200">
                  My Dashboard
                </li>
              </a>
              <a href="">
                <li className="text-[#000000ad] text-[15px] hover:text-[#C09578] transition-all duration-200">
                  Wishlist
                </li>
              </a>
              <a href="/cart">
                <li className="text-[#000000ad] text-[15px] hover:text-[#C09578] transition-all duration-200">
                  Cart
                </li>
              </a>
              <a href="/checkout">
                <li className="text-[#000000ad] text-[15px] hover:text-[#C09578] transition-all duration-200">
                  Checkout
                </li>
              </a>
            </ul>
            <ul>
              <h1 className="text-[20px] mb-4">Top Rated Products</h1>
              <li className="">
                <div className="flex gap-2">
                  <div className="">
                    <img src="/images/Cabinet.jpg" width={90} alt="" />
                  </div>
                  <div className="">
                    <p className="text-[#000000ad] text-[14px] cursor-pointer">
                      Cabinets and Sideboard
                    </p>
                    <h4 className="text-[#4165B3] text-[16px] hover:text-[#C09578] transition-all duration-200 cursor-pointer mt-1">
                      Louise Cabinet
                    </h4>
                    <div className="flex gap-2 mt-2">
                      <p className="line-through text-[15px] text-[#000000ad]">
                        Rs. 28,000
                      </p>
                      <p className="font-bold text-[15px] text-[#C09578]">
                        Rs. 23,000
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mt-2">
                <div className="flex gap-2">
                  <div className="">
                    <img src="/images/Stool.jpg" width={90} alt="" />
                  </div>
                  <div className="">
                    <p className="text-[#000000ad] text-[14px] cursor-pointer">
                      Side and End Tables
                    </p>
                    <h4 className="text-[#4165B3] text-[16px] hover:text-[#C09578] transition-all duration-200 cursor-pointer mt-1">
                      Hrithvik Stool
                    </h4>
                    <div className="flex gap-2 mt-2">
                      <p className="line-through text-[15px] text-[#000000ad]">
                        Rs. 7,000
                      </p>
                      <p className="font-bold text-[15px] text-[#C09578]">
                        Rs. 6,000
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <hr className="mt-8 border-[#00000018]" />
          <div className="p-2">
            <ul className="flex justify-center gap-6">
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>Online Store</li>
              </a>
              <a href="">
                <li>Privacy Policy</li>
              </a>
              <a href="">
                <li>Terms Of Use</li>
              </a>
            </ul>
          </div>
          <hr className="mb-8 border-[#00000018]" />
          <div className="text-[#000000ad] text-[15px] text-center mb-8">
            <p>All Rights Reserved By Furniture | © 2025</p>
            <div className="flex justify-center mt-4">
              <img src="/images/papyel2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
