import Image from "next/image"

export default function Gallery() {
    return (
        <section className="w-2/4 px-14 flex flex-col pt-0 justify-between">
            <article className="w-full h-full relative mb-4">
                <Image src="/image-product-1.jpg" layout="fill" className="rounded-2xl cursor-pointer" />
            </article>
            <article className="flex justify-between mt-4">
                <Image src="/image-product-1-thumbnail.jpg" width={80} height={80} alt="Product Image" className="rounded-lg cursor-pointer hover:opacity-50" />
                <Image src="/image-product-1-thumbnail.jpg" width={80} height={80} alt="Product Image" className="rounded-lg cursor-pointer hover:opacity-50" />
                <Image src="/image-product-1-thumbnail.jpg" width={80} height={80} alt="Product Image" className="rounded-lg cursor-pointer hover:opacity-50" />
                <Image src="/image-product-1-thumbnail.jpg" width={80} height={80} alt="Product Image" className="rounded-lg cursor-pointer hover:opacity-50" />

            </article>
        </section>
    )
}