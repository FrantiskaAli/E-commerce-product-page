'use client'
import { useState } from "react"
import Image from "next/image"


export default function GalleryActive({close, begin}) {

const [navigate, setNavigate] = useState(begin)

const prev = ()=>{
   if (navigate > 1)
    {setNavigate(prevState => prevState - 1)
    }else setNavigate(4)
}
const next = ()=>{
    if (navigate < 4)
    { setNavigate(prevState => prevState + 1) 
    }else setNavigate(1)
 }

const handleClick = (number) => {
    setNavigate(number)
}

    return (
        <section className="w-screen h-screen py-16 px-80 bg-gray-500/[.7] justify-center content-center flex flex-col z-20 absolute top-0 left-0">
            <span onClick={()=>close(navigate)} className="float-right">
            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"  className="float-right mr-36 mb-2 hover:cursor-pointer fill-white hover:fill-orange-400"><path  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/></svg>
            </span>
            <article className="z-50 w-full h-full flex p-1/4 justify-center content-center relative">
                <span  onClick={()=>prev()} className="h-fit self-center bg-white absolute left-24 rounded-full p-4 hover:cursor-pointer">
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className="stroke-black hover:stroke-orange-500" ><path d="M11 1 3 9l8 8"  strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                </span>
                <figure  >
                    <Image src={`/image-product-${navigate}.jpg`} width={550} height={550} className="rounded-xl"/>
                </figure>
                <span onClick={()=>next()} className="h-fit self-center bg-white absolute right-24 rounded-full p-4 hover:cursor-pointer">
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className="stroke-black hover:stroke-orange-500" ><path d="m2 1 8 8-8 8"  strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                </span>
            </article>
            <article className="flex justify-evenly mt-4">
                <Image onClick={()=>handleClick(1)} src="/image-product-1-thumbnail.jpg" width={80} height={80} alt="Product Image" className={navigate===1 ? "rounded-xl hover:brightness-125 cursor-pointer opacity-50 ring-orange-500 ring-2" : "rounded-xl hover:brightness-125 cursor-pointer hover:opacity-50" } />
                <Image onClick={()=>handleClick(2)} src="/image-product-2-thumbnail.jpg" width={80} height={80} alt="Product Image" className={navigate===2 ? "rounded-xl hover:brightness-125 cursor-pointer opacity-50 ring-orange-500 ring-2" : "rounded-xl hover:brightness-125 cursor-pointer hover:opacity-50" }/>
                <Image onClick={()=>handleClick(3)} src="/image-product-3-thumbnail.jpg" width={80} height={80} alt="Product Image" className={navigate===3 ? "rounded-xl hover:brightness-125 cursor-pointer opacity-50 ring-orange-500 ring-2" : "rounded-xl hover:brightness-125 cursor-pointer hover:opacity-50" }/>
                <Image onClick={()=>handleClick(4)} src="/image-product-4-thumbnail.jpg" width={80} height={80} alt="Product Image" className={navigate===4 ? "rounded-xl hover:brightness-125 cursor-pointer opacity-50 ring-orange-500 ring-2" : "rounded-xl hover:brightness-125 cursor-pointer hover:opacity-50" } />

            </article>
        </section>
    )
}