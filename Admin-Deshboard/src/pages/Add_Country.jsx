import React, { useEffect, useState } from "react";
import NavBar from "../common/NavBar";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

export default function Add_Country() {
  const center = "Country";
  const last = "Add";

  const [countryName, setCountryName] = useState(" ")
  const [countryOrder, setCountryOrder] = useState()
  let navigate = useNavigate()


  let countryData = (e) => {
    e.preventDefault()
    let apiBaseUrl = import.meta.env.VITE_APIBASEURL
    let obj = {
      countryName,
      countryOrder
    }
    axios.post(`${apiBaseUrl}country/insert`,obj)
    .then((res)=> res.data)
    .then((finalData)=>{
      if(finalData.status){
        e.target.reset()
        toast.success(finalData.msg)
        setTimeout(()=>{
          navigate(`/view_country`)
        },2000)
      } else{
        toast.error(finalData.msg)
      }
    })

  }
  
  return (
    <>
      <div>
      <ToastContainer />
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 border border-[#0000004a] rounded-[5px]">
          <div className="bg-[#F1F5F9] px-4 py-3 border border-[#0000004a] rounded-[5px] flex items-center justify-between flex-wrap">
            <h1 className="text-[20px] font-[600]">Add Country</h1>
          </div>
          <form onSubmit={countryData} action="" className="p-4">
            <div className="flex lg:flex-nowrap flex-wrap gap-4">
              <div className="lg:w-[60%] w-full">
                <div className="flex flex-col mt-2">
                  <label className="mb-1">
                    <b>Category Name</b>
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e)=> setCountryName(e.target.value)}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Category Name"
                    required
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="mb-1">
                    <b>Order</b>
                  </label>
                  <input
                    type="text"
                    name="order"
                    onChange={(e)=> setCountryOrder(e.target.value)}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Order"
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
