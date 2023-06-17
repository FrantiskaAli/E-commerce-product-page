'use client'
import Image from "next/image";
import { useViewport } from "./functions/useViewport";
import {useState, useEffect} from "react";

export default function Gallery({openGal, lastSeen}) {
    const { width } = useViewport();//getting actual window width
    const [small, setSmall] = useState(false)
    useEffect(() => {
        width < 767 ? setSmall(true) : setSmall(false)
    }, [width])
    const [navigate, setNavigate] = useState(lastSeen)

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
        <section className="md:w-2/4 md:px-14 flex items-center flex-col lg:pt-0  w-screen p-0 m-0  ">
            <article className={!small ? "w-fit" : "hidden"}>
                <Image src="/image-product-1.jpg"  width={500} height={500} className="rounded-2xl" />
            </article>
        {//this is for phone view, component adjustment
        small ?
        <article className="w-screen h-fit mb-36">
        <span  onClick={()=>prev()} className="h-fit self-center bg-white  bg-opacity-75 absolute top-56 left-2 rounded-full p-5 hover:cursor-pointer">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
        </span>
        <figure>
            <Image src={`/image-product-${navigate}.jpg`} width={700} height={200} className=""/>
        </figure>
        <span onClick={()=>next()} className="h-fit self-center bg-white  bg-opacity-75 absolute top-56 right-1 rounded-full p-5 hover:cursor-pointer">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" ><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
        </span>
    </article> : null

        }
            <article className={!small ? "flex flex-wrap justify-between w-full mt-4" : "hidden w-0"}>
                <Image onClick={()=>openGal(1)} src="/image-product-1-thumbnail.jpg" width={80} height={80} alt="Product Image" className={lastSeen === 1 ? "rounded-lg cursor-pointer ring-4 ring-orange-600 hover:opacity-50 mt-4":"mt-4 rounded-lg cursor-pointer hover:opacity-50"} />
                <Image onClick={()=>openGal(2)} src="/image-product-2-thumbnail.jpg" width={80} height={80} alt="Product Image" className={lastSeen === 2 ? "rounded-lg cursor-pointer ring-4 ring-orange-600 hover:opacity-50 mt-4":" mt-4 rounded-lg cursor-pointer hover:opacity-50"}/>
                <Image onClick={()=>openGal(3)} src="/image-product-3-thumbnail.jpg" width={80} height={80} alt="Product Image" className={lastSeen === 3 ? "rounded-lg cursor-pointer ring-4 ring-orange-600 hover:opacity-50 mt-4":"mt-4 rounded-lg cursor-pointer hover:opacity-50"} />
                <Image onClick={()=>openGal(4)} src="/image-product-4-thumbnail.jpg" width={80} height={80} alt="Product Image" className={lastSeen === 4 ? "rounded-lg cursor-pointer ring-4 ring-orange-600 hover:opacity-50 mt-4":"mt-4 rounded-lg cursor-pointer hover:opacity-50"}/>

            </article>
        </section>
    )
}