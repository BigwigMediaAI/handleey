import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Testimonials from "./components/home/Testimonial";
import Plans from "./components/home/Plans";
import Footer from "./components/Footer";
import FAQ from "./components/home/FAQ";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Plans />
      <FAQ />
      <Footer />
    </div>
  );
}
