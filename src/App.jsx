import { useState } from "react";
import CallToAction from "./components/banners/CallToAction";
import DiscountBanner from "./components/banners/DiscountBanner";
import ScholarshipBanner from "./components/banners/ScholarshipBanner";
import Benefits from "./components/benefits/Benefits";
import Brands from "./components/brands/Brands";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Incentives from "./components/incentives/Incentives";
import LearningTracks from "./components/learning-tracks/LearningTracks";
import LoaderForm from "./components/pre-loader/LoaderForm";
import Preloader from "./components/pre-loader/Preloader";
import Education from "./components/educational/Education";
import Criteria from "./components/educational/Criteria";

function App() {
  const [username, setUsername] = useState("");
  const [showPreloader, setShowPreloader] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleFormSubmission = (name) => {
    setUsername(name);
    setShowPreloader(true);
    setTimeout(() => {
      setShowPreloader(false);
      // Display Main Components after the Preloader
      setShowContent(true);
    }, 5000);
  };
  return (
    <>
      {!showPreloader && !showContent && (
        <LoaderForm onSubmit={handleFormSubmission} />
      )}
      {showPreloader && <Preloader username={username} />}
      {showContent && (
        <div>
          <Header />
          <Hero />
          <Incentives />
          <LearningTracks />
          <CallToAction />
          <Benefits />
          <Education />
          <DiscountBanner />
          <Criteria />
          <ScholarshipBanner />
          <Brands />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
