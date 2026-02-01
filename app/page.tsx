import Navbar from "./components/Navbar";
import FAQ from "./components/ui/FAQ";
import Gallery from "./components/ui/Gallery";
import HeroSection from "./components/ui/HeroSection";
import WhyChoose from "./components/ui/WhyChoose";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyChoose/>
      <Gallery/>
      <FAQ/>
    </main>
  );
}
