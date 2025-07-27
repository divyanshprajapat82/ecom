import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

import { IoMdSearch } from "react-icons/io";

export default function TableHeader({ linkName, multyDelete, changeStatus, setSearchName }) {
  const [filterSearch, setFilterSearch] = useState(false);

  return (
    <>
      {filterSearch && (
        <div className="flex gap-2 bg-[#F9FAFB] p-2 mb-2">
          {/* <input
            type="text"
            onChange={(e)=> console.log(e.target.value)}
            placeholder="Search name"
            className="w-[300px] px-4 py-1 border border-[#00000025] rounded-[4px]"
          /> */}

          <input
            onChange={(e) => setSearchName(e.target.value)}
            type="text"
            placeholder="Search name"
            className="w-[400px] text-[14px] px-4 py-3 mr-2 border border-[#00000025] rounded-[4px]"
          />
          <div className="bg-[#1E40AF] text-[#fff] p-2 text-[18px] rounded-[4px]">
            <IoMdSearch />
          </div>
        </div>
      )}
      <div className="bg-[#F1F5F9] p-4 py-5 flex items-center justify-between flex-wrap">
        <h1 className="text-[25px] font-[600]">{linkName}</h1>
        <div>
          <button
            onClick={() => setFilterSearch(!filterSearch)}
            className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[8px] cursor-pointer"
          >
            {/* <FaFilter /> */}
            {filterSearch ? <MdFilterAltOff /> : <MdFilterAlt />}
          </button>
          <button className="bg-[#15803ce9] hover:bg-[#15803D] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]" onClick={changeStatus}>
              
          </button>
          <button className="bg-[#b91c1ce0] hover:bg-[#b91c1c] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]" onClick={multyDelete}>
            Detele
          </button>
        </div>
      </div>
    </>
  );
}
