'use Client'
export default function Info({onPlus, onMinus,cart,addToCart }) {
    return (
        <section className="md:w-2/4 md:h-5/6 md:pl-10 p-2 flex flex-col justify-center">
            <article >
                <h1 className="text-md uppercase font-bold text-yellow-500 mb-6 ">Sneaker Company</h1>

                <h2 className="text-5xl font-extrabold mb-6">Fall Limited Edition Sneakers</h2>

                <p className="leading-relaxed">These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </article>

            <article className="flex mt-12">
                <section className="pr-6" >
                    <strong className="text-3xl"> $125.00</strong>
                    <p className="leading-loose text-sm font-bold text-gray-400 line-through ">$250.00</p>
                </section>
                <section className="rounded bg-yellow-200 text-yellow-500 p-2 h-fit">
                    <p className=" text-sm font-bold">50%</p>
                </section>
            </article>

            <article className="flex min-w-full justify-between mt-14">
                <section className="flex bg-gray-100 w-1/3 justify-between py-2 px-4 rounded-xl">

                    <span onClick={onMinus} className="font-extrabold text-4xl text-yellow-600 hover:text-yellow-400 leading-none cursor-pointer">-</span>

                    <span className="font-extrabold text-xl mt-2 leading-none">{cart}</span>
         
                    <span onClick={onPlus} className="font-extrabold text-3xl hover:text-yellow-400 text-yellow-600 leading-none cursor-pointer">+</span>
                </section>
                <button onClick={addToCart} className="bg-yellow-400  pt-4 place-content-center  xl:px-20 rounded-xl hover:opacity-50 flex shadow-2xl px-12"> 

                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-4 svg-cart" viewBox="0 0 24 24"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fillRule="nonzero" /></svg>

              <p className="font-bold text-yellow-50  ">Add to cart</p> 
                </button>
            </article>
        </section>
    )
}