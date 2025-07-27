"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'

export default function page() {
    let cart = useSelector((store) => store.cart.cart)

    let [countryBillingButton, setcountryBillingButton] = useState(0)
    let [countryBillingTitle, setcountryBillingTitle] = useState("Select Country")
    const [paymentMethod, setPaymentMethod] = useState('online');

    let totle = cart.reduce((totle, obj) => totle + (obj.price * obj.qty), 0)
    let totleQty = cart.reduce((totle, obj) => totle + obj.qty, 0)

    let orderPlace = (e) => {
        e.preventDefault()
        console.log(paymentMethod);

        let shippingAddress = {
            name: "Divyansh",
            mobileNumber: "9999999999",
            billingName: "Divyansh Prajapat"
        }

        let finalCart = cart.map((items) => {
            return {
                title: items.title,
                price: items.price,
                qty: items.qty,
                colorName: items.color.colorName
            }
        })

        console.log(finalCart);
        console.log(totle);
        console.log(totleQty);


    }

    return (
        <>
            <div className="md:max-w-[1100px] m-auto ">

                <section className='max-w-full my-8' id='checkout'>
                    <div className='max-w-[1320px] lg:mx-auto mx-2' id='checkout-mid'>
                        <div className='w-full text-center' id='checkout-mid-heading'>
                            <h2 className=' lg:text-4xl sm:text-4xl text-2xl font-semibold'>Checkout</h2>
                            <div className='flex items-center justify-center gap-1 lg:my-3 sm:my-3 my-2 '>

                                <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                                <FaAngleRight className='text-[#C09578]' />
                                <Link href={'/about'} className='text-sm text-[#C09578]'> Checkout </Link >

                            </div>
                            <hr className='border-gray-200 my-5' />
                        </div>
                    </div>
                </section>

                <section className='max-w-full' id='checkout-form'>
                    {/* <div className='max-w-[1320px] lg:mx-auto mx-2  my-10' > */}
                    <div className=''>
                        <div>

                            <div className='w-full my-5'>
                                <form onSubmit={orderPlace} action="" className='w-full grid gap-5 grid-cols-[65%_auto]'>
                                    <div>
                                        <h2 className='text-base font-semibold w-full bg-black text-white p-2 uppercase'>Billing Details</h2>
                                        <div className='grid lg:grid-cols-2 sm:grid-cols-2 gap-5'>
                                            <div>
                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Name*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Billing Name*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />
                                            </div>

                                            <div>
                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>
                                                    Mobile Number*</label>
                                                <input type="tel" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Billing Email*</label>
                                                <input type="email" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />
                                            </div>
                                        </div>

                                        <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Billing Mobile Number*</label>
                                        <input type="tel" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                        <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Billing Address*</label>
                                        <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                        <div className='relative mb-2' id='country'>

                                            <button type='button' className='w-full text-left p-2 border-1 border-gray-200 rounded-sm mt-2 text-gray-600 flex items-center justify-between'
                                            // onClick={() => setcountryBillingButton(countryBillingButton === 1 ? 0 : 1)}
                                            >countryBillingTitle


                                                {
                                                    countryBillingButton == 1
                                                        ?
                                                        <RiArrowDropUpLine />
                                                        :
                                                        <RiArrowDropDownLine />
                                                }


                                            </button>
                                            <div className={`w-full border-1 h-[170px] overflow-y-scroll  border-gray-200 rounded-sm absolute top-[100%] z-99 bg-white 
                                                `}
                                            >
                                                <nav>
                                                    <ul>

                                                        {/* {
                                                            Country.map((value, index) => {
                                                                let { id, title } = value
                                                                return ( */}
                                                        <li className=' text-base py-1 hover:bg-blue-600 hover:text-white w-full p-3 '
                                                            onClick={() => {
                                                                setcountryBillingButton(0)
                                                                setcountryBillingTitle(title)
                                                            }}
                                                        >
                                                            title
                                                        </li>
                                                        {/* )
                                                            })
                                                        } */}

                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>

                                        <div className='grid lg:grid-cols-2 lg:order-1 order-1 gap-5 my-5'>
                                            <div className='lg:order-2 order-3'>
                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>State*</label>
                                                <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />



                                            </div>

                                            <div className='lg:order-3 order-2'>
                                                <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>City*</label>
                                                <input type="email" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />
                                            </div>


                                        </div>

                                        <div className={`w-full my-5`} id='diffrent-shipping'>
                                            <div className='grid lg:grid-cols-2 sm:grid-cols-2 mb-5 gap-5'>
                                                <div>
                                                    <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Shipping Name*</label>
                                                    <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />
                                                </div>
                                                <div>
                                                    <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Shipping Email*</label>
                                                    <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />
                                                </div>
                                            </div>
                                            <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Shipping Mobile Number*</label>
                                            <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                            <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Shipping Address*</label>
                                            <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />

                                            <div className='relative mb-2' id='diffrent-shipping-country'>

                                                <button type='button' className='w-full text-left p-2 border-1 border-gray-200 rounded-sm mt-2 text-gray-600 flex items-center justify-between'
                                                // onClick={() => setcountryBillingButton(countryBillingButton === 2 ? 0 : 2)}
                                                >countryBillingTitle


                                                    {/* {
                                                        countryBillingButton == 2
                                                            ?
                                                            <RiArrowDropUpLine />
                                                            :
                                                            <RiArrowDropDownLine />
                                                    } */}


                                                </button>
                                                <div className={`w-full border-1  overflow-y-scroll  border-gray-200 rounded-sm absolute top-[100%] z-99 bg-white `}>
                                                    <nav>
                                                        <ul>

                                                            {/* {
                                                                Country.map((value, index) => {
                                                                    let { id, title } = value
                                                                    return ( */}
                                                            {/* <li className=' text-base py-1 hover:bg-blue-600 hover:text-white w-full p-3 '
                                                                // onClick={() => {
                                                                //     setcountryBillingButton(0)
                                                                //     setcountryBillingTitle(title)
                                                                // }}
                                                                >
                                                                    title
                                                                </li> */}
                                                            {/* )
                                                                })
                                                            } */}

                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>

                                            <div className='grid lg:grid-cols-2 sm:grid-cols-2 mb-5 gap-5'>
                                                <div>
                                                    <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>State*</label>
                                                    <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />
                                                </div>
                                                <div>
                                                    <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>
                                                        City*</label>
                                                    <input type="text" className='w-full p-1.5 border-1 border-gray-200 rounded-sm my-2' />
                                                </div>
                                            </div>
                                        </div>

                                        <label htmlFor="" className='text-sm cursor-pointer font-semibold hover:text-[#C09578]'>Order Notes</label>
                                        <textarea type="text" className='w-full p-1.5 border-1 text-sm px-3 border-gray-200 rounded-sm my-2 resize-none h-[100px]' placeholder='Notes about your order, e.g. special notes for delivery.' />

                                    </div>
                                    <div>

                                        <h2 className='text-base font-bold w-full bg-black text-white p-2 uppercase'>Your order</h2>


                                        <div className="max-w-2xl mx-auto my-2 overflow-x-auto">
                                            <table className="min-w-full border border-gray-200">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="text-center px-6 py-3 text-gray-800 font-semibold lg:text-lg text-base  border-b border-gray-300">
                                                            Product
                                                        </th>
                                                        <th className="text-center px-6 py-3 text-gray-800 font-semibold lg:text-lg text-base  border-b border-gray-300">
                                                            Total
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className='text-center'>
                                                    {/* {
                                                        cart.map((items, index) => {
                                                            return ( */}
                                                    {cart.map((items, index) => (
                                                        <tr className="border-b border-gray-200">
                                                            <td className="px-6 py-4 lg:text-base text-sm font-medium text-gray-900">
                                                                {items.title} × {items.qty}
                                                            </td>
                                                            <td className="px-6 py-4 lg:text-base text-sm text-center font-semibold text-gray-900">
                                                                Rs. {items.price * items.qty}
                                                            </td>
                                                        </tr>
                                                    ))}

                                                    {/* )
                                                        })
                                                    } */}


                                                    <tr className="border-b border-gray-200">
                                                        <td className="px-6 py-4 lg:text-base text-sm text-gray-700">Cart Subtotal</td>
                                                        <td className="px-6 py-4 lg:text-base text-sm text-center text-gray-700">Rs.
                                                            {
                                                                cart.reduce((totle, obj) => totle + (obj.price * obj.qty), 0)
                                                            }

                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="px-6 py-4 lg:text-base text-sm font-bold text-gray-900">Order Total</td>
                                                        <td className="px-6 py-4 lg:text-base text-sm text-center font-bold text-gray-900">
                                                            {
                                                                cart.reduce((totle, obj) => totle + (obj.price * obj.qty), 0)
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Payment Method Radio Buttons */}
                                        <div className="my-4">
                                            <label className="block text-base font-semibold mb-2">Payment Method</label>
                                            <div className="flex items-center gap-6">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="2"
                                                        checked={paymentMethod === '2'}
                                                        onChange={() => setPaymentMethod('2')}
                                                        className="accent-[#C09578]"
                                                    />
                                                    Online
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="1"
                                                        checked={paymentMethod === '1'}
                                                        onChange={() => setPaymentMethod('1')}
                                                        className="accent-[#C09578]"
                                                    />
                                                    Cash On Delivery
                                                </label>
                                            </div>
                                        </div>

                                        <button type='submit' className='my-5 bg-[#C09578] text-white font-bold p-2 rounded-sm text-base cursor-pointer hover:text-white hover:bg-black'>Placed Order</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </section>
            </div>
        </>
    )
}
