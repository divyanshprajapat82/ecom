import React, { useEffect, useRef, useState } from "react";
import NavBar from "../common/NavBar";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useParams } from "react-router";

export function MyEditor({ name, data, onChangeData }) {
  // const [value, setValue] = useState("");


  return (
    <div>
      {/* <ReactQuill value={value} onChange={setValue} /> */}
      <ReactQuill value={data} onChange={onChangeData} />

      {/* Hidden input to store the value */}
      <input type="hidden" name={name} value={data} />
    </div>
  );
}

export default function Add_Product() {
  const center = "Product";
  const last = "Product Details";

  const quillRef = useRef();
  let { id } = useParams()




  const [parentCatList, setParentCatList] = useState([])
  const [subCatList, setSubCatList] = useState([])
  const [subSubCatList, setSubSubCatList] = useState([])
  const [materialList, setMaterialList] = useState([])
  const [colorlList, setColorList] = useState([])
  const [productImageUrl, setProductImageUrl] = useState("")
  const [productBackImageUrl, setProductBackImageUrl] = useState("")
  const [productGalleryImageUrl, setProductGalleryImageUrl] = useState("")

  useEffect(() => {

    $(".dropify").dropify();

    if (productImageUrl) {

      const pImgDropifyElement = $("#productImage");

      if (pImgDropifyElement.data("dropify")) {
        pImgDropifyElement.data("dropify").destroy();
        pImgDropifyElement.removeData("dropify");
      }

      // **Force Update Dropify Input**
      pImgDropifyElement.replaceWith(
        `<input type="file" accept="image/*" name="productImage" id="productImage"
        class="dropify" data-height="250" data-default-file="${productImageUrl}"/>`
      );

      // **Reinitialize Dropify**
      $("#productImage").dropify();
    }

    if (productBackImageUrl) {

      const pImgDropifyElement = $("#productBackImage");

      if (pImgDropifyElement.data("dropify")) {
        pImgDropifyElement.data("dropify").destroy();
        pImgDropifyElement.removeData("dropify");
      }

      // **Force Update Dropify Input**
      pImgDropifyElement.replaceWith(
        `<input type="file" accept="image/*" name="productBackImage" id="productBackImage"
        class="dropify" data-height="250" data-default-file="${productBackImageUrl}"/>`
      );

      // **Reinitialize Dropify**
      $("#productBackImage").dropify();

      // **Update React Hook Form when File Changes**
      // $("#productBackImage").on("change", function (event) {
      //   if (event.target.files.length > 0) {
      //     setValue("productBackImage", event.target.files[0]); // ✅ Sync React Hook Form
      //   }
      // });
    }

    if (productGalleryImageUrl) {

      const pImgDropifyElement = $("#productGalleryImage");

      if (pImgDropifyElement.data("dropify")) {
        pImgDropifyElement.data("dropify").destroy();
        pImgDropifyElement.removeData("dropify");
      }

      // **Force Update Dropify Input**
      pImgDropifyElement.replaceWith(
        `<input type="file" accept="image/*" name="productGalleryImage" id="productGalleryImage"
        class="dropify" data-height="250" data-default-file="${productGalleryImageUrl}"/>`
      );

      // **Reinitialize Dropify**
      $("#productGalleryImage").dropify();

      // **Update React Hook Form when File Changes**
      // $("#productGalleryImage").on("change", function (event) {
      //   if (event.target.files.length > 0) {
      //     setValue("productGalleryImage", event.target.files[0]); // ✅ Sync React Hook Form
      //   }
      // });
    }

   
  }, [productImageUrl, productBackImageUrl, productGalleryImageUrl]);





  let apiBaseUrl = import.meta.env.VITE_APIBASEURL


  let getParentCategory = () => {
    axios.get(`${apiBaseUrl}product/parent-category`)
      .then((res) => res.data)
      .then((finalData) => {
        setParentCatList(finalData.data);

      })
  }


  let getSubCategory = (id) => {
    axios.get(`${apiBaseUrl}product/sub-category/${id}`)
      .then((res) => res.data)
      .then((finalData) => {
        setSubCatList(finalData.data);


      })
  }

  let getSubSubCategory = (id) => {
    axios.get(`${apiBaseUrl}product/sub-sub-category/${id}`)
      .then((res) => res.data)
      .then((finalData) => {
        setSubSubCatList(finalData.data);


      })
  }

  let getmaterialName = (d) => {
    axios.get(`${apiBaseUrl}product/product-material`)
      .then((res) => res.data)
      .then((finalData) => {
        setMaterialList(finalData.data);
      })
  }

  let getColorName = () => {
    axios.get(`${apiBaseUrl}product/product-color`)
      .then((res) => res.data)
      .then((finalData) => {
        setColorList(finalData.data);
      })
  }

  useEffect(() => {
    getParentCategory()
    getmaterialName()
    getColorName()
  }, [])

  const [productItems, setProductItems] = useState({
    productName: "",
    productImage: "",
    productBackImage: "",
    productGalleryImage: "",
    parentCategory: "",
    subCategory: "",
    subSubCategory: "",
    productMaterial: [],
    productColor: [],
    productType: "",
    productBestSelling: "",
    productTopRated: "",
    productUpsell: "",
    productActualPrice: "",
    productSalePrice: "",
    productStocks: "",
    productDescription: "",
    productOrder: "",
  })

  let productSave = (e) => {
    e.preventDefault()
    let formValue = new FormData(e.target)
    if (id) {
      axios.put(`${apiBaseUrl}product/update/${id}`, formValue)
        .then((res) => res.body)
        .then((finalData) => {
          console.log("finalData.data");

        })
    } else {
      axios.post(`${apiBaseUrl}product/insert`, formValue)
        .then((res) => res.body)
        .then((finalData) => {
          // e.target.reset()
          console.log("finalData.data");
        })
    }
  }




  useEffect(() => {
    setProductItems({
      productName: "",
      productImage: "",
      productBackImage: "",
      productGalleryImage: "",
      parentCategory: "",
      subCategory: "",
      subSubCategory: "",
      productMaterial: [],
      productColor: [],
      productType: "",
      productBestSelling: "",
      productTopRated: "",
      productUpsell: "",
      productActualPrice: "",
      productSalePrice: "",
      productStocks: "",
      productDescription: "",
      productOrder: "",
    })
    if (id) {
      axios.get(`${apiBaseUrl}product/view/${id}`)
        .then((res) => res.data)
        .then((finalData) => {
          setProductItems({
            productName: finalData.data[0].productName,
            productImage: finalData.data[0].productImage,
            productBackImage: finalData.data[0].productBackImage,
            productGalleryImage: finalData.data[0].productGalleryImage,
            parentCategory: finalData.data[0].parentCategory._id,
            subCategory: finalData.data[0].subCategory._id,
            subSubCategory: finalData.data[0].subSubCategory._id,
            productMaterial: finalData.data[0].productMaterial._id,
            productColor: finalData.data[0].productColor._id,
            productType: finalData.data[0].productType,
            productBestSelling: finalData.data[0].productBestSelling,
            productTopRated: finalData.data[0].productTopRated,
            productUpsell: finalData.data[0].productUpsell,
            productActualPrice: finalData.data[0].productActualPrice,
            productSalePrice: finalData.data[0].productSalePrice,
            productStocks: finalData.data[0].productStocks,
            productDescription: finalData.data[0].productDescription,
            productOrder: finalData.data[0].productOrder,
          })
          setProductImageUrl(finalData.staticPath + finalData.data[0].productImage);
          setProductBackImageUrl(finalData.staticPath + finalData.data[0].productBackImage);
          setProductGalleryImageUrl(finalData.staticPath + finalData.data[0].productGalleryImage[0]);
          getSubCategory(finalData.data[0].parentCategory._id)
          getSubSubCategory(finalData.data[0].subCategory._id)
          console.log(finalData.data[0].productMaterial);


        })
    }
  }, [id])


  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <form onSubmit={productSave} action="" className="mb-4 p-2 mt-4">
          <div className="w-full flex lg:flex-nowrap flex-wrap gap-4">
            <div className="lg:w-[40%] w-[100%]">
              <div>
                <label className="mb-1">
                  <b className="text-[15px] text-[#444]">Product Image</b>
                </label>
                <input
                  type="file"
                  name="productImage"
                  id="productImage"
                  className="dropify text-[15px] productImageInput"
                  data-height="250"
                />
              </div>
              <div className="mt-2">
                <label className="mb-1">
                  <b className="text-[15px] text-[#444]">Back Image</b>
                </label>
                <input
                  type="file"
                  name="productBackImage"
                  id="productBackImage"
                  className="dropify text-[15px] productImageInput"
                  data-height="250"
                />
              </div>
              <div className="mt-2">
                <label className="mb-1">
                  <b className="text-[15px] text-[#444]">Gallery Image</b>
                </label>
                <input
                  type="file"
                  name="productGalleryImage"
                  id="productGalleryImage"
                  multiple
                  className="dropify text-[15px] productImageInput"
                  data-height="250"
                />
              </div>
            </div>
            <div className="lg:w-[60%]  w-[100%]">
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Prodct Name</b>
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={productItems.productName}
                    onChange={(e) => {
                      let obj = { ...productItems }
                      obj['productName'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1"
                    placeholder="Enter Material Name"
                    required
                  />
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Select Parent Category</b>
                  </label>
                  <select
                    name="parentCategory"
                    id=""
                    value={productItems.parentCategory}
                    onChange={(e) => {
                      getSubCategory(e.target.value)
                      let obj = { ...productItems }
                      obj['parentCategory'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    {parentCatList.map((item, index) => (
                      <option key={index} value={item._id}>{item.categoryName}</option>
                    ))}
                    {/* <option>Mobile Phones</option>
                    <option>Laptops</option>
                    <option>Men's Wear</option>
                    <option>Women's Wear</option> */}
                  </select>
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Select Sub Category</b>
                  </label>
                  <select
                    name="subCategory"
                    id=""
                    value={productItems.subCategory}
                    onChange={(e) => {
                      getSubSubCategory(e.target.value)
                      let obj = { ...productItems }
                      obj['subCategory'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                  >
                    <option value="">Select Category</option>
                    {subCatList.map((item, index) => (
                      <option key={index} value={item._id}>{item.subCategoryName}</option>
                    ))}
                    {/* <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option> */}
                  </select>
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Select Sub Sub Category</b>
                  </label>
                  <select
                    name="subSubCategory"
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    value={productItems.subSubCategory}
                    onChange={(e) => {
                      let obj = { ...productItems }
                      obj['subSubCategory'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                  >
                    <option value="">Select Category</option>
                    {subSubCatList.map((item, index) => (
                      <option key={index} value={item._id}>{item.subSubCategoryName}</option>
                    ))}
                    {/* <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option> */}
                  </select>
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Select Meterial</b>
                  </label>
                  <select
                    name="productMaterial[]"
                    multiple
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    value={productItems.productMaterial}
                    onChange={(e) => {
                      const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
                      let obj = { ...productItems, productMaterial: selectedOptions }
                      // obj['productMaterial'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                  >
                    <option value="">Select Category</option>
                    {materialList.map((item, index) => (
                      <option key={index} value={item._id}>{item.materialName}</option>
                    ))}
                    {/* <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option> */}
                  </select>
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Select Color</b>
                  </label>
                  <select
                    name="productColor[]"
                    multiple
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    value={productItems.productColor}
                    onChange={(e) => {
                      const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
                      let obj = { ...productItems, productColor: selectedOptions }
                      // obj['productColor'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                  >
                    <option value="">Select Category</option>
                    {colorlList.map((item, index) => (
                      <option key={index} value={item._id}>{item.colorName}</option>
                    ))}
                    {/* <option>Men's</option>
                    <option>Women</option>
                    <option>Sale</option> */}
                  </select>
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Select Prodcut Type</b>
                  </label>
                  <select
                    name="productType"
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    value={productItems.productType}
                    onChange={(e) => {
                      let obj = { ...productItems }
                      obj['productType'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                  >
                    <option value="">Select Type</option>
                    <option value={"1"}>Featured</option>
                    <option value={"2"}>New Arrived</option>
                    <option value={"3"}>OnSale</option>
                  </select>
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Is Best Selling</b>
                  </label>
                  <select
                    name="productBestSelling"
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    value={productItems.productBestSelling}
                    onChange={(e) => {
                      let obj = { ...productItems }
                      obj['productBestSelling'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                  >
                    <option value="">Select Best Selling</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Is Top Rated</b>
                  </label>
                  <select
                    name="productTopRated"
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    value={productItems.productTopRated}
                    onChange={(e) => {
                      let obj = { ...productItems }
                      obj['productTopRated'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                  >
                    <option value="">Select Top Rated</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Is Upsell</b>
                  </label>
                  <select
                    name="productUpsell"
                    id=""
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    value={productItems.productUpsell}
                    onChange={(e) => {
                      let obj = { ...productItems }
                      obj['productUpsell'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                  >
                    <option value="">Select Upsell</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Actual Price</b>
                  </label>
                  <input
                    type="text"
                    name="productActualPrice"
                    value={productItems.productActualPrice}
                    onChange={(e) => {
                      let obj = { ...productItems }
                      obj['productActualPrice'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Actual Price"

                  />
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Sale Price</b>
                  </label>
                  <input
                    type="text"
                    name="productSalePrice"
                    value={productItems.productSalePrice}
                    onChange={(e) => {
                      let obj = { ...productItems }
                      obj['productSalePrice'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Price"

                  />
                </div>
              </div>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 mt-2">
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Total In Stocks</b>
                  </label>
                  <input
                    type="text"
                    name="productStocks"
                    value={productItems.productStocks}
                    onChange={(e) => {
                      let obj = { ...productItems }
                      obj['productStocks'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Material Name"

                  />
                </div>
                <div className="flex flex-col mt-2 w-full">
                  <label className="mb-1">
                    <b className="text-[15px] text-[#444]">Order</b>
                  </label>
                  <input
                    type="text"
                    name="productOrder"
                    value={productItems.productOrder}
                    onChange={(e) => {
                      let obj = { ...productItems }
                      obj['productOrder'] = e.target.value
                      setProductItems(obj)
                      console.log(obj);
                    }}
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Material Name"

                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 h-[200px]">
            {/* productDescription */}
            {/* <ReactQuill theme="snow" ref={quillRef} className="" /> */}
            <MyEditor name="productDescription"
              data={productItems.productDescription}
              onChangeData={(e) => {
                let obj = { ...productItems }
                obj['productDescription'] = e
                setProductItems(obj)
                console.log(obj);
              }}
            />
          </div>

          <button
            className="bg-[#7E22CE] text-[#fff] py-2 px-3 rounded-[8px] font-[500]  cursor-pointer my-4"
          // onSubmit={(e) => e.preventDefault()}
          >
            Add Category
          </button>
        </form>
      </div>
    </>
  );
}
