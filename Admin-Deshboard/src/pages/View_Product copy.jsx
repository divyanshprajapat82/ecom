import React from "react";
import { FaEdit, FaFilter } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import NavBar from "../common/NavBar";

export default function View_Product() {
  const center = "Product";
  const last = "Product Items";
  return (
    <>
      <NavBar center={center} last={last} />
      <div className="max-w-[1000px] m-auto mt-4 overflow-x-scroll">
        <div className="bg-[#F1F5F9] p-4 py-5 flex items-center justify-between flex-wrap">
          <h1 className="text-[25px] font-[600]">Product Items</h1>
        </div>
        <table className="w-full text-left overflow-hidden table-auto">
          <thead className=" overflow-hidden">
            <tr className=" bg-[#F9FAFB] text-[15px]">
              <th scope="col" className="p-3 w-0">
                Delete
              </th>
              <th scope="col" className="p-3 ">
                S. No.
              </th>
              <th scope="col" className="p-3 ">
                Product Name
              </th>
              <th scope="col" className="p-3  ">
                Description
              </th>
              <th scope="col" className="p-3 ">
                Short Description
              </th>
              <th scope="col" className="p-3 ">
                Thumbnails
              </th>
              <th scope="col" className="p-3 w-[6%]">
                Action
              </th>
              <th scope="col" className="p-3">
                Status
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
              <td className="p-4">Men's</td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4 overflow-hidden">
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
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
