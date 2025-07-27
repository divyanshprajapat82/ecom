import React from "react";
import { FaEdit, FaFilter } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import NavBar from "../common/NavBar";

export default function Orders() {
  const center = "Order";
  const last = "";
  return (
    <>
      <NavBar center={center} last={last} />
      <div className="max-w-[1000px] m-auto mt-4 overflow-x-scroll">
        <div className="bg-[#F1F5F9] p-4 py-5 flex items-center justify-between flex-wrap">
          <h1 className="text-[25px] font-[600]">Order's List</h1>
        </div>
        <table className="w-full text-left overflow-hidden table-auto">
          <thead className=" overflow-hidden">
            <tr className=" bg-[#F9FAFB] text-[15px]">
              <th scope="col" className="p-3 w-0">
                <button className="py-2 px-4 bg-linear-60 from-[#8D38EB] to-[#437BF5] rounded-[8px] text-[#fff] cursor-pointer">
                  Delete
                </button>
              </th>
              <th scope="col" className="p-3 ">
                S. No.
              </th>
              <th scope="col" className="p-3 ">
                Order ID{" "}
              </th>
              <th scope="col" className="p-3  ">
                Name
              </th>
              <th scope="col" className="p-3 ">
                Quantity
              </th>
              <th scope="col" className="p-3 ">
                Price
              </th>
              <th scope="col" className="p-3 w-[6%]">
                Date{" "}
              </th>
              <th scope="col" className="p-3">
                Status
              </th>
              <th scope="col" className="p-3">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <td
                scope="row"
                className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </td>
              <td className="p-4">Frank01</td>
              <td className="p-4">
                <div className="line-clamp-1">Roshan Chaurasia </div>
                {/* <div className="text-[blue]">Read More</div> */}
              </td>
              <td className="p-4 overflow-hidden">
                <div className="line-clamp-1">2</div>
                {/* <div className="text-[blue]">Read More</div> */}
              </td>
              <td className="p-4">
                {/* <img
                  src="images/productImg.png"
                  className="w-[50px] h-[50px] overflow-hidden object-cover rounded-[5px]"
                  alt=""
                /> */}
                ₹ 3500
              </td>
              <td className="p-4">
                {" "}
                {/* <div className="flex items-center gap-2">
                  <RiDeleteBinLine className="text-[red]" /> |{" "}
                  <FaEdit className="text-[#ffe100]" />
                </div> */}
                10/06/2024
              </td>

              <td className="p-4">Processing... </td>
              <td className="p-4">
                <button className="py-2 px-4 border border-[#00000063] rounded-[20px] cursor-pointer">
                  View
                </button>{" "}
              </td>
            </tr>
            {/* <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <td
                scope="row"
                className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </td>
              <td className="p-4">Men's</td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <img
                  src="images/productImg.png"
                  className="w-[50px] h-[50px] overflow-hidden object-cover rounded-[5px]"
                  alt=""
                />
              </td>
              <td className="p-4">
                {" "}
                <div className="flex items-center gap-2">
                  <RiDeleteBinLine className="text-[red]" /> |{" "}
                  <FaEdit className="text-[#ffe100]" />
                </div>
              </td>

              <td className="p-4">Active</td>
            </tr>
            <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <td
                scope="row"
                className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </td>
              <td className="p-4">Men's</td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <img
                  src="images/productImg.png"
                  className="w-[50px] h-[50px] overflow-hidden object-cover rounded-[5px]"
                  alt=""
                />
              </td>
              <td className="p-4">
                {" "}
                <div className="flex items-center gap-2">
                  <RiDeleteBinLine className="text-[red]" /> |{" "}
                  <FaEdit className="text-[#ffe100]" />
                </div>
              </td>

              <td className="p-4">Active</td>
            </tr>
            <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <td
                scope="row"
                className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                4
              </td>
              <td className="p-4">Men's</td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <img
                  src="images/productImg.png"
                  className="w-[50px] h-[50px] overflow-hidden object-cover rounded-[5px]"
                  alt=""
                />
              </td>
              <td className="p-4">
                {" "}
                <div className="flex items-center gap-2">
                  <RiDeleteBinLine className="text-[red]" /> |{" "}
                  <FaEdit className="text-[#ffe100]" />
                </div>
              </td>

              <td className="p-4">Active</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
