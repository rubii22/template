import Header from './components/Header';
import HeroSection from './components/Hero';
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TeamSection from "./components/Team";
import NewsLetterSection from "./components/NewsLetterSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Testimonials />
      <TeamSection />
      <NewsLetterSection />
      <Footer />
    </>
  );
}
