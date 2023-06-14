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

    return (
        <section className="w-screen h-screen py-16 px-80 bg-gray-500/[.7] justify-center content-center flex flex-col z-20 absolute top-0 left-0">
            <span onClick={close} className="float-right">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"  className="float-right"><path  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>
            </span>
            <article className="z-50 w-full h-full flex p-1/4 justify-center content-center">
                <span  onClick={()=>prev()} className="h-fit self-center">
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                </span>
                <figure >
                    <Image src={`/image-product-${navigate}.jpg`} width={600} height={700} />
                </figure>
                <span onClick={()=>next()} className="h-fit self-center">
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                </span>
            </article>
            <article className="flex justify-evenly mt-4">
                <Image src="/image-product-1-thumbnail.jpg" width={80} height={80} alt="Product Image" className="rounded-lg hover:brightness-125 cursor-pointer hover:opacity-50" />
                <Image src="/image-product-2-thumbnail.jpg" width={80} height={80} alt="Product Image" className="rounded-lg hover:brightness-125 cursor-pointer hover:opacity-50" />
                <Image src="/image-product-3-thumbnail.jpg" width={80} height={80} alt="Product Image" className="rounded-lg hover:brightness-125 cursor-pointer hover:opacity-50" />
                <Image src="/image-product-4-thumbnail.jpg" width={80} height={80} alt="Product Image" className="rounded-lg hover:brightness-125 cursor-pointer hover:opacity-50" />

            </article>
        </section>
    )
}