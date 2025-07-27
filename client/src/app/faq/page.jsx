"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function page() {
  const [faq, setFaq] = useState(null);

  return (
    <>
      <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center border-b border-[#00000025]">
        <h1 className="text-[40px] font-bold">Frequently Questions</h1>
        <p>
          <Link href="/">Home</Link>
          <span className="text-[#c7a473]"> {">"} Frequently Questions </span>
        </p>
      </div>

      <div className="md:max-w-[1100px] m-auto py-8 px-2  border-b border-[#00000025]">
        <div className="flex flex-col gap-4">
          <div>
            <div
              onClick={() => setFaq(faq == 1 ? null : 1)}
              className={`bg-[#F2F2F2] p-3 font-bold flex items-center justify-between border ${
                faq == 1 ? "border-[#C09578]" : "border-[#00000028]"
              }  rounded-[5px] cursor-pointer`}
            >
              <h2>
                Mauris congue euismod purus at semper. Morbi et vulputate massa?
              </h2>
              <FaPlus />
            </div>

            <div
              className={`bg-[#fff] px-3 overflow-hidden  ${
                faq == 1
                  ? "max-h-[200px] border border-[#C09578] py-3"
                  : "border-0 max-h-0 p-0"
              } border-t-0 rounded-[0_0_5px_5px] transition-all duration-300`}
            >
              <h2>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </h2>
            </div>
          </div>
          <div>
            <div
              onClick={() => setFaq(faq == 2 ? null : 2)}
              className={`bg-[#F2F2F2] p-3 font-bold flex items-center justify-between border ${
                faq == 2 ? "border-[#C09578]" : "border-[#00000028]"
              }  rounded-[5px] cursor-pointer`}
            >
              <h2>Donec mattis finibus elit ut tristique?</h2>
              <FaPlus />
            </div>

            <div
              className={`bg-[#fff] px-3 overflow-hidden  ${
                faq == 2
                  ? "max-h-[200px] border border-[#C09578] py-3"
                  : "border-0 max-h-0 p-0"
              } border-t-0 rounded-[0_0_5px_5px] transition-all duration-300`}
            >
              <h2>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </h2>
            </div>
          </div>
          <div>
            <div
              onClick={() => setFaq(faq == 3 ? null : 3)}
              className={`bg-[#F2F2F2] p-3 font-bold flex items-center justify-between border ${
                faq == 3 ? "border-[#C09578]" : "border-[#00000028]"
              }  rounded-[5px] cursor-pointer`}
            >
              <h2>Aenean elit orci, efficitur quis nisl at, accumsan?</h2>
              <FaPlus />
            </div>

            <div
              className={`bg-[#fff] px-3 overflow-hidden  ${
                faq == 3
                  ? "max-h-[200px] border border-[#C09578] py-3"
                  : "border-0 max-h-0 p-0"
              } border-t-0 rounded-[0_0_5px_5px] transition-all duration-300`}
            >
              <h2>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </h2>
            </div>
          </div>
          <div>
            <div
              onClick={() => setFaq(faq == 4 ? null : 4)}
              className={`bg-[#F2F2F2] p-3 font-bold flex items-center justify-between border ${
                faq == 4 ? "border-[#C09578]" : "border-[#00000028]"
              }  rounded-[5px] cursor-pointer`}
            >
              <h2>Pellentesque habitant morbi tristique senectus et netus?</h2>
              <FaPlus />
            </div>

            <div
              className={`bg-[#fff] px-3 overflow-hidden  ${
                faq == 4
                  ? "max-h-[200px] border border-[#C09578] py-3"
                  : "border-0 max-h-0 p-0"
              } border-t-0 rounded-[0_0_5px_5px] transition-all duration-300`}
            >
              <h2>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </h2>
            </div>
          </div>
          <div>
            <div
              onClick={() => setFaq(faq == 5 ? null : 5)}
              className={`bg-[#F2F2F2] p-3 font-bold flex items-center justify-between border ${
                faq == 5 ? "border-[#C09578]" : "border-[#00000028]"
              }  rounded-[5px] cursor-pointer`}
            >
              <h2>Nam pellentesque aliquam metus?</h2>
              <FaPlus />
            </div>

            <div
              className={`bg-[#fff] px-3 overflow-hidden  ${
                faq == 5
                  ? "max-h-[200px] border border-[#C09578] py-3"
                  : "border-0 max-h-0 p-0"
              } border-t-0 rounded-[0_0_5px_5px] transition-all duration-300`}
            >
              <h2>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </h2>
            </div>
          </div>
          <div>
            <div
              onClick={() => setFaq(faq == 6 ? null : 6)}
              className={`bg-[#F2F2F2] p-3 font-bold flex items-center justify-between border ${
                faq == 6 ? "border-[#C09578]" : "border-[#00000028]"
              }  rounded-[5px] cursor-pointer`}
            >
              <h2>Aenean elit orci, efficitur quis nisl at?</h2>
              <FaPlus />
            </div>

            <div
              className={`bg-[#fff] px-3 overflow-hidden  ${
                faq == 6
                  ? "max-h-[200px] border border-[#C09578] py-3"
                  : "border-0 max-h-0 p-0"
              } border-t-0 rounded-[0_0_5px_5px] transition-all duration-300`}
            >
              <h2>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </h2>
            </div>
          </div>
          <div>
            <div
              onClick={() => setFaq(faq == 7 ? null : 7)}
              className={`bg-[#F2F2F2] p-3 font-bold flex items-center justify-between border ${
                faq == 7 ? "border-[#C09578]" : "border-[#00000028]"
              }  rounded-[5px] cursor-pointer`}
            >
              <h2>Morbi gravida, nisi id tringilla ultricies, elit lorem?</h2>
              <FaPlus />
            </div>

            <div
              className={`bg-[#fff] px-3 overflow-hidden  ${
                faq == 7
                  ? "max-h-[200px] border border-[#C09578] py-3"
                  : "border-0 max-h-0 p-0"
              } border-t-0 rounded-[0_0_5px_5px] transition-all duration-300`}
            >
              <h2>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </h2>
            </div>
          </div>
          <div>
            <div
              onClick={() => setFaq(faq == 8 ? null : 8)}
              className={`bg-[#F2F2F2] p-3 font-bold flex items-center justify-between border ${
                faq == 8 ? "border-[#C09578]" : "border-[#00000028]"
              }  rounded-[5px] cursor-pointer`}
            >
              <h2>Aenean elit orci, efficitur quis nisl at, accumsan? </h2>
              <FaPlus />
            </div>

            <div
              className={`bg-[#fff] px-3 overflow-hidden  ${
                faq == 8
                  ? "max-h-[200px] border border-[#C09578] py-3"
                  : "border-0 max-h-0 p-0"
              } border-t-0 rounded-[0_0_5px_5px] transition-all duration-300`}
            >
              <h2>
                Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
                arcu vulputate, eu porttitor tellus commodo. Aliquam erat
                volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
                gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
