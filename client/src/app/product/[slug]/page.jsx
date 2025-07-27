"use client"
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useParams } from 'next/navigation';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`absolute right-[0px] top-[22px] bg-[#F2F2F2] p-2 text-[#000] text-[15px] shadow-md rounded-[6px] cursor-pointer z-50 hidden group-hover:block`}
            onClick={onClick}
        >
            <IoIosArrowForward />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`absolute left-[0px] top-[22px] bg-[#F2F2F2] p-2 text-[#000] text-[15px] shadow-md rounded-[6px] cursor-pointer z-50 hidden group-hover:block`}
            onClick={onClick}
        >
            <IoIosArrowBack />
        </div>
    );
}

export default function page() {

    let { slug } = useParams()
    // console.log(slug);   


    var settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => (
            <div
                style={{
                    // backgroundColor: "#ddd",
                    borderRadius: "10px",
                    padding: "10px",
                    bottom: "0",
                }}
            >
                <ul style={{ margin: "0px" }} className="">
                    {" "}
                    {dots}{" "}
                </ul>
            </div>
        ),
    };

    return (
        <>
            <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center border-b border-[#00000025]">
                <h1 className="text-[40px] font-bold">Evan Coffee Table</h1>
                <p>
                    <Link href="/">Home</Link>
                    <span className="text-[#c7a473]"> {">"} </span>
                    <Link href="/">Coffee Tables</Link>
                    <span className="text-[#c7a473]"> {">"} Evan Coffee Table</span>
                </p>
            </div>

            <div className="md:max-w-[1100px] m-auto py-8 px-2 border-b border-[#00000025]">
                <div className='flex justify-between'>
                    <div className='w-[49%]'>
                        <img src="/images/Shoe-Rack_.jpg" alt="" />
                        <hr className='border-t border-[#00000027] my-4' />
                        <div>
                            <Slider {...settings} className='px-6 group'>
                                <div >
                                    <img src="/images/Shoe-Rack_.jpg" width={110} alt="" />
                                </div>
                                <div>
                                    <img src="/images/Shoe-Rack_.jpg" width={110} alt="" />
                                </div>
                                <div>
                                    <img src="/images/Shoe-Rack_.jpg" width={110} alt="" />
                                </div>
                                <div>
                                    <img src="/images/Shoe-Rack_.jpg" width={110} alt="" />
                                </div>
                                <div>
                                    <img src="/images/Shoe-Rack_.jpg" width={110} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='w-[49%]'>
                        <h1 className='text-[30px] font-bold'>Evan Coffee Table</h1>
                        <div className='flex gap-3 my-2'>
                            <h4 className='line-through text-[18px] text-[#00000052]'>Rs. 3,600</h4>
                            <h4 className='text-[18px] text-[#C09578] font-bold'>Rs. 2,600</h4>
                        </div>
                        <p className='text-[#000000b7]'>The Evan Coffee table has stools that can be encased under the table.</p>
                        <hr className='border-t border-[#00000035] my-5' />
                        <button className='bg-[#C09578] text-[#fff] w-[200px] px-2 py-2 rounded-[4px] hover:bg-[#a8836b] cursor-pointer'>Add To Cart</button>
                        <div className='flex gap-2 my-4'>
                            <div className='p-4 bg-[#000] border border-[#000] rounded-full cursor-pointer'></div>
                            <div className='p-4 bg-[#fff] border border-[#000] rounded-full cursor-pointer'></div>
                            <div className='p-4 bg-yellow-200 border border-[#000] rounded-full cursor-pointer'></div>
                        </div>
                        <h4>Category : Coffee Tables</h4>
                        <h4 className='my-2'>Color : Faded Ochre</h4>
                        <h4>Material : Marandi Wood</h4>
                    </div>
                </div>
                <div className='mt-8'>
                    <h1 className='text-[30px] text-[#C09578] font-bold'>Description</h1>
                    <hr className='border-t border-[#00000035] my-4' />
                    <p>The Evan Coffee table has stools that can be encased under the table. The Stools are cushioned to keep you comfortable, and since they can be put away under the table, they do not take up much space. This table is made of Sheesham, and the design is practical and functional. It can seamlessly blend in with any décor style owing to its simple yet elegant design.</p>
                </div>
            </div>

        </>
    )
}
