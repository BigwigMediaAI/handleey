import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Testimonials from "./components/home/Testimonial";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
