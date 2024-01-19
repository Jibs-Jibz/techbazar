import AboutUs from "@/components/About";
import Carousel from "@/components/Carousels/Carousel";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ";
import FirstSection from "@/components/Sections/FirstSection";
import SecondSection from "@/components/Sections/SecondSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <FirstSection />
      <Carousel />
      <SecondSection />
      <FAQ />
      <AboutUs />
      <Contact />
    </main>
  );
}
