import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Info from "./components/infrormation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-36">
    <Navbar/>
    <section className="flex basis-full pt-20 pb-4 h-full space-between">
    <Gallery/>
    <Info/>
    </section>

    </main>
  )
}
