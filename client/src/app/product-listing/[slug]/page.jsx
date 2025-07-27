"use client";

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

export default function page() {
  const [categoryData, setCategoryData] = useState([]);
  const [getSingleProduct, setGetSingleProduct] = useState([]);
  const [staticPath, setstaticPath] = useState("");

  const categoryItems = () => {
    axios
      .get(`https://wscubetech.co/ecommerce-api/categories.php`)
      .then((res) => res.data)
      .then((finalData) => {
        setCategoryData(finalData.data);
      });
  };

  let { slug } = useParams()

  console.log("slug :-", slug);

  useEffect(() => {
    categoryItems();
  }, []);

  useEffect(() => {
    if (slug) {
      axios.get(`http://localhost:8000/web/home/menu-data/${slug}`)
        .then((res) => res.data)
        .then((finalData) => {
          console.log("home/menu-data :-", finalData);
          setGetSingleProduct(finalData.data)
          setstaticPath(finalData.staticPath)
        })
    }
  }, [])



  return (
    <>
      <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center border-b border-[#00000025]">
        <h1 className="text-[40px] font-bold">Product Listing</h1>
        <p>
          <Link href="/">Home</Link>
          <span className="text-[#c7a473]"> {">"} Product Listing </span>
        </p>
      </div>
      <div className="md:max-w-[1100px] m-auto py-8 px-2 border-b border-[#00000025]">
        <div className="flex gap-2">
          <div className="w-[250px] border-b px-2 border-[#00000025]">
            <div className="h-[400px] overflow-y-scroll mb-2">
              <ul>
                <h1 className="text-[22px] font-bold mb-4">Categories</h1>
                {categoryData.map((item, index) => (
                  <li key={index} className="text-[18px] mb-1">
                    <input type="checkbox" className="mr-1" />
                    <span className="text-[#666]"> {item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[400px] overflow-y-scroll">
              <ul>
                <h1 className="text-[22px] font-bold mb-4">Material</h1>
                {categoryData.map((item, index) => (
                  <li key={index} className="text-[18px] mb-1">
                    <input type="checkbox" className="mr-1" />
                    <span className="text-[#666]"> {item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {getSingleProduct.map((items, index) => (
              <div
                key={index}
                className="shadow-md sm:max-w-[250px] max-w-[350px] max-h-[400px]"
              >
                <div className="h-[200px]">
                  <Link href={``}>
                    <div className="cursor-pointer max-h-[200px] overflow-hidden">
                      <img src={staticPath + items.productImage} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="bg-[#fff] p-4 text-center">
                  <p className="text-[15px] text-[#00000098]">{items.parentCategory.categoryName}</p>
                  <h2 className="font-bold mt-3 text-[15px] sm:text-[16px] hover:text-[#C09578] cursor-pointer transition-all duration-200">
                    {items.productName}
                  </h2>
                  <hr className="mx-8 border-[#0000002e] mt-3" />
                  <div className="flex justify-center gap-2 mt-3">
                    <h2 className="line-through text-[#000000a5]">
                      $ {items.productActualPrice}
                    </h2>
                    <h2 className="font-bold text-[#C09578]">$ {items.productSalePrice}</h2>
                  </div>
                  <div className="flex justify-center gap-1 mt-3">
                    {/* <select onChange={(e) => setColor(e.target.value)} name="" id="" className="cursor-pointer transition-all duration-200">
                    {item.productColor.map((colore) => (
                      // <option value="">{items.colorCode}</option>
                      <option value={colore._id} className="px-2" >{colore.colorCode}</option>
                    ))}
                  </select> */}
                    <button className="p-2 text-[20px] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                      <FaRegHeart />
                    </button>
                    <button className="p-2 text-[#000000a5] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div >
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
