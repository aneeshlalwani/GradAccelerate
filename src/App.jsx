import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import ApplicationProcess from "./components/application-process/ApplicationProcess";
import Invitation from "./components/invitation/Invitation";
import LearnFromTheBest from "./components/learn-from-best/LearnFromTheBest";
import Accelerate from "./components/banners/Accelerate";
import ApplicationForm from "./components/Application-form/ApplicationForm";
import FaqsBanner from "./components/banners/FaqsBanner";
import FAQ from "./components/faq/FAQ";

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
    }, 7000);
  };
  return (
    <Routes>
      {/* This Route is for main landing pages */}
      <Route
        path="/"
        element={
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
                <ApplicationProcess />
                <ScholarshipBanner />
                <Invitation />
                <Accelerate />
                <LearnFromTheBest />
                <FaqsBanner />
                <Brands />
                <Footer />
              </div>
            )}
          </>
        }
      />
      {/* This Route is For Application Form */}
      <Route path="/apply" element={<ApplicationForm />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default App;
