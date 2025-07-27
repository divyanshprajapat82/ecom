import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../slice/userSlice'
import cartSlice from '../slice/cartSlice'

export const store = configureStore({
  reducer: {
    login: loginSlice,
    cart: cartSlice
  },
})

{/* <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center border-b border-[#00000025]">
        <h1 className="text-[40px] font-bold">Shopping Cart</h1>
        <p>
          <Link href="/">Home</Link>
          <span className="text-[#c7a473]"> {">"} Shopping Cart </span>
        </p>
      </div>
      <hr className="border-[#00000024]" />

      <div className="flex justify-center my-8">
        <div className="">
          <img src="/images/my-Order.jpg" alt="" />
          <p className="text-center mt-4">Your shopping cart is empty!</p>
        </div>
      </div> */}