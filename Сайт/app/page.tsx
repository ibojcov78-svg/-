import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/Search";
import Properties from "@/components/Properties";
import WhyUs from "@/components/WhyUs";
import MapSection from "@/components/MapSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchBar />
      <Properties />
      <WhyUs />
      <MapSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
