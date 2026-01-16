import Header from "@/components/salon/Header";
import Hero from "@/components/salon/Hero";
import About from "@/components/salon/About";
import Services from "@/components/salon/Services";
import Gallery from "@/components/salon/Gallery";
import Reviews from "@/components/salon/Reviews";
import Contact from "@/components/salon/Contact";
import Footer from "@/components/salon/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
