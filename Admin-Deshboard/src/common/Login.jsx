import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { loginContext } from "../context/MainContext";

export default function FrontPage() {
  // const [signIn, setSignIn] = useState(false);

  const [loginError, setLoginError] = useState("")

  let {adminID,setAdminID} = useContext(loginContext)

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  const navigate = useNavigate();

  const loginAButton = (e) => {
    e.preventDefault();
    
    let obj = {
      adminEmail: e.target.email.value,
      adminPassword: e.target.password.value
    }
    
    // axios.post(`https://ecom-server-pi.vercel.app/admin/auth/login`, obj, {
    axios.post(`${apiBaseUrl}auth/login`, obj, {
  withCredentials: true
})
    .then((res) => res.data)
    .then((finalData) => {
      if(finalData.status){
        setAdminID(finalData.adminId);
        // navigate("/dashboard");
          // console.log(finalData.adminId);
          
          
        } else{
          setLoginError(finalData.msg)
        }
      })
  };

  useEffect(()=>{
    if(adminID!=""){
      navigate("/dashboard");
    }
  },[adminID])

  // useEffect(()=>{
  //   loginAButton()
  // },[])


  return (
    <>
      <div className="bg-[#F9FAFB]">
        <div className=" max-w-[400px] m-auto">
          <div className=" h-[100vh] flex flex-col justify-center">
            <div className="flex justify-center mb-2">
              <img src="images/wscube-tech-logo-2.svg" alt="" />
            </div>
            <div className="bg-[#fff] p-4 shadow-md rounded-[10px] w-full">
              <h1 className="text-[20px] font-[700]">
                Sign in to your account
              </h1>
              <form onSubmit={loginAButton}>
                <div className="flex flex-col mt-2">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="p-2 border border-[#00000034] bg-[#F9FAFB] rounded-[6px] mt-1"
                    placeholder="Enter Email"
                    required
                  // onChange={(e) => setSignIn(console.log(e.target.value))}
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="p-2 border border-[#00000034] bg-[#F9FAFB] rounded-[6px] mt-1"
                    placeholder="Enter Password"
                    required
                  // onChange={(e) => setSignIn(console.log(e.target.value))}
                  />
                </div>
                <p className="text-[14px] text-[#f90909] mt-1">{loginError}</p>

                <Link to={"/forgot_password"} className=" w-full flex justify-end mt-1">forgot password</Link>


                {/* <Link to={`${signIn == "" ? "/" : "/dashboard"}`}> */}
                <button className="bg-[#2563EB] text-[#fff] py-2 px-3 rounded-[8px] text-[15px] font-[500]  cursor-pointer mt-2 w-full">
                  {/* Add Category */}
                  Sign In
                </button>
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
