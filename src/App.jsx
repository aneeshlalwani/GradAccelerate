import CallToAction from "./components/banners/CallToAction";
import DiscountBanner from "./components/banners/DiscountBanner";
import ScholarshipBanner from "./components/banners/ScholarshipBanner";
import Brands from "./components/brands/Brands";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Incentives from "./components/incentives/Incentives";
import LearningTracks from "./components/learning-tracks/LearningTracks";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Incentives />
      <LearningTracks />
      <CallToAction />
      <DiscountBanner />
      <ScholarshipBanner />
      <Brands />
      <Footer />
    </>
  );
}

export default App;
