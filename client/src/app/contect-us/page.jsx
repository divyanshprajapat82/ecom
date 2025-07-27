import Link from "next/link";
import React from "react";
import { FaFax, FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function page() {
  return (
    <>
      <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center border-b border-[#00000025]">
        <h1 className="text-[40px] font-bold">Contact Us</h1>
        <p>
          <Link href="/">Home</Link>
          <span className="text-[#c7a473]"> {">"} Contact Us </span>
        </p>
      </div>
      <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7155.210697334615!2d73.031314!3d26.274469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1747635236711!5m2!1sen!2sin"
          className="w-full h-[500px]"
          loading="lazy"
        ></iframe>
      </div>

      <div className="md:max-w-[1100px] m-auto py-8 px-2">
        <div className="flex justify-between gap-4 flex-wrap w-full">
          <div className="md:w-[48%] w-[100%]">
            <ul className="w-full">
              <li>
                <h1 className="text-[22px] font-bold mb-2">Contact Us</h1>
              </li>
              <li className="flex items-center text-[#777] gap-3 border-t py-2 border-[#00000025]">
                <FaFax />
                <span className="">
                  {" "}
                  Address : Claritas est etiam processus dynamicus
                </span>
              </li>
              <li className="flex items-center text-[#477744] gap-3 border-t py-2 border-[#00000025]">
                <FaPhoneAlt />
                <span className=""> 9781234560</span>
              </li>
              <li className="flex items-center text-[#777] gap-3 border-t py-2 border-[#00000025]">
                <IoMailOutline />
                <span className=""> furniture@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="md:w-[48%] w-[100%]">
            <div className="w-full">
              <h1 className="text-[22px] font-bold mb-2">
                Tell us your question
              </h1>
              <form className="w-full">
                <div className="flex flex-col gap-2 w-full mb-3">
                  <label className="text-[14px] font-bold">
                    Your Name (required)
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2  w-full border border-[#00000025]"
                    placeholder="Name *"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full mb-3">
                  <label className="text-[14px] font-bold">
                    Your Email (required)
                  </label>
                  <input
                    type="email"
                    className="px-3 py-2  w-full border border-[#00000025]"
                    placeholder="Email *"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full mb-3">
                  <label className="text-[14px] font-bold">
                    Your Mobile Number (required)
                  </label>
                  <input
                    type="tel"
                    className="px-3 py-2  w-full border border-[#00000025]"
                    placeholder="Mobile Number *"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full mb-3">
                  <label className="text-[14px] font-bold">Subject</label>
                  <input
                    type="text"
                    className="px-3 py-2  w-full border border-[#00000025]"
                    placeholder="Subject *"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full mb-3">
                  <label className="text-[14px] font-bold">Your Message</label>
                  {/* <input
                    type="text"
                    className="px-3 py-2  w-full border border-[#00000025]"
                    placeholder="Name *"
                  /> */}
                  <textarea
                    name=""
                    id=""
                    className="px-3 py-2 h-[180px] w-full border border-[#00000025]"
                    placeholder="Message *"
                  ></textarea>
                </div>
                <button className="bg-[#242424] text-[#fff] px-7 py-2 rounded-[4px] mb-3 cursor-pointer hover:bg-[#987862] transition-all duration-200">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
