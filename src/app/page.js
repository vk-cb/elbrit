import Image from "next/image";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Ingredient from "./components/ingredient";
import Blog from "./components/blog";

export default function Home() {
  return (
    <div>
      
    <Hero/>
    <Ingredient/>
    <Blog/>
    <Footer/>
     
    </div>
  );
}
