import React, { useEffect, useState } from "react";
import NavBar from "../common/NavBar";
import axios from "axios"
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router";

export default function Add_Material() {
  const center = "Material";
  const last = "Add";

  // const [materialName, setMaterialName] = useState("")
  // const [materialOrder, setMaterialOrder] = useState()
  const [materialItems, setMaterialItems] = useState({
    materialName: '',
    materialOrder: ''
  })
  let navigate = useNavigate()
  let { id } = useParams()
  console.log(id);
  

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  let materialData = (e) => {
    e.preventDefault()
    // let obj = {
    //   materialName,
    //   materialOrder
    // }
    if(id){
      axios.put(`${apiBaseUrl}material/update/${id}`, materialItems)
      .then((res) => res.data)
      .then((finalData) => {
        // console.log(finalData);
        // setMaterialName("")
        // setMaterialOrder("")
        if (finalData.status) {
          toast.success(finalData.msg)
          setTimeout(() => {
            navigate(`/view_material`)
          }, 2000)
        } else {
          toast.error(finalData.msg)
          // toast.error(finalData.msg)
        }
        // e.target.reset()

      })
    } else {
    axios.post(`${apiBaseUrl}material/insert`, materialItems)
      .then((res) => res.data)
      .then((finalData) => {
        console.log(finalData);
        // setMaterialName("")
        // setMaterialOrder("")
        if (finalData.status) {
          toast.success(finalData.msg)
          setMaterialItems({
            materialName: '',
            materialOrder: ''
          })
          setTimeout(() => {
            navigate(`/view_material`)
          }, 2000)
        } else {
          toast.error(finalData.msg)
          // toast.error(finalData.msg)
        }
        // e.target.reset()

      })
    }
  }

  // let updateData = (e) => {
  //   // console.log(e);

  //   axios.put(`${apiBaseUrl}/update/:id`,{e})
  //   .then((res) => res.data)
  //   .then((finalRes) => {
  //     // console.log(finalRes);
  //     // setMaterialData(finalRes.materialRes)
  //     navigate("/add_material")
  //     })
  // }

  // let {id} = prarams



  useEffect(() => {
    setMaterialItems({
      materialName: '',
      materialOrder: ''
    })


    if (id) {

      axios.get(`${apiBaseUrl}material/view/${id}`)
        .then((res) => res.data)
        .then((finalRes) => {
          setMaterialItems({
            materialName: finalRes.materialRes.materialName,
            materialOrder: finalRes.materialRes.materialOrder
          })
          console.log(finalRes);

        })
    }
  },[id])




  return (
    <>
      <div>
        <ToastContainer />
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 border border-[#0000004a] rounded-[5px]">
          <div className="bg-[#F1F5F9] px-4 py-3 border border-[#0000004a] rounded-[5px] flex items-center justify-between flex-wrap">
            <h1 className="text-[20px] font-[600]">Add Material</h1>
          </div>
          <form onSubmit={materialData} action="" className="p-2">
            <div className="flex flex-col mt-2">
              <label className="mb-1">
                <b>Category Name</b>
              </label>
              <input
                type="text"
                name="name"
                value={materialItems.materialName}
                onChange={(e) => {
                  let obj = { ...materialItems }
                  obj['materialName'] = e.target.value
                  setMaterialItems(obj)
                }}
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
                type="number"
                name="order"
                value={materialItems.materialOrder}
                onChange={(e) => {
                  let obj = { ...materialItems }
                  obj['materialOrder'] = e.target.value
                  setMaterialItems(obj)
                }}
                className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                placeholder="Enter Order"
                required
              />
            </div>

            <button
              className="bg-[#7E22CE] text-[#fff] py-2 px-3 rounded-[8px] font-[500]  cursor-pointer my-4"
            // onSubmit={(e) => e.preventDefault()}
            >
              {id ? "Update" : "Add"} Material
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
