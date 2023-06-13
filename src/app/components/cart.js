'use client'

export default function Cart({position, cartInfo}){
    return(
        <section style={{top: position, right: '5rem'}} className="h-50 w-96 text-center border-2 border-solid p-4 border-gray-500 absolute">
            <h3>Cart</h3>
            <hr></hr>
            {cartInfo}
        </section>
    )
}

