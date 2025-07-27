import React from "react";

export default function ChairCards() {
  return (
    <>
      <div className="md:max-w-[1100px] m-auto p-2 mt-4">
        {/* <div className="flex flex-wrap justify-between gap-2"> */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          <div className="relative sm:w-[350px] w-full overflow-hidden group cursor-pointer">
            <img
              src="/images/ChairCard-1.webp"
              className="group-hover:scale-[1.1] transition-all duration-500"
              alt=""
            />
            <div className="absolute top-0 w-full h-full bg-[#00000017] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute top-0 left-0 p-4">
              <p>Design Creative</p>
              <h4 className="text-[25px] font-bold mt-[-5px]">
                Chair Collection
              </h4>
            </div>
          </div>
          <div className="relative sm:w-[350px] w-full overflow-hidden group cursor-pointer">
            <img
              src="/images/ChairCard-2.webp"
              className="group-hover:scale-[1.1] transition-all duration-500"
              alt=""
            />
            <div className="absolute top-0 w-full h-full bg-[#00000017] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute top-0 left-0 p-4">
              <p>Design Creative</p>
              <h4 className="text-[25px] font-bold mt-[-5px]">
                Chair Collection
              </h4>
            </div>
          </div>
          <div className="relative sm:w-[350px] w-full overflow-hidden group cursor-pointer">
            <img
              src="/images/ChairCard-1.webp"
              className="group-hover:scale-[1.1] transition-all duration-500"
              alt=""
            />
            <div className="absolute top-0 w-full h-full bg-[#00000017] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute top-0 left-0 p-4">
              <p>Design Creative</p>
              <h4 className="text-[25px] font-bold mt-[-5px]">
                Chair Collection
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
