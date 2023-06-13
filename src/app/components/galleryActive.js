import Image from "next/image"
export default function GalleryActive (){

    return (
        <section className="bg-gray-400 flex content-center justify-center w-screen h-screen opacity-50 brightness-50 z-40 absolute top-0 left-0">
            <article className="w-1/3 brightness-150 opacity-0">
                <span>
               this
                </span>
                <figure className="h-5/6 w-11/12">
                <Image src="/image-product-1.jpg" layout="fill"/>
                </figure>
                <span>that</span>
            </article>
        </section>
    )
}