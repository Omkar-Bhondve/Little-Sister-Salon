import Header from "@/components/salon/Header";
import Hero from "@/components/salon/Hero";
import About from "@/components/salon/About";
import Services from "@/components/salon/Services";
import Pricing from "@/components/salon/Pricing";
import AnimatedStats from "@/components/salon/AnimatedStats";
import BeforeAfterSlider from "@/components/salon/BeforeAfterSlider";
import Team from "@/components/salon/Team";
import Gallery from "@/components/salon/Gallery";
import Reviews from "@/components/salon/Reviews";
import TestimonialCarousel from "@/components/salon/TestimonialCarousel";
import FAQ from "@/components/salon/FAQ";
import InstagramFeed from "@/components/salon/InstagramFeed";
import Contact from "@/components/salon/Contact";
import Footer from "@/components/salon/Footer";
import PageLoader from "@/components/salon/PageLoader";
import ScrollProgress from "@/components/salon/ScrollProgress";
import FloatingActionButton from "@/components/salon/FloatingActionButton";
import SpecialOfferBanner from "@/components/salon/SpecialOfferBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <ScrollProgress />
      <SpecialOfferBanner />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <AnimatedStats />
        <Pricing />
        <BeforeAfterSlider />
        <Team />
        <Gallery />
        <Reviews />
        <TestimonialCarousel />
        <FAQ />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
