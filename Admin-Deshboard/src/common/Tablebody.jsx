import React from "react";
import { FaPen } from "react-icons/fa";

export default function Tablebody({
  firlsRow,
  middleRow,
  CenterRow,
  secoundRow,
  thirdRow,
  btn,
  // getData
}) {
  // console.log(getData);
  
  return (
    <>
      <tbody>
        
        <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
          <th className="p-3">
            <input type="checkbox" />
          </th>
          <th
            scope="row"
            className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
          >
            {firlsRow}
          </th>
          <td className="p-4"> {middleRow}
          </td>
          <td className="p-4"> {CenterRow}
          </td>
          <td className="p-4"> {secoundRow}
          </td>
          <td className="p-4"> {thirdRow}
          </td>
          {btn == "Deactive" ? (
            <td className="p-4">
              {" "}
              <button className="bg-[#b91c1ce0] hover:bg-[#b91c1c] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                Deactive
              </button>
            </td>
          ) : (
            <td className="p-4">
              {" "}
              <button className="bg-[#18aa4ee8] hover:bg-[#18AA4E] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                Active
              </button>
            </td>
          )}
          <td className="p-4">
            {" "}
            <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[50%] cursor-pointer">
              <FaPen />
            </button>
          </td>
        </tr>
      </tbody>
      {/* <tbody>
        <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
          <th className="p-3">
            <input type="checkbox" />
          </th>
          <th
            scope="row"
            className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
          >
            {firlsRow}
          </th>
          <td className="p-4"> {middleRow}
          </td>
          <td className="p-4"> {CenterRow}
          </td>
          <td className="p-4"> {secoundRow}
          </td>
          <td className="p-4"> {thirdRow}
          </td>
          {btn == "Deactive" ? (
            <td className="p-4">
              {" "}
              <button className="bg-[#b91c1ce0] hover:bg-[#b91c1c] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                Deactive
              </button>
            </td>
          ) : (
            <td className="p-4">
              {" "}
              <button className="bg-[#18aa4ee8] hover:bg-[#18AA4E] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                Active
              </button>
            </td>
          )}
          <td className="p-4">
            {" "}
            <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[50%] cursor-pointer">
              <FaPen />
            </button>
          </td>
        </tr>
      </tbody> */}
    </>
  );
}
