import React from "react";

export default function TrendingBanner() {
  return (
    <>
      <div className="w-full lg:h-[500px] md:h-[400px] h-[300px] mt-4 group overflow-hidden">
        <div className="bg-[url(/images/t-c-banner.jpg)] w-full h-full bg-cover object-cover bg-center">
          <div className="md:max-w-[1100px] max-w-[550px] h-full m-auto px-2">
            <div className="flex flex-col justify-center items-start h-full sm:group-hover:scale-[1.04] group-hover:scale-0 transition-all duration-200">
              <h1 className="lg:text-[50px] md:text-[40px] text-[22px] font-bold">
                New Trending{" "}
                <span className="text-[#ed1296] text-shadow-md">
                  {" "}
                  Collection{" "}
                </span>
              </h1>
              <p className="text-[#00000085]">
                We Believe That Good Design is Always in Season
              </p>
              <button className="uppercase px-6 py-3 md:mt-8 mt-4 md:text-[16px] text-[13px] text-[#CAA891] font-bold border-2 border-[#CAA891] cursor-pointer hover:bg-[#C09578] hover:text-[#fff] transition-all duration-200">
                Shopping Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
