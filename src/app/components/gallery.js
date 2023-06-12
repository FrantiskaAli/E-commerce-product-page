import Image from "next/image"

export default function Gallery(){
    return(
        <section className="w-2/4">
            <article>
                <Image src="/image-product-1.jpg" width={300} height={200} />
            </article>
            <article>
                <Image  src="/image-product-1-thumbnail.jpg"  width={300} height={200} alt="Product Image"  />
                <Image  src="/image-product-1-thumbnail.jpg"  width={300} height={200} alt="Product Image"  />
                <Image  src="/image-product-1-thumbnail.jpg"  width={300} height={200} alt="Product Image"  />
                <Image  src="/image-product-1-thumbnail.jpg"  width={300} height={200} alt="Product Image"  />
            </article>
        </section>
    )
}