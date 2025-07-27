import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { fetchCart } from '../slice/cartSlice';
import axios from 'axios';


export default function CartItems({ cart, imagePath }) {
    let totle = 0
    cart.forEach((price) => totle += price.qty * price.price)
    return (
        <>
            <section className='max-w-full' id='cartItems'>
                <div className='max-w-[1320px] mx-auto'>
                    <div className="overflow-x-auto p-4">
                        <table className="min-w-full border-collapse border border-gray-200">
                            <thead className="bg-gray-100 text-center text-base  font-semibold border-b-3 border-[#C09578]">
                                <tr className="border-b border-gray-300">
                                    <th className="p-4">Delete</th>
                                    <th className="p-4 w-[253px]">Image</th>
                                    <th className="p-4">Product</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Quantity</th>
                                    <th className="p-4">Total</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {cart.map((items, index) => (
                                    <CartRow items={items} imagePath={imagePath} index={index} />
                                ))}

                            </tbody>
                        </table>


                    </div>
                    <div className="flex justify-end my-6">
                        <button className="bg-black cursor-pointer hover:bg-[#C09578] hover:text-white  text-white lg:px-6 lg:py-3 rounded px-2 py-2  lg:text-base font-semibold text-[12px] transition">
                            UPDATE CART
                        </button>
                    </div>
                </div>
            </section>

            <section className='max-w-full' id='cartSummary'>
                <div className=''>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                        {/* Coupon Section */}
                        <div className="border border-gray-200">
                            <div className="bg-black text-white text-lg font-bold p-3 uppercase tracking-wide">
                                Coupon
                            </div>
                            <div className="p-4">
                                <p className="mb-3 text-gray-700 text-sm">Enter your coupon code if you have one.</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        placeholder="Coupon code"
                                        className="border border-gray-300 px-4 py-2"
                                    />
                                    <button className="bg-black cursor-pointer text-white px-4 py-2 font-semibold hover:bg-[#C09578]  transition">
                                        Apply Coupon
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Cart Totals */}
                        <div className="border border-gray-200">
                            <div className="bg-black text-white text-lg font-bold p-3 uppercase tracking-wide">
                                Cart Totals
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Subtotal</span>
                                    <span className="font-semibold">Rs. {totle}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Discount (-)</span>
                                    <span className="font-semibold">Rs. 0</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span>Rs. {totle}</span>
                                </div>
                                <div className="pt-4 flex justify-end">
                                    <button className="bg-black cursor-pointer text-white px-4 py-2 font-semibold hover:bg-[#C09578]  transition">
                                        Proceed To Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export function CartRow({ items, imagePath, index }) {

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;
    let dispatch = useDispatch()
    let { _id } = items
    let deleteItem = () => {
        // alert(items._id)
        axios.delete(`${apiBaseUrl}cart/delete-cart/${_id}`)
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);

                dispatch(fetchCart())
                // setHomeProductData(finalRes.data)
                // console.log(finalRes.data)
                // setsliderData(finalRes.data)
                // setsliderstaticPath(finalRes.staticPath)
            })
    }


    return (
        <tr key={index} className="border-b border-gray-200">
            <td className="p-4 text-center text-xl text-brown-700 border-r border-gray-200">
                <RiDeleteBin6Line onClick={deleteItem} className='mx-auto text-[#C09578]' />
            </td>
            <td className="p-4 border-r border-gray-200">
                <img
                    src={imagePath + items.image}
                    alt="Gloria Shoe Racks"
                    className="w-[150px] h-[150px] object-cover mx-auto "
                />
            </td>
            <td className="p-4 text-sm border-r border-gray-200">
                {items.title}


            </td>
            <td className="p-4 font-bold text-base border-r border-gray-200">

                Rs.   {items.price}


            </td>
            <td className="p-4 border-r border-gray-200">
                <div className="flex items-center gap-2">
                    <span className="text-sm">Quantity</span>
                    <input
                        type="number"
                        defaultValue={items.qty}
                        className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                    />
                </div>
            </td>
            <td className="p-4 font-bold text-base">Rs.
                {items.price * items.qty}
            </td>
        </tr>
    )
}
