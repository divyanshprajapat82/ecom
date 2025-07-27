"use client"

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";


export default function page() {
  let cart = useSelector((store) => store.cart.cart)
  let imagePath = useSelector((store) => store.cart.imagePath)

  return (
    // <>
    //   <div className="md:max-w-[1100px] m-auto py-8 px-2 text-center border-b border-[#00000025]">
    //     <h1 className="text-[40px] font-bold">Shopping Cart</h1>
    //     <p>
    //       <Link href="/">Home</Link>
    //       <span className="text-[#c7a473]"> {">"} Shopping Cart </span>
    //     </p>
    //   </div>
    //   <hr className="border-[#00000024]" />

    //   <div className="md:max-w-[1100px] m-auto flex flex-col md:flex-row gap-8 py-10 px-2">
    //     {/* Cart Items */}
    //     <div className="flex-1 bg-white rounded-lg shadow p-6">
    //       <h2 className="text-2xl font-semibold mb-6 text-left">Cart Items</h2>
    //       {/* Example Cart Item */}
    //       <div className="flex items-center gap-4 border-b pb-4 mb-4">
    //         <img src="/images/ChairCard-1.webp" alt="Product" className="w-24 h-24 object-cover rounded" />
    //         <div className="flex-1 text-left">
    //           <h3 className="font-semibold text-lg">Modern Chair</h3>
    //           <p className="text-[#c7a473] font-medium">$120.00</p>
    //           <div className="flex items-center gap-2 mt-2">
    //             <button className="px-2 py-1 border rounded">-</button>
    //             <span className="px-2">1</span>
    //             <button className="px-2 py-1 border rounded">+</button>
    //           </div>
    //         </div>
    //         <button className="text-red-500 hover:underline">Remove</button>
    //       </div>
    //       {/* Another Example Cart Item */}
    //       <div className="flex items-center gap-4 border-b pb-4 mb-4">
    //         <img src="/images/Coffee-Table.jpg" alt="Product" className="w-24 h-24 object-cover rounded" />
    //         <div className="flex-1 text-left">
    //           <h3 className="font-semibold text-lg">Coffee Table</h3>
    //           <p className="text-[#c7a473] font-medium">$80.00</p>
    //           <div className="flex items-center gap-2 mt-2">
    //             <button className="px-2 py-1 border rounded">-</button>
    //             <span className="px-2">2</span>
    //             <button className="px-2 py-1 border rounded">+</button>
    //           </div>
    //         </div>
    //         <button className="text-red-500 hover:underline">Remove</button>
    //       </div>
    //     </div>

    //     {/* Cart Summary */}
    //     <div className=" md:w-80 bg-white rounded-lg shadow p-6 h-fit">
    //       <h2 className="text-2xl font-semibold mb-6 text-left">Summary</h2>
    //       <div className="flex justify-between mb-2">
    //         <span>Subtotal</span>
    //         <span className="font-semibold">$280.00</span>
    //       </div>
    //       <div className="flex justify-between mb-2">
    //         <span>Shipping</span>
    //         <span className="font-semibold">$10.00</span>
    //       </div>
    //       <hr className="my-4" />
    //       <div className="flex justify-between text-lg font-bold mb-6">
    //         <span>Total</span>
    //         <span>$290.00</span>
    //       </div>
    //       <button className="w-full bg-[#c7a473] text-white py-3 rounded font-semibold hover:bg-[#b08a5c] transition">Proceed to Checkout</button>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="md:max-w-[1100px] m-auto text-center">
        <div className="py-8 px-2 text-center border-b border-[#00000025]">
          <h1 className="text-[40px] font-bold">Shopping Cart</h1>
          <p>
            <Link href="/">Home</Link>
            <span className="text-[#c7a473]"> {">"} Shopping Cart </span>
          </p>
        </div>

        {cart.length == 0 ?
          <div className="flex justify-center my-8">
            <div className="">
              <img src="/images/my-Order.jpg" alt="" />
              <p className="text-center mt-4">Your shopping cart is empty!</p>
            </div>
          </div>
          :
          <>
            {/* <CartItems /> */}
            <CartItems cart={cart} imagePath={imagePath} />
          </>
        }
      </div>
    </>
  );
}
