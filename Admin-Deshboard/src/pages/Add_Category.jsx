import React, { useEffect, useState } from "react";
import NavBar from "../common/NavBar";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router";

export default function Add_Category() {
  const center = "Category";
  const last = "Add";

  // let navigate = useNavigate()

  let {id}= useParams()

  
  // console.log("hrllo");
    


  // const [categoryItems, setCategoryItems] = useState({
  //   categoryName: '',
  //   categoryOrder: ''
  // })


  useEffect(() => {
    $(".dropify").dropify({
      // messages: {
      //   default: "Drag and drop",
      // },
      // tpl: {
      //   message: `<div className="dropify-message"><span className="file-icon" /> <p className="text-[25px]">{{ default }}</p></div>`,
      // },
    });
  },[]);

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  let categoryData = (e) => {
    e.preventDefault()

    let formValue = new FormData(e.target)
    // console.log();



    // console.log("Hello");
    axios.post(`${apiBaseUrl}category/insert`, formValue)
      .then((res) => res.body)
      .then((finalData) => {
        // if (finalData.status) {

        //   toast.success(finalData.msg)
        //   setCategoryItems({
        //     categoryName: '',
        //     categoryOrder: ''
        //   })
        // setTimeout(() => {
        //   navigate(`/view_category`)
        // }, 2000)

        // } else {
        //   toast.error(finalData.msg)

        // }
        e.target.reset()

        const dropify = $('#myFileInput').data('dropify');
        if (dropify) {
          dropify.resetPreview();
          dropify.clearElement();
        }
      })

  }

  useEffect(()=>{
    // if(ids)
    // console.log("Id",id);
    if(id){
      axios.get(`${apiBaseUrl}category/view/${id}`)
        .then((res) => res.data)
        .then((finalData) => {
          // setCategoryData(finalData.categoryRes);
          // setStaticPath(finalData.staticPath);
          // console.log(finalData);
          // formValue = finalData.categoryRes.categoryName
          // formValue = finalData.categoryRes.categoryOrder
          // console.log(finalData.categoryRes.categoryName);
          
          
        })
    }
  })

  return (
    <>
      <div>
        <ToastContainer />
        <NavBar center={center} last={last} />
        <div className="mb-4 max-w-[1000px] m-auto mt-4 border border-[#0000004a] rounded-[5px]">
          <div className="bg-[#F1F5F9] px-4 py-3 border border-[#0000004a] rounded-[5px] flex items-center justify-between flex-wrap">
            <h1 className="text-[20px] font-[600]">Add Category</h1>
          </div>
          <form onSubmit={categoryData} action="" className="p-2">
            <div className="flex gap-4">
              <div className="w-[40%]">
                <label className="mb-1">
                  <b>Category Image</b>
                </label>
                <input
                  type="file"
                  name="categoryImage"
                  id="myFileInput"
                  className="dropify text-[15px]"
                  data-height="250"
                  required
                />
              </div>
              <div className="w-[60%]">
                <div className="flex flex-col mt-2">
                  <label className="mb-1">
                    <b>Category Name</b>
                  </label>
                  <input
                    type="text"
                    name="categoryName"
                    // value={categoryItems.categoryName}
                    // onChange={(e) => {
                    //   let obj = { ...categoryItems }
                    //   obj["categoryName"] = e.target.value
                    //   setCategoryItems(obj)
                    // }}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1"
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
                    name="categoryOrder"
                    // value={categoryItems.categoryOrder}
                    // onChange={(e) => {
                    //   let obj = { ...categoryItems }
                    //   obj["categoryOrder"] = e.target.value
                    //   setCategoryItems(obj)
                    // }}
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
              {id ? "Update Category" : "Add Category"}
              
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
