import React, { useEffect, useState } from "react";
import NavBar from "../common/NavBar";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";
import axios from "axios";

export default function Add_Sub_Category() {
  const center = "Sub Category";
  const last = "Add";

  const [parentCategory, setParentCategory] = useState([])

  useEffect(() => {
    $(".dropify").dropify({
      // messages: {
      //   default: "Drag and drop",
      // },
      // tpl: {
      //   message: `<div className="dropify-message"><span className="file-icon" /> <p className="text-[25px]">{{ default }}</p></div>`,
      // },
    });
  });

  let getParentCategory = () => {
    axios.get("http://localhost:8000/admin/subcategory/parentcategory")
    .then((res)=>res.data)
    .then((finalData)=>{
      setParentCategory(finalData.data);
      
    })
  }

  useEffect(()=>{
    getParentCategory()
  },[])

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  let categoryData = (e) => {
    e.preventDefault()

    let formValue = new FormData(e.target)
    // console.log();



    // console.log("Hello");
    axios.post(`${apiBaseUrl}subcategory/insert`, formValue)
      .then((res) => res.body)
      .then((finalData) => {
        e.target.reset()

        const dropify = $('#myFileInput').data('dropify');
        if (dropify) {
          dropify.resetPreview();
          dropify.clearElement();
        }
      })

  }


  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="mb-4 max-w-[1000px] m-auto mt-4 overflow-x-scroll  border border-[#0000004a] rounded-[5px]">
          <div className="bg-[#F1F5F9] px-4 py-3 border border-[#0000004a] rounded-[5px] flex items-center justify-between flex-wrap">
            <h1 className="text-[20px] font-[600]">Add Sub Category</h1>
          </div>
          <form onSubmit={categoryData} action="" className="p-2">
            <div className="flex gap-4">
              <div className="w-[40%]">
                <label className="mb-1">
                  <b>Category Image</b>
                </label>
                <input
                  type="file"
                  name="subCategoryImage"
                  id="myFileInput"
                  className="dropify  text-[15px]"
                  data-height="250"
                />
              </div>
              <div className="w-[60%]">
                <div className="flex flex-col mt-2">
                  <label className="mb-1">
                    <b>Parent Category Name</b>
                  </label>
                  {/* <input
                    type="text"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Material Name"
                    required
                  /> */}
                  {/* <option value="">
                    <select name="" id="">
                      Select Category
                    </select>
                    <select name="" id="">sdsd</select>
                  </option> */}
                  <select
                    name="parentCategory"
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    {/* {parentCategory.map((items,index)(
                      <option value={items.categoryName}>{items.categoryName}</option>

                    ))} */}
                    {parentCategory.map((item,index)=>(
                      <option key={index} value={item._id}>{item.categoryName}</option>
                    ))}
                    {/* <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option> */}
                  </select>
                </div>
                <div className="flex flex-col mt-4">
                  <label className="mb-1">
                    <b>Category Name</b>
                  </label>
                  <input
                    type="text"
                    name="subCategoryName"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Material Name"
                    required
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="mb-1">
                    <b>Order</b>
                  </label>
                  <input
                    type="text"
                    name="subCategoryOrder"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Order"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              className="bg-[#7E22CE] text-[#fff] py-2 px-3 rounded-[8px] font-[500]  cursor-pointer my-4"
              onSubmit={(e) => e.preventDefault()}
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
