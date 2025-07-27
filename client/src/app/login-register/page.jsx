"use client"

import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import OtpVerification from '../components/OtpVerification'
import { redirect } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { userData } from '../slice/userSlice'
import GoogleIcon from '../components/GoogleIcon'
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from '../config/firebaseConfig'
import { signInWithPopup } from "firebase/auth";



export default function page() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    let despatch = useDispatch()

    const [OtpModalOpen, setOtpModalOpen] = useState(false)
    const [otp, setOtp] = useState("")
    const [email, setEmail] = useState("")
    const [formData, setFormData] = useState("")


    let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL

    let getRegister = (e) => {
        e.preventDefault()
        let formValue = new FormData(e.target)
        setFormData(formValue)

        axios.post(`${APIBASEURL}user/send-otp`, { email })
            .then((res) => res.data)
            .then((finalData) => {
                console.log(finalData);
                if (finalData.status) {
                    setOtpModalOpen(true)
                } else {
                    console.log(finalData.msg);

                }
            })
    }

    let verifyOtp = (e) => {
        e.preventDefault()

        axios.post(`${APIBASEURL}user/otp-verify`, { otp })
            .then((res) => res.data)
            .then((finalData) => {
                console.log(finalData);
                if (finalData.status) {
                    axios.post(`${APIBASEURL}user/register`, formData)
                        .then((res) => res.data)
                        .then((finalData) => {
                            console.log(finalData);
                            if (finalData.status) {
                                console.log(finalData.msg);
                                setOtpModalOpen(false)

                            } else {
                                console.log(finalData.msg);
                            }
                        })

                } else {
                    console.log(finalData.msg);

                }
            })

    }

    console.log(otp);
    console.log(formData);

    let getLogin = (e) => {
        e.preventDefault()
        // console.log(APIBASEURL);

        let formValue = new FormData(e.target)
        // console.log(formValue);

        // setFormData(formValue)

        axios.post(`${APIBASEURL}user/login`, formValue)
            .then((res) => res.data)
            .then((finalData) => {
                console.log(finalData);
                if (finalData.status) {
                    console.log(finalData.msg);
                    despatch(userData({ user: finalData.user, token: finalData.token }))
                    redirect("/deshboard")
                } else {
                    console.log(finalData.msg);
                }
            })
    }

    let googleLogin = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                let insertObj = {
                    displayName: user.displayName,
                    email: user.email,
                    phoneNumber: user.phoneNumber
                }
                axios.post(`${APIBASEURL}user/create-user-google-login`, insertObj)
                    .then((res) => res.data)
                    .then((finalData) => {
                        console.log(finalData);
                        if (finalData.status) {
                            console.log(finalData.msg);
                            despatch(userData({ user: finalData.user, token: finalData.token }))
                            redirect("/deshboard")
                        } else {
                            console.log(finalData.msg);
                        }
                    })
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <>
            <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center border-b border-[#00000025]">
                <h1 className="text-[40px] font-bold">My Account</h1>
                <p>
                    <Link href="/">Home</Link>
                    <span className="text-[#c7a473]"> {">"} My Account</span>
                </p>
            </div>
            <div className=" md:max-w-[1100px] m-auto py-8 px-2 mb-2">
                <div className='flex justify-between flex-wrap'>
                    <div className='md:w-[48%] w-[100%]'>
                        <h1 className='text-[35px] text-[#666] mb-2'>Login</h1>
                        <form onSubmit={getLogin} action="" className='border border-[#00000025] p-[20px]'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="">Email *</label>
                                <input type="email" name='email' className='px-4 py-2 mt-1 border border-[#00000025] outline-none' placeholder='Email Address' required />
                            </div>
                            <div className='flex flex-col w-full mt-3'>
                                <label htmlFor="">Password *</label>
                                <input type="password" name='password' className='px-4 py-2 mt-1 border border-[#00000025] outline-none' placeholder='Password' required />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <Link href={""} className='text-[#C09578]'>Lost your password?</Link>
                                <button className='bg-[#c09578e5] hover:bg-[#C09578] text-[#fff] text-[15px] font-bold px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300'>
                                    LOGIN
                                </button>
                            </div>
                            <div className='flex items-center justify-center my-3'>
                                <div className='border-t border-gray-300 flex-grow'></div>
                                <span className='mx-4 text-gray-500'>OR</span>
                                <div className='border-t border-gray-300 flex-grow'></div>
                            </div>
                            <button
                                type="button"
                                onClick={googleLogin}
                                className='w-full border border-gray-300 py-2 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer'
                            >
                                <GoogleIcon />
                                <span>Login with Google</span>
                            </button>
                        </form>
                    </div>
                    <div className='md:w-[48%] w-[100%]'>
                        <h1 className='text-[35px] text-[#666] mb-2'>Register</h1>
                        <form onSubmit={getRegister} action="" className='border border-[#00000025] p-[20px]'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="">UserName *</label>
                                <input type="text" name='name' className='px-4 py-2 mt-1 border border-[#00000025] outline-none' required placeholder='Email Address' />
                            </div>
                            <div className='flex flex-col w-full mt-3'>
                                <label htmlFor="">Email *</label>
                                <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} className='px-4 py-2 mt-1 border border-[#00000025] outline-none' required placeholder='Email Address' />
                            </div>
                            <div className='flex flex-col w-full mt-3'>
                                <label htmlFor="">Password *</label>
                                <input type="password" name='password' className='px-4 py-2 mt-1 border border-[#00000025] outline-none' required placeholder='Password' />
                            </div>
                            <div className='flex flex-col w-full mt-3'>
                                <label htmlFor="">Phone *</label>
                                <input type="tel" name='phone' className='px-4 py-2 mt-1 border border-[#00000025] outline-none' required placeholder='Phone No' />
                            </div>
                            <div className='flex justify-end  mt-3'>
                                <button className='bg-[#c09578e5] hover:bg-[#C09578] text-[#fff] text-[15px] font-bold px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300'>
                                    REGISTER
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <OtpVerification isOpen={isOtpModalOpen} setOtp={setOtp} verifyOtp={verifyOtp} setIsOtpModalOpen={setIsOtpModalOpen} onClose={() => setIsOtpModalOpen(false)} /> */}
            {OtpModalOpen &&
                <OtpVerification setOtp={setOtp} verifyOtp={verifyOtp} setOtpModalOpen={setOtpModalOpen} />
            }
        </>
    )
}
