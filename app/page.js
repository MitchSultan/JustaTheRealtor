import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import NewProperty from "./components/NewProperty";
import Infor from "./components/Infor";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <NewProperty />
      <Testimonials />
      {/* <FeaturedPosts/> */}
      <Infor />
      <Cta />
      <Footer />
    </>
        );
}
