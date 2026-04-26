import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;
