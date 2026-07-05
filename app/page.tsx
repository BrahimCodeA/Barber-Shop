import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact />
    </div>
  );
}
