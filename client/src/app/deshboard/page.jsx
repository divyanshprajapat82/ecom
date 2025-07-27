"use client"
import axios from 'axios'
// import { headers } from 'next/headers'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function page() {
    let token = useSelector((store) => store.login.token)
    const [deshboard, setDeshboard] = useState(1)

    let changePassword = (e) => {
        e.preventDefault()
        let oldPassword = e.target.oldPassword.value
        let newPassword = e.target.newPassword.value
        let confirmPassword = e.target.confirmPassword.value

        let obj = {
            oldPassword,
            newPassword,
            confirmPassword,
        }

        console.log(
            oldPassword,
            newPassword,
            confirmPassword,);


        axios.post(`http://localhost:8000/web/user/change-password`, obj, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                if (finalRes.status) {

                } else {
                    console.log(finalRes.msg);

                }

                // console.log(finalRes.data)
                // setsliderData(finalRes.data)
                // setsliderstaticPath(finalRes.staticPath)
            })

    }
    return (
        <>
            <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center border-b border-[#00000025]">
                <h1 className="text-[40px] font-bold">My Dashboard</h1>
                <p>
                    <Link href="/">Home</Link>
                    <span className="text-[#c7a473]"> {">"} My Dashboard </span>
                </p>
            </div>
            <div className="md:max-w-[1100px] m-auto p-2 mt-8">
                <div className='flex justify-between'>
                    <div className='w-[24%]'>
                        <div className='w-full flex flex-col gap-1'>
                            <div onClick={() => setDeshboard(1)} className={` ${deshboard == 1 ? "bg-[#C09578]" : "bg-[#000]"}  text-[#fff] px-4 py-2 rounded-[4px] cursor-pointer hover:bg-[#C09578] transition-all duration-300`}> My Deshboard </div>
                            <div onClick={() => setDeshboard(2)} className={` ${deshboard == 2 ? "bg-[#C09578]" : "bg-[#000]"}  text-[#fff] px-4 py-2 rounded-[4px] cursor-pointer hover:bg-[#C09578] transition-all duration-300`}> Order </div>
                            <div onClick={() => setDeshboard(3)} className={` ${deshboard == 3 ? "bg-[#C09578]" : "bg-[#000]"}  text-[#fff] px-4 py-2 rounded-[4px] cursor-pointer hover:bg-[#C09578] transition-all duration-300`}> Address </div>
                            <div onClick={() => setDeshboard(4)} className={` ${deshboard == 4 ? "bg-[#C09578]" : "bg-[#000]"}  text-[#fff] px-4 py-2 rounded-[4px] cursor-pointer hover:bg-[#C09578] transition-all duration-300`}> My Profile </div>
                            <div onClick={() => setDeshboard(5)} className={` ${deshboard == 5 ? "bg-[#C09578]" : "bg-[#000]"}  text-[#fff] px-4 py-2 rounded-[4px] cursor-pointer hover:bg-[#C09578] transition-all duration-300`}> Change Password </div>
                            <div onClick={() => setDeshboard(6)} className={` ${deshboard == 6 ? "bg-[#C09578]" : "bg-[#000]"}  text-[#fff] px-4 py-2 rounded-[4px] cursor-pointer hover:bg-[#C09578] transition-all duration-300`}> Logout </div>
                        </div>
                    </div>
                    <div className='w-[74%]'>
                        {deshboard == 1
                            &&
                            <div>
                                <h1 className='text-[25px] font-bold mb-2'>My Dashboard</h1>
                                <p>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Edit your password and account details.</p>
                            </div>
                        }
                        {deshboard == 2
                            &&
                            <div>
                                <h1 className='text-[25px] font-bold mb-2'>Order</h1>
                                {/* <p>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Edit your password and account details.</p> */}
                                <table className='w-full'>
                                    <tbody className='bg-[#F2F2F2] border-b border-[#000]'>
                                        <tr>
                                            <th className='py-2'>Order</th>
                                            <th className='py-2'>Date</th>
                                            <th className='py-2'>Status</th>
                                            <th className='py-2'>Total</th>
                                            <th className='py-2'>Actions</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }
                        {deshboard == 3
                            &&
                            <div>
                                <h1 className='text-[25px] font-bold mb-2'>My Dashboard</h1>
                                <p>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Edit your password and account details.</p>
                            </div>
                        }
                        {deshboard == 4
                            &&
                            <div>
                                <h1 className='text-[25px] font-bold mb-2'>My Dashboard</h1>
                                <p>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Edit your password and account details.</p>
                            </div>
                        }
                        {deshboard == 5
                            &&
                            <div>
                                <h1 className='text-[25px] font-bold mb-2'>Change Password</h1>
                                <form onSubmit={changePassword} action="">
                                    <div>
                                        <label htmlFor="new-password" className="">
                                            Current Password
                                        </label>
                                        <input
                                            id="Current-password"
                                            name="oldPassword"
                                            type="password"
                                            required
                                            // minLength="6"
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="New Password"
                                        // value={newPassword}
                                        // onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="new-password" className="">
                                            New Password
                                        </label>
                                        <input
                                            id="new-password"
                                            name="newPassword"
                                            type="password"
                                            required
                                            // minLength="6"
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="New Password"
                                        // value={newPassword}
                                        // onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="confirm-password" className="">
                                            Confirm Password
                                        </label>
                                        <input
                                            id="confirm-password"
                                            name="confirmPassword"
                                            type="password"
                                            required
                                            // minLength="6"
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Confirm Password"
                                        // value={confirmPassword}
                                        // onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>

                                    <button className='px-6 py-1 mt-2 bg-[#C09578] text-[#fff] rounded-4xl cursor-pointer'>Submit</button>
                                </form>
                            </div>
                        }
                        {deshboard == 6
                            &&
                            <div>
                                <h1 className='text-[25px] font-bold mb-2'>My Dashboard</h1>
                                <p>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Edit your password and account details.</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
