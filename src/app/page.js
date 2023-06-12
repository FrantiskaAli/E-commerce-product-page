import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Info from "./components/infrormation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
    <Navbar/>
    <section className="flex ">
    <Gallery/>
    <Info/>
    </section>
    </main>
  )
}
