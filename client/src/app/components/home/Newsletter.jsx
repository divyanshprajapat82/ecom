import React from "react";

export default function Newsletter() {
  return (
    <>
      <div className="bg-[#F8F9F9] mt-12 py-12 px-2">
        <div className="max-w-[800px] m-auto text-center">
          <h1 className="text-[25px] font-bold">Our Newsletter</h1>
          <p className="text-[#0000009f]">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <div className="w-full flex h-[50px] mt-4">
            <input
              type="text"
              className="h-full w-full px-4 border-2 border-r-0 border-[#0000003c] rounded-[5px_0_0_5px] outline-none"
              placeholder="Email address..."
            />
            <button className="h-full w-[200px] text-[18px] bg-[#C09578] text-[#fff] rounded-[0_5px_5px_0] cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
