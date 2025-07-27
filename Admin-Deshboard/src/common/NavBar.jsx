import React from "react";
import { Link } from "react-router";

export default function NavBar({ center, last }) {
  return (
    <>
      {/* <div>
        <div className="py-1 px-5">
          <h1 className="text-[18px] font-[500] text-[#00000095]">
            <a href=""> {} </a> / <a href=""> {} </a>
          </h1>
        </div>
        <hr className="border-[#00000029] mt-1" />
      </div> */}
      <div className="sticky top-[81px] bg-[#fff] shadow-md z-2">
        <div className="py-1 px-5">
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
              {center}
            </span>{" "}
            {last == "" ? (
              ""
            ) : (
              <span className="cursor-default"> / {last}</span>
            )}
          </h1>
        </div>
        <hr className="border-[#00000029] mt-1" />
      </div>
    </>
  );
}
