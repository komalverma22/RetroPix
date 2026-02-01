import Navbar from "./components/Navbar";
// import Galleryy from "./components/ui/CircularGallery";
import FAQ from "./components/ui/FAQ";
import Footer from "./components/ui/Footer";
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
      <Footer/>
    </main>
  );
}
