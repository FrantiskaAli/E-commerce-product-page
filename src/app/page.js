'use client'
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Info from "./components/infrormation";
import Image from "next/image";
import { useState} from 'react';
import Cart from "./components/cart";
import GalleryActive from "./components/galleryActive";

export default function Home() {
  const [cart, setCart] = useState(0)
  const plus = () => {
    const current = cart
    setCart(current + 1)
    console.log("function executed")
  }

  const minus = () => {
    const current = cart
    if (current > 0)
      setCart(current - 1)
  }
  const [cartDisplay, setCartDisplay] = useState(false)
  const [galleryDisplay, setGalleryDisplay] = useState({open:true, display:1})
 

  const [position, setPosition] = useState(0)
  const showCart = (e) => {
    setPosition(e.target.offsetHeight + 10)
    cartDisplay ? setCartDisplay(false) : setCartDisplay(true)
  }
  const [cartInfo, setCartInfo] = useState("Your cart is empty")

  const onSubmit = () => {
   
    const myCart = (
      <section>
          <article className="flex">
        <Image src="/image-product-1-thumbnail.jpg" width={40} height={40} />
        <p>Fall Limited Edition Sneakers <br/> $125.00 x {cart} ${125.00 * cart} </p>
        <svg onClick={()=>setCart(prevCart => prevCart - 1)} width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a"/></svg>
        </article>
        <button>Checkout</button>
      </section>
    )
   cart > 0 ? setCartInfo(myCart) : setCartInfo("Your cart is empty")
   //   setCart(0)
  }
const openGal = (number)=>{
  setGalleryDisplay({open: true, display:number})
}


  return (
    <main className= {galleryDisplay.open ? "w-screen h-screen overflow-hidden px-36": "z-10 px-36"}>
      <Navbar cartShow={showCart} />
      {cartDisplay && <Cart position={position} cartInfo={cartInfo} />}
      <section className="flex basis-full pt-20 pb-4 h-full space-between">
        {galleryDisplay.open && <GalleryActive close={()=>setGalleryDisplay({open: false ,display:1})} begin={galleryDisplay.display}/>}
        <Gallery openGal={openGal} />
        <Info onPlus={() => plus()} onMinus={() => minus()} cart={cart} addToCart={()=>onSubmit()} />
      </section>

    </main>
  )
}
