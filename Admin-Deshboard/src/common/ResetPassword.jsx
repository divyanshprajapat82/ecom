import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [error, setError] = useState("")

  // Generate a random 6-digit OTP
  // const generateOTP = () => {
  //   return Math.floor(100000 + Math.random() * 900000).toString();
  // };

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  const handleSendOTP = (e) => {
    e.preventDefault();
    setLoading(true);

    // // Simulate API delay
    // setTimeout(() => {
    //   const newOTP = generateOTP();
    //   setGeneratedOTP(newOTP);
    //   toast.success(`OTP sent successfully! (Demo OTP: ${newOTP})`);
    //   setStep(2);
    //   setLoading(false);
    // }, 1500);

    setError("")
    axios.post(`${apiBaseUrl}auth/send-otp`, { email })
      .then((res) => res.data)
      .then((finalData) => {
        if (finalData.status) {
          // const newOTP = generateOTP();
          // setLoading(true);
          // setGeneratedOTP(newOTP);
          setLoading(false)
          setStep(2);
          // toast.success(`OTP sent successfully! (Demo OTP: ${newOTP})`);
        } else {
          setError('Invalid Email!');
          setLoading(false);
        }
      })

  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API delay
    // setTimeout(() => {
    //   if (otp === generatedOTP) {
    //     toast.success('OTP verified successfully!');
    //     setStep(3);
    //   } else {
    //     toast.error('Invalid OTP!');
    //   }
    //   setLoading(false);
    // }, 1000);

    // try {
    if (otp.length === 6) {
      setError("")
      axios.post(`${apiBaseUrl}auth/verify-otp`, { otp })
        .then((res) => res.data)
        .then((finalData) => {
          if (finalData.status) {
            // const newOTP = generateOTP();
            // setLoading(true);
            // setGeneratedOTP(newOTP);

            setTimeout(() => {
              setLoading(false)
              setStep(3);
            }, 2000)

            // toast.success(`OTP sent successfully! (Demo OTP: ${newOTP})`);
          } else {
            // toast.error('Invalid Email!');
            setError("Invalid OTP. Please try again")
            setLoading(false);
          }
        })
      } else{
        setError('Invalid OTP. OTP must be at least 6 characters long!');
        setLoading(false);
    }
    // } catch (error) {

    // }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return setError('Passwords do not match!');
    }

    if (newPassword.length < 6) {
      return setError('Passwords must be at least 6 characters long!');
    }

    setError("")
    axios.post(`${apiBaseUrl}auth/reset-password`, { email, newPassword })
      .then((res) => res.data)
      .then((finalData) => {
        if (finalData.status) {
          // const newOTP = generateOTP();
          // setLoading(true);
          // setGeneratedOTP(newOTP);
          setLoading(false)
          // setStep(3);

          setTimeout(() => {
            navigate("/")
          }, 1000)

          // toast.success(`OTP sent successfully! (Demo OTP: ${newOTP})`);
        } else {
          // toast.error('Invalid Email!');
          setError("Failed to reset password. Please try again.")
          setLoading(false);
        }
      })

    // setLoading(true);
    // // Simulate API delay
    // setTimeout(() => {
    //   toast.success('Password reset successfully!');
    //   navigate('/login');
    //   setLoading(false);
    // }, 1500);
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Reset Your Password
            </h2>
          </div>

          {step === 1 && (
            <form className="mt-8 space-y-6" onSubmit={handleSendOTP}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <p className='text-[#f00] my-2'>{error}</p>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {loading ? 'Sending...' : 'Send OTP'}
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="mt-3 w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Go Back to Login
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form className="mt-8 space-y-6" onSubmit={handleVerifyOTP}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="otp" className="sr-only">
                    Enter OTP
                  </label>
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    maxLength="6"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <p className='text-[#f00] my-2'>{error}</p>
              </div>


              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="new-password" className="sr-only">
                    New Password
                  </label>
                  <input
                    id="new-password"
                    name="new-password"
                    type="password"
                    required
                    minLength="6"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="confirm-password" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    minLength="6"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <p className='text-[#f00] my-2'>{error}</p>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
