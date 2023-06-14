'use client'
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Info from "./components/information";
import { useState } from 'react';
import Cart from "./components/cart";
import GalleryActive from "./components/galleryActive";

export default function Home() {

  const [galleryDisplay, setGalleryDisplay] = useState({ //this is the state of the pop up gallery and initial picture
    open: false, 
    display: 1 
  })

  const [cart, setCart] = useState({//this sets all the information I need for correct display and count in the cart element
    count: 0,
    display: false,
    info: 0,
    position:0
  })


  const plus = () => {//function to add items
    const current = cart.count
    setCart({...cart, count: current + 1})
    console.log("function executed")
  }

  const minus = () => { //function to subtract items
    const current = cart.count
    if (current > 0)
    setCart({...cart, count: current - 1})
  }
 
  const showCart = (e) => { //function to display cart element and position it under cart's icon
   cart.display ? setCart({...cart, display: false,position: e.target.offsetHeight + 10}) : setCart({...cart, display: true,position: e.target.offsetHeight + 10})
  }

  const onSubmit = () => { //function to add counted items into the cart
    const current = cart.count + cart.info;
    setCart( {...cart,count:0, info:current });
  }

  const openGal = (number) => {//function to open gallery view
    setGalleryDisplay({ open: true, display: number })
  }
 const closeGal = (number)=>{
  setGalleryDisplay({...galleryDisplay, open: false, display: number})
 }

  return (
    <main className={galleryDisplay.open ? "w-screen h-screen overflow-hidden px-36" : "z-10 px-36"}>
      <Navbar cartShow={showCart} />
      {cart.display && <Cart position={cart.position} cartInfo={cart.info} />}



      <section className="flex basis-full pt-20 pb-4 h-full space-between">
        {galleryDisplay.open && <GalleryActive close={closeGal} begin={galleryDisplay.display} />}
        <Gallery openGal={openGal} lastSeen={galleryDisplay.display}/>
        <Info onPlus={() => plus()} onMinus={() => minus()} cart={cart.count} addToCart={() => onSubmit()} />
      </section>

    </main>
  )
}
