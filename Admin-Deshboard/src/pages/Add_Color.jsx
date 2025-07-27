import React, { useState } from "react";
import NavBar from "../common/NavBar";
import { ChromePicker } from "react-color";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

export default function Add_Color() {
  const [colorName, setColorName] = useState("")
  const [colorCode, setColor] = useState("");
  const [colorOrder, setColorOrder] = useState()
  
  const center = "Color";
  const last = "Add";

  let navigate = useNavigate()


  let colorData = (e) => {
    e.preventDefault()
    let apiBaseUrl = import.meta.env.VITE_APIBASEURL
    let obj = {
      colorName,
      colorCode,
      colorOrder
    }
    axios.post(`${apiBaseUrl}color/insert`,obj)
    .then((res)=>res.data)
    .then((finalData)=> {
      // console.log(finalData);
      if(finalData.status){
        e.target.reset()
        toast.success(finalData.msg)
        setTimeout(()=>{
          navigate(`/view_color`)
        },2000)
      } else{
        toast.error(finalData.msg)
      }
    })
    // console.log(colorName,colorCode,colorOrder);
    
  }

  return (
    <>
      <div>
      <ToastContainer />
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 mb-4 border border-[#0000004a] rounded-[5px]">
          <div className="bg-[#F1F5F9] px-4 py-3 border border-[#0000004a] rounded-[5px] flex items-center justify-between flex-wrap">
            <h1 className="text-[20px] font-[600]">Add Colors</h1>
          </div>
          <form onSubmit={colorData} action="" className="p-2">
            <div className="flex flex-col mt-2">
              <label className="mb-1">
                <b>Color Name</b>
              </label>
              <input
                type="text"
                name="name"
                onChange={(e)=>setColorName(e.target.value)}
                className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                placeholder="Enter Color Name"
                required
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="mb-1">
                <b>Color Picker</b>
              </label>
              <div className="flex items-center gap-4 mt-2 p-2">
                <ChromePicker
                  color={colorCode}
                  name="color"
                  onChangeComplete={(color) => setColor(color.hex)}
                />
                <div
                  className="w-[40px] h-[40px] rounded-[8px]"
                  style={{ backgroundColor: `${colorCode}` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1">
                <b>Order</b>
              </label>
              <input
                type="text"
                name="order"
                onChange={(e)=>setColorOrder(e.target.value)}
                className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                placeholder="Enter Order"
                required
              />
            </div>

            <button
              className="bg-[#7E22CE] text-[#fff] py-2 px-3 rounded-[8px] font-[500]  cursor-pointer my-10 mx-2"
              onSubmit={(e) => e.preventDefault()}
            >
              Add Color
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
