import React, { useContext, useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortrait } from "react-icons/io5";
import { Link } from "react-router";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";
import { loginContext } from "../context/MainContext";
import axios from "axios";

export default function Profile() {
  const [profile, setProfile] = useState(true);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    $(".dropify").dropify({
      // messages: {
      //   default: "Drag and drop",
      // },
      // tpl: {
      //   message: `<div className="dropify-message"><span className="file-icon" /> <p className="text-[25px]">{{ default }}</p></div>`,
      // },
    });
  })


  let { adminID } = useContext(loginContext)
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let changePassword = (e) => {
    e.preventDefault()
    let currentPassword = e.target.currentPassword.value
    let newPassword = e.target.newPassword.value
    let confirmPassword = e.target.confirmPassword.value

    console.log(currentPassword, newPassword, confirmPassword);
    setLoading(true)
    setError("")
    if (newPassword != confirmPassword) {
      return setError("Passwords do not match!"), setLoading(false)
      // console.log("yes");
      
    }

    axios.post(`${apiBaseUrl}auth/change-password`, { currentPassword, newPassword, adminID })
      .then((res) => res.data)
      .then((finalData) => {
        if (finalData.status) {
          // const newOTP = generateOTP();
          // setLoading(true);
          // setGeneratedOTP(newOTP);
          // setLoading(false)
          // setStep(3);



          setTimeout(() => {
            setLoading(false)
            e.target.reset()
          }, 2000)

          // toast.success(`OTP sent successfully! (Demo OTP: ${newOTP})`);
        } else {
          // toast.error('Invalid Email!');
          setLoading(false)
          setError(finalData.msg)
          // setLoading(false);
        }
      })

  }

  return (
    <>
      <div>
        <div className="py-1 px-5 bg-[#F1F4F5] border-b border-[#00000029]">
          <h1 className="text-[17px] font-[500] text-[#00000095] ">
            <Link
              to="/dashboard"
              className="hover:text-[#0000ff88] cursor-pointer"
            >
              {" "}
              Home{" "}
            </Link>{" "}
            /{" "}
            <span className="hover:text-[#0000ff88] cursor-pointer">
              {" "}
              Profile
            </span>
          </h1>
        </div>
        {/* <hr className="border-[#00000029] mt-1" /> */}

        <div className=" bg-[#F1F4F5] md:p-5 p-2">
          <div className="flex lg:flex-nowrap flex-wrap mt-4 gap-4 w-full">
            <div className="lg:w-[50%] w-[500px]">
              <div className="shadow-md rounded-[10px] overflow-hidden">
                <div className="p-4 bg-[#fff] h-[120px] flex items-center justify-center">
                  <h1>Admin</h1>
                </div>
                <div className="p-4 bg-[#F6F9FD]">
                  <div>
                    <h1 className="text-[15px] font-[500]">
                      Contact Information
                    </h1>
                    <h1 className="text-[13px] flex items-center gap-1 mt-2">
                      <IoPhonePortrait />
                      1234567890
                    </h1>
                    <h1 className="text-[13px] flex items-center gap-1 mt-2">
                      <IoMdMail /> xyz@gmail.com
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[50%] w-full">
              <div className="p-4 shadow-md bg-[#fff] rounded-[10px] overflow-hidden">
                <div className="">
                  <ul className="flex gap-3 font-[500] border-b">
                    <li
                      className={`px-4 pb-2 cursor-pointer ${profile ? "text-[blue] border-b-[2px]" : ""
                        }`}
                      onClick={() => setProfile(true)}
                    >
                      Edit Profile
                    </li>
                    <li
                      className={`px-4 pb-2 cursor-pointer ${profile == false ? "text-[blue] border-b-[2px]" : ""
                        }`}
                      onClick={() => setProfile(false)}
                    >
                      Change Password
                    </li>
                  </ul>
                </div>
                <div>
                  {profile ? (
                    <form>
                      <div className="flex lg:flex-nowrap flex-wrap gap-4 mt-2">
                        <div className="lg:w-[40%] w-full">
                          <label className="mb-1">
                            <b>Category Image</b>
                          </label>
                          <input
                            type="file"
                            className="dropify text-[15px]"
                            data-height="250"
                          />
                        </div>
                        <div className="lg:w-[60%] w-full">
                          <div className="flex flex-col mt-4">
                            <label className="mb-1">
                              <b>Name</b>
                            </label>
                            <input
                              type="text"
                              className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                              placeholder="Name"
                              required
                            />
                          </div>

                          <div className="flex flex-col mt-4">
                            <label className="mb-1">
                              <b>Email</b>
                            </label>
                            <input
                              type="text"
                              className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                              placeholder="Email"
                              required
                            />
                          </div>
                          <div className="flex flex-col mt-4">
                            <label className="mb-1">
                              <b>Mobile Number</b>
                            </label>
                            <input
                              type="text"
                              className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                              placeholder="Mobile Number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="bg-[#7E22CE] text-[#fff] py-2 px-3 rounded-[8px] font-[500]  cursor-pointer my-4"
                      // onSubmit={(e) => e.preventDefault()}
                      >
                        Update Profile

                      </button>
                    </form>
                  ) : (
                    <form onSubmit={changePassword}>
                      <div className="flex flex-col mt-2">
                        <label className="mb-1">
                          <b>Current Password</b>
                        </label>
                        <input
                          type="password"
                          name="currentPassword"
                          className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                          placeholder="Current Password"
                          required
                        />
                      </div>

                      <div className="flex flex-col mt-4">
                        <label className="mb-1">
                          <b>New Password</b>
                        </label>
                        <input
                          type="password"
                          name="newPassword"
                          className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                          placeholder="New Password"
                          required
                        />
                      </div>

                      <div className="flex flex-col mt-4">
                        <label className="mb-1">
                          <b>Confirm Password</b>
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                          placeholder="Confirm Password"
                          required
                        />
                      </div>
                      <p className='text-[#f00] my-0'>{error}</p>



                      <button
                        className="bg-[#7E22CE] text-[#fff] py-2 px-3 rounded-[8px] font-[500]  cursor-pointer my-4"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        {/* Change Password */}
                        {loading ?
                          "Changing....."
                          :
                          "Change Password"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
