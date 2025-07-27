import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import TableHeader from "../common/TableHeader";
import Table from "../common/Table";
import NavBar from "../common/NavBar";
import Tablebody from "../common/Tablebody";
import axios from "axios";

export default function View_Color() {
  const center = "Color";
  const last = "View";
  const linkName = "View Color"
  // const forthRow = "Status";
  // const fiveRow = "Action";

  const [colorData, setColorData] = useState([])

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  let getColor = () => {
    axios.get(`${apiBaseUrl}color/view`)
      .then((res) => res.data)
      .then((finalData) => {
        // console.log(finalData.colorRes);
        setColorData(finalData.colorRes)

      })
  }

  useEffect(() => {
    getColor()
  }, [])
  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 overflow-x-scroll">
          <TableHeader linkName={linkName} />
          <table className="w-full text-left overflow-hidden">

            <thead className=" bg-[#F9FAFB] text-[15px]">
              <tr className=" ">
                <th scope="col" className="p-3 w-0">
                  <input type="checkbox" />
                </th>
                <th scope="col" className="py-3 px-6">
                  Color Name
                </th>
                <th scope="col" className="p-4 w-[12%]">
                  Code
                </th>
                <th scope="col" className="p-3 w-[12%]">
                  Order
                </th>
                <th scope="col" className="p-3 w-[11%] ">
                  Status
                </th>
                <th scope="col" className="p-3 w-[10%] ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {colorData.length >= 1 ?
                colorData.map((item, index) => (
                  <tr key={index} className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <input type="checkbox" />
                    </td>
                    <th scope="row" className="p-4">
                      {item.colorName}
                    </th>
                    <td className="p-4">
                      {item.colorCode}
                    </td>
                    <td className="px-6 py-4">{item.colorOrder}</td>
                    <td className="py-4">
                      {item.colorStatus ?

                        <button className="bg-[#18aa4ee8] hover:bg-[#18AA4E] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                          Active
                        </button>
                        :
                        <button className="bg-[#b91c1ce0] hover:bg-[#b91c1c] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                          Deactive
                        </button>
                      }
                    </td>
                    <td className=" p-4">
                      <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[50%] cursor-pointer">
                        <FaPen />
                      </button>
                    </td>
                  </tr>
                ))
                :
                <tr >
                  <td colSpan={6} className="p-4 text-center">No Data</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
