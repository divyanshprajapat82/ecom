"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function NavBar({ navAction }) {
  // setNavAction
  const [scrollChange, setScrollChange] = useState(false);

  const [faqNav, setFaqNav] = useState(null);

  const scrollBar = () => {
    // console.log(scrollY);

    if (scrollY >= 182) {
      setScrollChange(true);
    } else {
      setScrollChange(false);
    }
  };
  useEffect(() => {

    window.addEventListener("scroll", scrollBar);
  }, [])

  const [megaMenu, setMegaMenu] = useState([]);

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;

  let getMegaMenu = () => {
    axios.get(`${apiBaseUrl}home/mega-menu`)
      .then((res) => res.data)
      .then((finalRes) => {
        console.log("MegaMenu API response:", finalRes.data);
        setMegaMenu(finalRes.data)
      })
  }

  useEffect(() => {
    getMegaMenu()
  }, [])

  return (
    <>
      <div
        className={`${scrollChange ? "top-0" : "top-[-100%]"
          } sticky bg-[#ffffffe5] shadow-md z-50 sm:block hidden transition-all duration-500`}
      >
        <div className="md:max-w-[1100px] h-[60px] m-auto px-2">
          <div className="flex justify-center relative h-full">
            <ul className="flex gap-5 h-full">
              {scrollChange && (
                <Link href="/" className="md:block hidden">
                  <li className="h-full flex items-center">
                    <img src="/images/logo.png" width={120} alt="" />
                  </li>
                </Link>
              )}
              {/* <Link href="" className=""> */}
              <li className="h-full flex items-center">
                <span className="uppercase text-[15px] hover:text-[#C09578]">
                  Home
                </span>
              </li>
              {/* </Link> */}
              {/* <Link href=""> */}
              <div className="flex gap-5 h-full">
                {megaMenu.map((items, index) => (
                  <li className=" h-full flex items-center group">
                    <span className="uppercase text-[15px] flex items-center gap-1">
                      {items.categoryName}
                      <IoIosArrowDown className="text-[12px]" />
                    </span>
                    <div className="absolute hidden border-t border-[#00000024] group-hover:block px-4 py-6 bg-white top-[100%]">
                      <div className="flex gap-6">
                        {items.subCategories.map((subCategory, index) => (
                          <ul className="flex flex-col gap-1">
                            <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                              {subCategory.subCategoryName}
                            </h1>
                            {subCategory.subSubCategories.map((subSubCategory, index) => (
                              // <></>
                              <Link href={`/product-listing/${subSubCategory.slug}`} >
                                <li className="text-[14px] text-[#555] hover:text-[#C09578]" >
                                  {subSubCategory.subSubCategoryName}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
                {/* <li className=" h-full flex items-center group">
                  <span className="uppercase text-[15px] flex items-center gap-1">
                    Sofa
                    <IoIosArrowDown className="text-[12px]" />
                  </span>
                </li> */}
                {/* <li className=" h-full flex items-center group">
                  <span className="uppercase text-[15px] flex items-center gap-1">
                    Sofa
                    <IoIosArrowDown className="text-[12px]" />
                  </span>
                </li> */}
              </div>
              {/* <li className=" h-full flex items-center group">
                <span className="uppercase text-[15px] flex items-center gap-1">
                  {megaMenu[0]?.categoryName || "Loading..."}
                  <IoIosArrowDown className="text-[12px]" />
                </span>
                <div className="absolute hidden border-t border-[#00000024] group-hover:block px-4 py-6 bg-white top-[100%]">
                  <div className="flex gap-6">
                    <ul className="flex flex-col gap-1">
                      {megaMenu}
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Tables
                      </h1>
                      <Link href="/product-listing">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Side and End Tables
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Nest Of Tables
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Console Table
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Coffee Table Sets
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Coffee Tables
                        </li>
                      </Link>
                    </ul>
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Living Storage
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Prayer Units
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Display Unit
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Shoe Racks
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Chest Of Drawers
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Cabinets and
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Sideboard
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Bookshelves
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Tv Units
                        </li>
                      </Link>
                    </ul>
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Mirrors
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Wooden Mirrors
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li> */}
              {/* </Link> */}
              {/* <Link href=""> */}
              {/* <li className="h-full flex items-center group">
                <span className="uppercase text-[15px] flex items-center gap-1">
                  Sofa
                  <IoIosArrowDown className="text-[12px]" />
                </span>
                <div className="absolute hidden border-t border-[#00000024] group-hover:block px-4 py-6 bg-white top-[100%]">
                  <div className="flex gap-6">
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Sofa Cum Bed
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Wooden Sofa Cum Bed
                        </li>
                      </Link>
                    </ul>
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Sofa Sets
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          L Shape Sofa
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          1 Seater Sofa
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          2 Seater Sofa
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          3 Seater Sofa
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Wooden Sofa Sets
                        </li>
                      </Link>
                    </ul>
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Swing Jhula
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Wooden Jhula
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li> */}
              {/* </Link> */}
              {/* <Link href=""> */}
              <li className="h-full flex items-center group">
                <span className="uppercase text-[15px] flex items-center gap-1">
                  Pages
                  <IoIosArrowDown className="text-[12px]" />
                </span>
                <div className="absolute hidden border-t border-[#00000024] group-hover:block px-4 py-6 bg-white top-[100%]">
                  <div className="flex gap-6">
                    <ul className="flex flex-col gap-1">
                      <Link href="/about-us">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          About Us
                        </li>
                      </Link>
                      <Link href="/cart">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Cart
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Checkout
                        </li>
                      </Link>
                      <Link href="/faq">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Frequently Questions
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              {/* </Link> */}
              <Link href="/contect-us">
                <li className="h-full flex items-center">
                  <span className="uppercase text-[15px] hover:text-[#C09578]">
                    Contact Us
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <hr className="border-[#00000024]" />
      </div>

      <div
        className={`fixed ${navAction
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }
          transition-all duration-300 top-0 w-full h-[100vh] z-50`}
      >
        <div
          onClick={() => setNavAction(false)}
          className="absolute w-full h-full bg-[#00000034]"
        ></div>
        <div
          className={`${navAction ? "left-0" : "left-[-1000px]"
            } absolute  max-w-[300px] w-full h-full bg-[#fff] p-4 transition-all duration-300 overflow-scroll`}
        >
          <div className="flex justify-end">
            <IoClose
              onClick={() => setNavAction(false)}
              className="border p-1 text-[25px] rounded-[50%] border-[#00000024] cursor-pointer"
            />
          </div>
          <div className="text-[14px] text-center mt-4">
            <p>Contact us 24/7 : +91-9781234560</p>
            <p className="mt-2">furniture@gmail.com</p>
          </div>
          <div className="mt-4">
            <ul className="text-[#0000009f] gap-5 h-full">
              <Link href="" className="">
                <li className="h-full py-2 flex items-center">
                  <span className=" text-[15px] hover:text-[#C09578]">
                    Home
                  </span>
                </li>
                <hr className="border-[#00000024]" />
              </Link>
              {/* <Link href=""> */}
              <li
                onClick={() => setFaqNav(faqNav == 1 ? null : 1)}
                className="h-full w-full py-2  group"
              >
                <span className=" text-[15px] w-full flex justify-between items-center gap-1">
                  Living
                  <IoIosArrowDown
                    className={`${faqNav == 1 ? " rotate-180" : "rotate-0"
                      } text-[12px] transition-all duration-500`}
                  />
                </span>
                <div
                  className={`${faqNav == 1
                    ? "max-h-[500px] py-2 mt-2 border-t"
                    : "max-h-0 p-0"
                    } border-[#00000024] px-4 bg-white overflow-hidden transition-all duration-300 ease-in-out`}
                >
                  <div className="flex flex-col gap-6">
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Tables
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Side and End Tables
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Nest Of Tables
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Console Table
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Coffee Table Sets
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Coffee Tables
                        </li>
                      </Link>
                    </ul>
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Living Storage
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Prayer Units
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Display Unit
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Shoe Racks
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Chest Of Drawers
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Cabinets and
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Sideboard
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Bookshelves
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Tv Units
                        </li>
                      </Link>
                    </ul>
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Mirrors
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Wooden Mirrors
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              {/* </Link> */}
              <hr className="border-[#00000024]" />
              {/* <Link href=""> */}
              <li
                onClick={() => setFaqNav(faqNav == 2 ? null : 2)}
                className="h-full py-2 w-full  group"
              >
                <span className=" text-[15px] w-full flex justify-between items-center gap-1">
                  Sofa
                  <IoIosArrowDown
                    className={`${faqNav == 2 ? " rotate-180" : "rotate-0"
                      } text-[12px] transition-all duration-500`}
                  />
                </span>
                <div
                  className={`${faqNav == 2
                    ? "max-h-[500px] py-2 mt-2 border-t"
                    : "max-h-0 p-0"
                    } border-[#00000024] px-4 bg-white overflow-hidden transition-all duration-300 ease-in-out`}
                >
                  <div className="flex flex-col gap-6">
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Sofa Cum Bed
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Wooden Sofa Cum Bed
                        </li>
                      </Link>
                    </ul>
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Sofa Sets
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          L Shape Sofa
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          1 Seater Sofa
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          2 Seater Sofa
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          3 Seater Sofa
                        </li>
                      </Link>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Wooden Sofa Sets
                        </li>
                      </Link>
                    </ul>
                    <ul className="flex flex-col gap-1">
                      <h1 className="text-[15px] mb-2 uppercase hover:text-[#C09578] font-bold">
                        Swing Jhula
                      </h1>
                      <Link href="">
                        <li className="text-[14px] text-[#555] hover:text-[#C09578]">
                          Wooden Jhula
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              {/* </Link> */}
              <hr className="border-[#00000024]" />
              {/* <Link href=""> */}
              <li
                onClick={() => setFaqNav(faqNav == 3 ? null : 3)}
                className="h-full py-2 w-full group"
              >
                <span className=" text-[15px]  w-full flex justify-between items-center gap-1">
                  Pages
                  <IoIosArrowDown
                    className={`${faqNav == 3 ? " rotate-180" : "rotate-0"
                      } text-[12px] transition-all duration-500`}
                  />
                </span>
                <div
                  className={`${faqNav == 3
                    ? "max-h-[500px] py-2 mt-2 border-t"
                    : "max-h-0 p-0"
                    } border-[#00000024] px-4 bg-white overflow-hidden transition-all duration-300 ease-in-out`}
                >
                  <div className="flex gap-6">
                    <ul className="flex flex-col gap-1 w-full">
                      <Link href="/about-us">
                        <li className="text-[14px] py-1 text-[#555] hover:text-[#C09578]">
                          About Us
                        </li>
                      </Link>
                      <hr className="border-[#00000024]" />
                      <Link href="">
                        <li className="text-[14px] py-1 text-[#555] hover:text-[#C09578]">
                          Cart
                        </li>
                      </Link>
                      <hr className="border-[#00000024]" />
                      <Link href="">
                        <li className="text-[14px] py-1 text-[#555] hover:text-[#C09578]">
                          Checkout
                        </li>
                      </Link>
                      <hr className="border-[#00000024]" />
                      <Link href="">
                        <li className="text-[14px] py-1 text-[#555] hover:text-[#C09578]">
                          Frequently Questions
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              {/* </Link> */}
              <hr className="border-[#00000024]" />
              <Link href="">
                <li className="h-full py-2 flex items-center">
                  <span className=" text-[15px] hover:text-[#C09578]">
                    Login / Register
                  </span>
                </li>
              </Link>
              <hr className="border-[#00000024]" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
