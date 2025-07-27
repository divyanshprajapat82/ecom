"use client";

import { fetchCart } from "@/app/slice/cartSlice";
import { featured, newArrivals, onSale } from "@/assets/assets";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function HomeProduct() {
  const [homeProductClick, setHomeProductClick] = useState(1);
  // const [products, setProducts] = useState([]);

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;
  let [sliderstaticPath, setsliderstaticPath] = useState('')
  let [homeProductData, setHomeProductData] = useState([])

  let shomeProductDetails = () => {
    // alert("hi")
    console.log(apiBaseUrl)
    axios.get(`http://localhost:8000/web/home/home-product`, {
      params: {
        homeProductClick
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        setHomeProductData(finalRes.data)
        console.log(finalRes.data)
        // setsliderData(finalRes.data)
        setsliderstaticPath(finalRes.staticPath)
      })

  }


  useEffect(() => {
    shomeProductDetails()
  }, [homeProductClick])

  return (
    <>
      <div className="md:max-w-[1100px] m-auto p-2 mt-8">
        <div className="flex flex-col items-center">
          <div className="flex sm:flex-row flex-col gap-y-1 text-center">
            <div
              onClick={() => setHomeProductClick(1)}
              className={`${homeProductClick == 1
                ? " border-[#C09578] text-[#C09578]"
                : "border-[#0000003c]"
                } bg-white px-6 py-3 text-[20px] font-bold border-[2px] sm:border-r-[1px] border-r-[2px] hover:text-[#C09578] transition-all duration-200 cursor-pointer`}
            >
              Featured
            </div>
            <div
              onClick={() => setHomeProductClick(2)}
              className={`${homeProductClick == 2
                ? " border-[#C09578] text-[#C09578]"
                : "border-[#0000003c]"
                } bg-white px-6 py-3 text-[20px] font-bold  sm:border-r-[1px] border-r-[2px] sm:border-l-[1px] border-l-[2px] border-[2px] border-[#0000003c]  hover:text-[#C09578] transition-all duration-200 cursor-pointer`}
            >
              New Arrivals
            </div>
            <div
              onClick={() => setHomeProductClick(3)}
              className={`${homeProductClick == 3
                ? " border-[#C09578] text-[#C09578]"
                : "border-[#0000003c]"
                } bg-white px-6 py-3 text-[20px] font-bold border-r-[2px] sm:border-l-[1px] border-l-[2px] border-[2px] border-[#0000003c]  hover:text-[#C09578] transition-all duration-200 cursor-pointer`}
            >
              Onsale
            </div>
          </div>
          {homeProductData.length >= 1 ?
            <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 mt-4">
              {
                homeProductData.map((item, index) => (
                  // <div
                  //   key={index}
                  //   className="shadow-md sm:max-w-[250px] max-w-[350px]"
                  // >
                  //   <Link href={`/product/${item.slug}`}>
                  //     <div className="cursor-pointer max-h-[250px] overflow-hidden">
                  //       <img src={sliderstaticPath + item.productImage} alt="" />
                  //     </div>
                  //   </Link>
                  //   <div className="bg-[#fff] p-4 text-center">
                  //     <p className="text-[15px] text-[#00000098]">{item.parentCategory.categoryName}</p>
                  //     <h2 className="font-bold mt-3 text-[15px] sm:text-[16px] hover:text-[#C09578] cursor-pointer transition-all duration-200">
                  //       {item.productName}
                  //     </h2>
                  //     <hr className="mx-8 border-[#0000002e] mt-3" />
                  //     <div className="flex justify-center gap-2 mt-3">
                  //       <h2 className="line-through text-[#000000a5]">
                  //         {item.productActualPrice}
                  //       </h2>
                  //       <h2 className="font-bold text-[#C09578]">{item.productSalePrice}</h2>
                  //     </div>
                  //     <div className="flex justify-center gap-1 mt-3">
                  //       <button className="p-2 text-[20px] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                  //         <FaRegHeart />
                  //       </button>
                  //       <button className="p-2 text-[#000000a5] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                  //         Add To Cart
                  //       </button>
                  //     </div>
                  //   </div>
                  // </div>
                  <ProductItems item={item} index={index} sliderstaticPath={sliderstaticPath} />
                ))}
            </div>
            :
            "No Data"
          }

          {/* )} */}
          {/* {homeProductClick == 2 && (
            <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 mt-4">
              {newArrivals.map((item, index) => (
                <div
                  key={index}
                  className="shadow-md sm:max-w-[250px] max-w-[350px]"
                >
                  <div className="cursor-pointer">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="bg-[#fff] p-4 text-center">
                    <p className="text-[15px] text-[#00000098]">{item.cat}</p>
                    <h2 className="font-bold mt-3 text-[15px] sm:text-[16px] hover:text-[#C09578] cursor-pointer transition-all duration-200">
                      {item.title}
                    </h2>
                    <hr className="mx-8 border-[#0000002e] mt-3" />
                    <div className="flex justify-center gap-2 mt-3">
                      <h2 className="line-through text-[#000000a5]">
                        {item.cutPrice}
                      </h2>
                      <h2 className="font-bold text-[#C09578]">{item.price}</h2>
                    </div>
                    <div className="flex justify-center gap-1 mt-3">
                      <button className="p-2 text-[20px] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                        <FaRegHeart />
                      </button>
                      <button className="p-2 text-[#000000a5] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {homeProductClick == 3 && (
            <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 mt-4">
              {onSale.map((item, index) => (
                <div
                  key={index}
                  className="shadow-md sm:max-w-[250px] max-w-[350px]"
                >
                  <div className="cursor-pointer">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="bg-[#fff] p-4 text-center">
                    <p className="text-[15px] text-[#00000098]">{item.cat}</p>
                    <h2 className="font-bold mt-3 text-[15px] sm:text-[16px] hover:text-[#C09578] cursor-pointer transition-all duration-200">
                      {item.title}
                    </h2>
                    <hr className="mx-8 border-[#0000002e] mt-3" />
                    <div className="flex justify-center gap-2 mt-3">
                      <h2 className="line-through text-[#000000a5]">
                        {item.cutPrice}
                      </h2>
                      <h2 className="font-bold text-[#C09578]">{item.price}</h2>
                    </div>
                    <div className="flex justify-center gap-1 mt-3">
                      <button className="p-2 text-[20px] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                        <FaRegHeart />
                      </button>
                      <button className="p-2 text-[#000000a5] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div >
    </>
  );
}

export function ProductItems({ item, sliderstaticPath }) {
  let user = useSelector((store) => store.login.user)
  let token = useSelector((store) => store.login.token)
  let dispatch = useDispatch()
  console.log(item);

  const [color, setColor] = useState(item.productColor[0]._id)

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;


  let addToCart = () => {
    if (user) {
      let obj = {
        id: item._id,
        image: item.productImage,
        price: item.productSalePrice,
        qty: 1,
        title: item.productName,
        color
      }

      axios.post(`${apiBaseUrl}cart/add-to-cart`, obj, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => res.data)
        .then((finalRes) => {
          console.log(finalRes);
          if (finalRes.status) {
            dispatch(fetchCart())
            console.log(finalRes.msg);
          } else {
            console.log(finalRes.msg);

          }
        })


    } else {
      console.log("Please Login");

    }
  }

  useEffect(() => {
    addToCart()
  }, [])

  return (
    <div
      key={item._id}
      className="shadow-md sm:max-w-[250px] max-w-[350px]"
    >
      <Link href={`/product/${item.slug}`}>
        <div className="cursor-pointer max-h-[250px] overflow-hidden">
          <img src={sliderstaticPath + item.productImage} alt="" />
        </div>
      </Link>
      <div className="bg-[#fff] p-4 text-center">
        <p className="text-[15px] text-[#00000098]">{item.parentCategory.categoryName}</p>
        <h2 className="font-bold mt-3 text-[15px] sm:text-[16px] hover:text-[#C09578] cursor-pointer transition-all duration-200">
          {item.productName}
        </h2>
        <hr className="mx-8 border-[#0000002e] mt-3" />
        <div className="flex justify-center gap-2 mt-3">
          <h2 className="line-through text-[#000000a5]">
            $ {item.productActualPrice}
          </h2>
          <h2 className="font-bold text-[#C09578]">$ {item.productSalePrice}</h2>
        </div>
        <div className="flex justify-center gap-1 mt-3">
          <select onChange={(e) => setColor(e.target.value)} name="" id="" className="cursor-pointer transition-all duration-200">
            {item.productColor.map((colore) => (
              // <option value="">{items.colorCode}</option>
              <option value={colore._id} className="px-2" style={{ backgroundColor: `${colore.colorCode}` }} >{colore.colorCode}</option>
            ))}
          </select>
          <button className="p-2 text-[20px] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
            <FaRegHeart />
          </button>
          <button onClick={addToCart} className="p-2 text-[#000000a5] bg-[#F1F1F1] hover:bg-[#C09578] cursor-pointer transition-all duration-200">
            Add To Cart
          </button>
        </div>
      </div>
    </div >
  )
}
