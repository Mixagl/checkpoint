import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";
import Zones from "@/components/sections/Zones";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Zones />
      <Reviews />
      <CTA />
    </>
  );
}
