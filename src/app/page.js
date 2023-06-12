import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Info from "./components/infrormation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-24">
    <Navbar/>
    <section className="flex py-20 space-between">
    <Gallery/>
    <Info/>
    </section>

    </main>
  )
}
