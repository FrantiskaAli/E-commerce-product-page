import Image from "next/image"

export default function Gallery(){
    return(
        <section className="w-2/4 p-6">
            <article>
                <Image src="/image-product-1.jpg" width={300} height={200} className="rounded-md" />
            </article>
            <article className="flex">
                <Image  src="/image-product-1-thumbnail.jpg"  width={80} height={80} alt="Product Image"  className="rounded-md"/>
                <Image  src="/image-product-1-thumbnail.jpg"  width={80} height={80} alt="Product Image" className="rounded-md" />
                <Image  src="/image-product-1-thumbnail.jpg"  width={80} height={80} alt="Product Image"  className="rounded-md"/>
                <Image  src="/image-product-1-thumbnail.jpg"  width={80} height={80} alt="Product Image" className="rounded-md" />
            </article>
        </section>
    )
}