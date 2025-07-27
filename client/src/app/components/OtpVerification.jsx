import React from 'react';

export default function OtpVerification({ setOtp, verifyOtp, setOtpModalOpen }) {

    return (
        <div className="fixed inset-0 bg-[#00000035] bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Enter Verification Code</h2>
                    <button onClick={() => setOtpModalOpen(false)} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                    We have sent a verification code to your email address.
                </p>
                <form>
                    <div className="flex justify-center gap-2 mb-6">
                        <input
                            type="text"
                            maxLength="6"
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full h-14 text-center text-2xl font-bold border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C09578] focus:border-[#C09578] outline-none tracking-[1em]"
                            placeholder="------"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={verifyOtp}
                        className="w-full bg-[#c09578e5] hover:bg-[#C09578] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300"
                    >
                        Verify
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        Didn't receive the code?{' '}
                        <button className="text-[#C09578] hover:underline font-semibold">
                            Resend Code
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
} 