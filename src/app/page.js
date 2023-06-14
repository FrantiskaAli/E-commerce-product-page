'use client'
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Info from "./components/infrormation";
import { useState } from 'react';
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
  const [galleryDisplay, setGalleryDisplay] = useState({ open: false, display: 1 })
  const [cartInfo, setCartInfo] = useState(0)

  const [position, setPosition] = useState(0)
  let fullCart = false
  const showCart = (e) => {
    setPosition(e.target.offsetHeight + 10)
    cartDisplay ? setCartDisplay(false) : setCartDisplay(true)
    cartInfo > 0 ? fullCart = true : fullCart = false
  }


  const onSubmit = () => {
    setCartInfo(cart);
    setCart(0)

    //   setCart(0)
  }
  const openGal = (number) => {
    setGalleryDisplay({ open: true, display: number })
  }


  return (
    <main className={galleryDisplay.open ? "w-screen h-screen overflow-hidden px-36" : "z-10 px-36"}>
      <Navbar cartShow={showCart} />
      {cartDisplay && <Cart position={position} cartInfo={cartInfo} />}



      <section className="flex basis-full pt-20 pb-4 h-full space-between">
        {galleryDisplay.open && <GalleryActive close={() => setGalleryDisplay({ open: false, display: 1 })} begin={galleryDisplay.display} />}
        <Gallery openGal={openGal} />
        <Info onPlus={() => plus()} onMinus={() => minus()} cart={cart} addToCart={() => onSubmit()} />
      </section>

    </main>
  )
}
