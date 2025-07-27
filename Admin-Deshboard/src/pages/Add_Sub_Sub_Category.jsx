import React, { useEffect, useState } from "react";
import NavBar from "../common/NavBar";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";
import axios from "axios";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

export default function Add_Sub_Sub_Category() {
  const center = "Sub Category";
  const last = "Add Sub Category";

  const [parentCategory, setParentCategory] = useState([])
  const [parentSubCategory, setParentSubCategory] = useState([])
  const [subCategoryShow, setSubCategoryShow] = useState("")

  const [subSubItems, setSubSubItems] = useState({
    parentCategory: '',
    subSubCategory: '',
    subSubCategoryName: "",
    subSubCategoryOrder: ''
  })

  let { id } = useParams()
  console.log(id);

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

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  let categoryData = (e) => {
    e.preventDefault()

    let formValue = new FormData(e.target)

    if(id){
      axios.put(`${apiBaseUrl}subsubcategory/update/${id}`, subSubItems)
      .then((res) => res.data)
      .then((finalData) => {
        if (finalData.status) {
          toast.success(finalData.msg)
          e.target.reset()
          setTimeout(() => {
            navigate(`/view_material`)
          }, 2000)
        } else {
          toast.error(finalData.msg)
        }

      })
    } 
    else {


    // console.log("Hello");
    axios.post(`${apiBaseUrl}subsubcategory/insert`, formValue)
      .then((res) => res.body)
      .then((finalData) => {
        e.target.reset()
        setSubSubItems("")

        const dropify = $('#myFileInput').data('dropify');
        if (dropify) {
          dropify.resetPreview();
          dropify.clearElement();
        }
      })
    }

  }

  let getParentCategory = () => {
    axios.get("http://localhost:8000/admin/subcategory/parentcategory")
    .then((res)=>res.data)
    .then((finalData)=>{
      setParentCategory(finalData.data);
      
    })
  }
  let getParentSubCategory = () => {
    axios.get(`http://localhost:8000/admin/subsubcategory/parentsubcategory`,{
      params: {
        subCategoryShow
      }
    })
    .then((res)=>res.data)
    .then((finalData)=>{
      setParentSubCategory(finalData.data);
      console.log(finalData.data);
      
    })
  }

  useEffect(() => {
    setSubSubItems({
    parentCategory: '',
    parentSubCategory: '',
    subSubCategoryName: "",
    subSubCategoryOrder: ''
    })

    if (id) {

      axios.get(`${apiBaseUrl}subsubcategory/view/${id}`)
        .then((res) => res.data)
        .then((finalRes) => {
          setSubSubItems({
            parentCategory: finalRes.data.parentCategory._id,
            parentSubCategory: finalRes.data.parentSubCategory._id,
            subSubCategoryName: finalRes.data.subSubCategoryName,
            subSubCategoryOrder: finalRes.data.subSubCategoryOrder,
          })
          // console.log(finalRes.data.acknowledged);
          
          

        })
    }
  },[id])

  useEffect(()=>{
    getParentCategory()
    getParentSubCategory()
  },[subCategoryShow])

  return (
    <>
      <div>
      <ToastContainer />
        <NavBar center={center} last={last} />
        <div className="mb-4 max-w-[1000px] m-auto mt-4 overflow-x-scroll  border border-[#0000004a] rounded-[5px]">
          <div className="bg-[#F1F5F9] px-4 py-3 border border-[#0000004a] rounded-[5px] flex items-center justify-between flex-wrap">
            <h1 className="text-[20px] font-[600]">Add Sub Sub Category</h1>
          </div>
          <form onSubmit={categoryData} action="" className="p-2">
            <div className="flex gap-4">
              <div className="w-[40%]">
                <label className="mb-1">
                  <b>Category Image</b>
                </label>
                <input
                  type="file"
                  name="subSubCategoryImage"
                  id="myFileInput"
                  className="dropify text-[15px]"
                  data-height="250"
                />
              </div>
              <div className="w-[60%]">
                <div className="flex flex-col mt-2">
                  <label className="mb-1">
                    <b>Parent Category Name</b>
                  </label>
                  <select
                    name="parentCategory"
                    value={subSubItems.parentCategory}
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    onChange={(e) => {
                      setSubCategoryShow(e.target.value)
                      let obj = { ...subSubItems }
                      obj['parentCategory'] = e.target.value
                      setSubSubItems(obj)
                      
                    }}
                  >
                    <option value="">Select Category</option>
                    {parentCategory.map((item,index)=>(
                      <option key={index} value={item._id}>{item.categoryName}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mt-4">
                  <label className="mb-1">
                    <b>Sub Category Name</b>
                  </label>
                  <select
                    name="parentSubCategory"
                    value={subSubItems.parentSubCategory}
                    onChange={(e) => {
                      let obj = { ...subSubItems }
                      obj['parentSubCategory'] = e.target.value
                      setSubSubItems(obj)
                    }}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    
                  >
                    <option value="">Select Category</option>
                    {parentSubCategory.map((item,index)=>(
                      <option key={index} value={item._id}>{item.subCategoryName}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mt-4">
                  <label className="mb-1">
                    <b>Category Name</b>
                  </label>
                  <input
                    type="text"
                    name="subSubCategoryName"
                    value={subSubItems.subSubCategoryName}
                    onChange={(e) => {
                      let obj = { ...subSubItems }
                      obj['subSubCategoryName'] = e.target.value
                      setSubSubItems(obj)
                      console.log(obj);
                      
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
                    type="text"
                    name="subSubCategoryOrder"
                    value={subSubItems.subSubCategoryOrder}
                    onChange={(e) => {
                      let obj = { ...subSubItems }
                      obj['subSubCategoryOrder'] = e.target.value
                      setSubSubItems(obj)
                    }}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Order"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              className="bg-[#7E22CE] text-[#fff] py-2 px-3 rounded-[8px] font-[500]  cursor-pointer my-4"
            >
              {id ? "Updata Category": "Add Category"} 
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
