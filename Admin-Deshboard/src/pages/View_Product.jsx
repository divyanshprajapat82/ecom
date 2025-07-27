import React, { useEffect, useState } from "react";
import { FaEdit, FaFilter } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import NavBar from "../common/NavBar";
import axios from "axios";
import { Link } from "react-router";

export function ProductDescription({ description }) {
  return (
    <div
      className="prose" // optional: use Tailwind Typography plugin for nice styling
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}

export default function View_Product() {
  const center = "Product";
  const last = "Product Items";

  const [productList, setProductList] = useState([])
  const [imagePath, setImagePath] = useState([])
  const [openModel, setOpenModel] = useState(false)
  const [openDescription, setOpenDescription] = useState(false)
  const [modelList, setModelList] = useState([])

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let getProduct = () => {
    axios.get(`${apiBaseUrl}product/view`)
      .then((res) => res.data)
      .then((finalData) => {
        // console.log(finalData.data);
        setProductList(finalData.data)
        setImagePath(finalData.staticPath)
      })
  }

  let getSingleProduct = (id) => {
    axios.get(`${apiBaseUrl}product/view/${id}`)
      .then((res) => res.data)
      .then((finalData) => {
        console.log(finalData.data);
        setModelList(finalData.data)
        // setImagePath(finalData.staticPath)
      })
  }

  useEffect(() => {
    getProduct()
    getSingleProduct()
  }, [])


  return (
    <>
      {openModel &&
        <div className=" fixed inset-0 z-[99999]">
          <div className="absolute w-[100%] h-[100vh] bg-[#00000055] z-[-9999]" onClick={() => setOpenModel(false)}>
          </div>
          {modelList.map((items, index) => (
            <div className=" max-w-[800px] h-[98%] bg-[#fff] m-auto p-4 my-2 rounded-2xl overflow-y-auto z-9">
              <h1 className="text-[25px] font-bold text-center">Product Details</h1>
              <div className="flex gap-2 h-[88%]">
                <div className="max-w-[60%] max-h-full">
                  <div className="w-full">
                    <div className="flex gap-4">
                      <div className="max-w-[200px] max-h-[350px] overflow-hidden text-center border-r border-[#0000004a] pr-4">
                        <label htmlFor="" className="w-full font-bold text-center mb-2">Product Image</label>
                        <div className="rounded-2xl overflow-hidden mt-2">
                          <img
                            // src="/images/productImg.png"
                            src={imagePath + items.productImage}

                            alt="" />
                        </div>
                      </div>
                      <div className="max-w-[200px] max-h-[350px] overflow-hidden text-center pr-4">
                        <label htmlFor="" className="w-full font-bold text-center mb-2">Back Image</label>
                        <div className="rounded-2xl overflow-hidden mt-2">
                          <img
                            //  src="/images/productImg.png"
                            src={imagePath + items.productBackImage}

                            alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" pr-4 mt-4">
                    <label htmlFor="" className="font-bold text-center">Back Image</label>
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {items.productGalleryImage.map((item, index) => (
                        <div className="max-w-[100px] max-h-[300px] rounded-2xl overflow-hidden">
                          <img
                            // src="/images/productImg.png"
                            src={imagePath + item}
                            alt="" />
                        </div>
                      ))}
                      {/* <div className="max-w-[100px] max-h-[300px] rounded-2xl overflow-hidden">
                        <img src="/images/productImg.png" alt="" />
                      </div>
                      <div className="max-w-[100px] max-h-[300px] rounded-2xl overflow-hidden">
                        <img src="/images/productImg.png" alt="" />
                      </div>
                      <div className="max-w-[100px] max-h-[300px] rounded-2xl overflow-hidden">
                        <img src="/images/productImg.png" alt="" />
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div className=" border-r border-[1px] border-[#0000004a] h-full"></div> */}
                <hr className="border-[1px] border-r border-[#00000023] h-[100%] ml-[-10px]" />
                <div className="max-w-[40%]">
                  <div className="mt-4 flex flex-col gap-2">
                    <p>
                      <b>Product Name -</b> {" "}
                      {items.productName}
                    </p>
                    <p>
                      <b>Category Name -</b> {" "}
                      {items.parentCategory.categoryName}
                    </p>
                    <p>
                      <b>Sub Category Name -</b> {" "}
                      {items.subCategory.subCategoryName}
                    </p>
                    <p>
                      <b>Sub Sub Category Name -</b> {" "}
                      {items.subSubCategory.subSubCategoryName}
                    </p>
                    <p className="flex flex-wrap gap-x-1">
                      <b>Material Name -</b> {" "}
                      {items.productMaterial.map((item, index) => (
                        <span className=" ">{item.materialName}</span>
                      ))}
                    </p>
                    <p className="flex items-center flex-wrap gap-x-2">
                      <b>Color Name -</b> {" "}
                      {items.productColor.map((item, index) => (
                        // <span className="flex gap-2">{item.colorName}</span>
                        <span className="w-[25px] h-[25px] border border-[#0000003a] rounded-full" style={{ backgroundColor: item.colorCode }}></span>
                      ))}
                    </p>
                    <p>
                      <b>Is Product Best Selling -</b> {" "}
                      {items.productBestSelling == true ? "Yes" : "No"}
                    </p>
                    <p>
                      <b>Is Product Top Rated -</b> {" "}
                      {items.productTopRated == true ? "Yes" : "No"}
                    </p>
                    <p>
                      <b>Is Product Upsell -</b> {" "}
                      {items.productUpsell == true ? "Yes" : "No"}
                    </p>
                    <p>
                      <b>Actual Price -</b> {" "}
                      {items.productActualPrice}
                    </p>
                    <p>
                      <b>Sale Price -</b> {" "}
                      {items.productSalePrice}
                    </p>
                    <p>
                      <b>Product Stocks -</b> {" "}
                      {items.productStocks}
                    </p>
                    {/* <p>
                      <b>Color Name -</b> {" "}
                      {items.productColor.map((item, index) => (
                        <span>{item.colorName}</span>
                      ))}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
      {openDescription &&
        <div className="fixed inset-0 z-[99999]">
          <div className="absolute w-full h-full bg-[#00000055] " onClick={() => setOpenDescription(false)}>
          </div>
          <h1>Product Description</h1>
          {modelList.map((items, index) => (
            <div className="flex justify-center w-auto h-[100vh] items-center">
              <div className=" max-w-[800px]  bg-[#fff] m-auto p-4 my-2 rounded-2xl overflow-y-auto z-9">
                <h1 className="text-[25px] font-bold text-center mb-4">Product Description</h1>
                <ProductDescription description={items.productDescription} />
              </div>
            </div>
          ))}
        </div>
      }

      <NavBar center={center} last={last} />
      <div className="mb-4 max-w-[1000px] m-auto mt-4 overflow-x-scroll">
        <div className="bg-[#F1F5F9] p-4 py-5 flex items-center justify-between flex-wrap">
          <h1 className="text-[25px] font-[600]">Product Items</h1>
        </div>
        <table className="w-full text-left overflow-hidden table-auto">
          <thead className=" overflow-hidden">
            <tr className=" bg-[#F9FAFB] text-[15px]">
              <th scope="col" className="p-3 w-0">
                Delete
              </th>
              <th scope="col" className="p-3 ">
                S. No.
              </th>
              <th scope="col" className="p-3 ">
                Product Name
              </th>
              <th scope="col" className="p-3 w-[20%]">
                Description
              </th>
              <th scope="col" className="p-3">
                Short Description
              </th>
              <th scope="col" className="p-3 ">
                Thumbnails
              </th>
              <th scope="col" className="p-3 w-[6%]">
                Action
              </th>
              <th scope="col" className="p-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {productList.length >= 1 ?
              productList.map((items, index) => (
                <tr key={index} className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4" >
                  <th className="p-3">
                    <input type="checkbox" />
                  </th>
                  <td
                    scope="row"
                    className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </td>
                  <td className="p-4">{items.productName}</td>
                  <td className="p-4">
                    {/* <div className="line-clamp-1">{items.productDescription}</div> */}
                    <div className="line-clamp-1">

                      <ProductDescription description={items.productDescription} />
                    </div>
                    <div className="text-[blue]" onClick={() => { setOpenDescription(true), getSingleProduct(items._id) }}>Read More</div>
                  </td>
                  <td className="p-4 overflow-hidden">
                    <div className="line-clamp-1">Lorem ipsum dolor...</div>
                    <div className="text-[blue]" onClick={() => { setOpenModel(true), getSingleProduct(items._id) }}>Read More</div>
                  </td>
                  <td className="p-4">
                    <img
                      // src="images/productImg.png"
                      src={imagePath + items.productImage}
                      className="w-[50px] h-[50px] overflow-hidden object-cover rounded-[5px]"
                      alt=""
                    />
                  </td>
                  <td className="p-4">
                    {" "}
                    <div className="flex items-center gap-2">
                      <RiDeleteBinLine className="text-[red]" /> |{" "}
                      <Link to={`/add_product/${items._id}`}>
                        <FaEdit className="text-[#ffe100]" />
                      </Link>
                    </div>
                  </td>

                  <td className="p-4">Active</td>
                </tr>
              ))
              :
              <tr>
                <th className="text-center">
                  No data
                </th>
              </tr>
            }

            {/* <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <td
                scope="row"
                className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </td>
              <td className="p-4">Men's</td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <img
                  src="images/productImg.png"
                  className="w-[50px] h-[50px] overflow-hidden object-cover rounded-[5px]"
                  alt=""
                />
              </td>
              <td className="p-4">
                {" "}
                <div className="flex items-center gap-2">
                  <RiDeleteBinLine className="text-[red]" /> |{" "}
                  <FaEdit className="text-[#ffe100]" />
                </div>
              </td>

              <td className="p-4">Active</td>
            </tr>
            <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <td
                scope="row"
                className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </td>
              <td className="p-4">Men's</td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <img
                  src="images/productImg.png"
                  className="w-[50px] h-[50px] overflow-hidden object-cover rounded-[5px]"
                  alt=""
                />
              </td>
              <td className="p-4">
                {" "}
                <div className="flex items-center gap-2">
                  <RiDeleteBinLine className="text-[red]" /> |{" "}
                  <FaEdit className="text-[#ffe100]" />
                </div>
              </td>

              <td className="p-4">Active</td>
            </tr>
            <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <td
                scope="row"
                className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                4
              </td>
              <td className="p-4">Men's</td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <div className="line-clamp-1">Lorem ipsum dolor...</div>
                <div className="text-[blue]">Read More</div>
              </td>
              <td className="p-4">
                <img
                  src="images/productImg.png"
                  className="w-[50px] h-[50px] overflow-hidden object-cover rounded-[5px]"
                  alt=""
                />
              </td>
              <td className="p-4">
                {" "}
                <div className="flex items-center gap-2">
                  <RiDeleteBinLine className="text-[red]" /> |{" "}
                  <FaEdit className="text-[#ffe100]" />
                </div>
              </td>

              <td className="p-4">Active</td>
            </tr> */}
          </tbody>
        </table>
      </div >
    </>
  );
}
