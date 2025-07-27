import React from "react";
import { FaFilter, FaPen } from "react-icons/fa";

export default function Table({
  linkName,
  firlsCol,
  middleCol,
  CenterCol,
  secoundCol,
  thirdCol,
  forthCol,
  fiveCol,
}) {
  return (
    <>
      {/* <div className="max-w-[1000px] m-auto mt-4 overflow-x-scroll"> */}
      {/* <div className="bg-[#F1F5F9] p-4 py-5 flex items-center justify-between flex-wrap">
          <h1 className="text-[25px] font-[600]">{linkName}</h1>
          <div>
            <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[8px] cursor-pointer">
              <FaFilter />
            </button>
            <button className="bg-[#15803ce9] hover:bg-[#15803D] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
              Change Status
            </button>
            <button className="bg-[#b91c1ce0] hover:bg-[#b91c1c] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
              Detele
            </button>
          </div>
        </div> */}
      {/* <div className=""> */}
      {/* <table className="w-full text-left overflow-hidden"> */}
      <thead className=" overflow-hidden">
        <tr className=" bg-[#F9FAFB] text-[15px]">
          <th scope="col" className="p-3 w-0">
            <input type="checkbox" />
          </th>
          <th scope="col" className="py-3 px-6">
            {firlsCol}
          </th>
          <th scope="col" className="p-3 ">
            {middleCol}
          </th>
          <th scope="col" className="p-3">
            {CenterCol}
          </th>
          <th scope="col" className="p-3 w-[12%] ">
            {secoundCol}
          </th>
          <th scope="col" className="p-3 w-[15%]">
            {thirdCol}
          </th>
          <th scope="col" className="p-3 w-[11%]">
            {forthCol}
          </th>
          <th scope="col" className="p-3 w-[6%]">
            {fiveCol}
          </th>
        </tr>
      </thead>
      {/* <tbody>
              <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th
                  scope="row"
                  className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Neil Sims
                </th>
                <td className="p-4"> xyz@gmail.com</td>
                <td className="p-4"> 9876543210</td>
                <td className="p-4">
                  {" "}
                  <button className="bg-[#18aa4ee8] hover:bg-[#18AA4E] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                    Active
                  </button>
                </td>
                <td className="p-4">
                  {" "}
                  <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[50%] cursor-pointer">
                    <FaPen />
                  </button>
                </td>
              </tr>
              <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th
                  scope="row"
                  className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Neil Sims
                </th>
                <td className="p-4"> xyz@gmail.com</td>
                <td className="p-4"> 9876543210</td>
                <td className="p-4">
                  {" "}
                  <button className="bg-[#b91c1ce0] hover:bg-[#b91c1c] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                    Deactive
                  </button>
                </td>
                <td className="p-4">
                  {" "}
                  <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[50%] cursor-pointer">
                    <FaPen />
                  </button>
                </td>
              </tr>
            </tbody> */}
      {/* <tbody>
              <tr className="">
                <td className="w-4 p-4">
                    <input id="" type="checkbox" className="" />
                </td>
                <th scope="row" className="">Neil Sims
                
                </th>
                <td className=" ">xyz@gmail.com</td>
                <td className=" ">9876543210</td>
                <td className=" ">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2"
                  >
                    Active
                  </button>
                </td>
                <td className=" py-4">
                  <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[8px] cursor-pointer">
                    <FaFilter />
                  </button>
                </td>
              </tr>
            </tbody> */}
      {/* </table> */}
      {/* <table className="w-full text-left">
            <thead className="">
              <tr>
                <th scope="col" className="p-4">
                    <input id="checkbox-all-search" type="checkbox" className="" />
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="w-[12%]">
                  Email Id
                </th>
                <th scope="col" className="w-[15%]">
                  Mobile Number
                </th>
                <th scope="col" className="w-[11%]">
                  Status
                </th>
                <th scope="col" className="w-[6%]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className=""
                    />
                    <label for="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th scope="row" className="">
                  <div className="py-4">
                    <div className="">Neil Sims</div>
                  </div>
                </th>
                <td className=" py-4">xyz@gmail.com</td>
                <td className=" py-4">9876543210</td>
                <td className=" py-4">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2"
                  >
                    Active
                  </button>
                </td>
                <td className=" py-4">
                  <a href="/user">
                    <div className="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="text-[18px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="py-4">
                    <div className="text-base font-semibold">Neil Sims</div>
                  </div>
                </th>
                <td className=" py-4">xyz@gmail.com</td>
                <td className=" py-4">9876543210</td>
                <td className=" py-4">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2"
                  >
                    Deactive
                  </button>
                </td>
                <td className=" py-4">
                  <a href="/user">
                    <div className="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="text-[18px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table> */}
      {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className=" w-[12%] ">
                  Email Id
                </th>
                <th scope="col" className=" w-[15%] ">
                  Mobile Number
                </th>
                <th scope="col" className="w-[11%]">
                  Status
                </th>
                <th scope="col" className="w-[6%]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="py-4">
                    <div className="text-base font-semibold">Neil Sims</div>
                  </div>
                </th>
                <td className=" py-4">xyz@gmail.com</td>
                <td className=" py-4">9876543210</td>
                <td className=" py-4">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2"
                  >
                    Active
                  </button>
                </td>
                <td className=" py-4">
                  <a href="/user">
                    <div className="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="text-[18px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </a>
                </td>
              </tr>
              <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="py-4">
                    <div className="text-base font-semibold">Neil Sims</div>
                  </div>
                </th>
                <td className=" py-4">xyz@gmail.com</td>
                <td className=" py-4">9876543210</td>
                <td className=" py-4">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2"
                  >
                    Deactive
                  </button>
                </td>
                <td className=" py-4">
                  <a href="/user">
                    <div className="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="text-[18px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
