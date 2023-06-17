'use client'
import Image from "next/image";
import { useState,useEffect } from "react";

export default function Cart({ position, cartInfo, remove }) {

    const [cart, setCart] = useState(null)
useEffect(()=>{
    setCart(cartInfo)
},[cartInfo])


    
    const emptyCart = (
        <section className="h-1/4 w-11/12 md:w-1/4 md:top-20 mt-12 z-20 md:right-10 right-4 top-16 text-center shadow-2xl absolute bg-white rounded-2xl">
            <h3 className="text-left font-bold p-4 font-all">Cart</h3>
            <article className="border-t-2 h-2/3 border-gray-200 flex items-center justify-center font-bold text-gray-400 font-all">
           <p>Your cart is empty</p> 
            </article>
        </section>
    )

    const fullCart = (
        <section  className="h-fit w-11/12 md:w-1/4 md:top-20 mt-12 md:right-20 right-4  p-2 top-16 text-center shadow-2xl absolute bg-white rounded-2xl z-20">
            <h3 className="text-left font-bold p-4 font-all">Cart</h3>
            <hr></hr>
            <section>
                <article className="flex items-center justify-between p-4  ">
                    <Image src="/image-product-1-thumbnail.jpg" width={50} height={50} alt="thumbnail of the product" className="rounded" />
                    <p className="text-gray-400 text-left px-4 font-all">Fall Limited Edition Sneakers <br /> $125.00 x {cart} ${125.00 * cart} </p>
                    <svg className="hover:brightness-50 hover:cursor-pointer" onClick={() => remove()} width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" /></defs><use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" /></svg>
                </article>
                <button className="bg-orange-500 w-3/4 rounded-lg py-4 my-2 hover:bg-yellow-600 hover:cursor-pointer font-all  text-white font-bold ">Checkout</button>
            </section>
        </section>
    )

    if (cart > 0) {
        return fullCart
   } else return emptyCart

}

