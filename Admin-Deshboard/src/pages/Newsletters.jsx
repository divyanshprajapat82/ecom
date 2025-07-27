import React from "react";
import Table from "../common/Table";
import NavBar from "../common/NavBar";
import TableHeader from "../common/TableHeader";
import { FaPen } from "react-icons/fa";
import Tablebody from "../common/Tablebody";

export default function Newsletters() {
  const center = "News Letter";
  const last = "View";
  const linkName = "Newsletters Management";
  const firlsCol = "Name";
  const secoundCol = "Email Id";
  const thirdCol = "Mobile Number";
  const forthCol = "Status";
  const fiveCol = "Action";

  const firlsRow = "Neil Sims";
  const secoundRow = "xyz@gmail.com";
  const thirdRow = "9876543210";
  const btn = "Deactive";
  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 overflow-x-scroll">
          <TableHeader linkName={linkName} />
          <table className="w-full text-left overflow-hidden">
            <Table
              firlsCol={firlsCol}
              secoundCol={secoundCol}
              thirdCol={thirdCol}
              forthCol={forthCol}
              fiveCol={fiveCol}
            />
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
            <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
            />
            <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
              btn={btn}
            />
          </table>
        </div>
      </div>
    </>
  );
}
