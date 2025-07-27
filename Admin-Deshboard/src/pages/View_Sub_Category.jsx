import React, { useEffect, useState } from "react";
import NavBar from "../common/NavBar";
import Table from "../common/Table";
import { FaPen } from "react-icons/fa";
import TableHeader from "../common/TableHeader";
import Tablebody from "../common/Tablebody";
import axios from "axios";
import { Link } from "react-router";

export default function View_Sub_Category() {
  const center = "Sub Category";
  const last = "View";
  const linkName = "View Sub Category";
  const firlsCol = "Parent Category Name";
  const middleCol = "Sub Category Name";
  const secoundCol = "Image";
  const thirdCol = "Order";
  const forthCol = "Status";
  const fiveCol = "Action";

  const firlsRow = "Neil Sims";
  const middleRow = "Men";
  const secoundRow = <img src="images/iso.png" width={40} />;
  const thirdRow = "1";
  const btn = "Deactive";

  const [categoryData, setCategoryData] = useState([])
  const [staticPath, setStaticPath] = useState("")
  const [searchName, setSearchName] = useState("")


  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  let getCategory = () => {

    axios.get(`${apiBaseUrl}subcategory/view`,{
      params: {
        searchName
      }
    })
      .then((res) => res.data)
      .then((finalData) => {
        setCategoryData(finalData.data);
        console.log(finalData.data);
        setStaticPath(finalData.staticPath);
      })
  }

  useEffect(()=>{
    getCategory()
  },[searchName])
  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 overflow-x-scroll">
          <TableHeader linkName={linkName} searchName={searchName} setSearchName={setSearchName} />

  <div className="w-full ">
            <table className="w-full text-left ">

              <thead className=" bg-[#F9FAFB] text-[15px]">
                <tr className=" ">
                  <th scope="col" className="p-3 w-0">
                    <input type="checkbox"
                    // onClick={handleClick}
                    // Chaked={Chaked}
                    // checked={checkedData}
                    />
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Category Name
                  </th>
                  <th scope="col" className="p-3 w-[12%]">
                    Image
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
                {/* {categoryData.length >= 1 ? */}
                {categoryData ?
                  categoryData.map((item, index) => (
                    <tr key={index} className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                        <input type="checkbox"  />
                      </td>
                      <th scope="row" className="px-6 py-4">
                        {item.subCategoryName}
                      </th>
                      <td className="px-6 py-4">
                        {/* <img src={item.categoryImage} alt="" width={40} /> */}
                        <img src={staticPath + item.subCategoryImage} alt="" className=" rounded-[20px]" width={50} />
                      </td>
                      <td className="px-6 py-4">
                        {item.subCategoryOrder}
                      </td>
                      <td className="py-4">
                        {item.subCategoryStatus ?

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
                        <Link to={`/add_category/${item._id}`}>
                          <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[50%] cursor-pointer">
                            <FaPen />
                          </button>
                        </Link>
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
      </div>
    </>
  );
}
