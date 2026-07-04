import HeroSection from "../components/home/HeroSection";
import WhyPhoneGuru from "../components/home/WhyPhoneGuru";
import HowItWorks from "../components/home/HowItWorks";
import WhatSeniorsLearn from "../components/home/WhatSeniorsLearn";
import VolunteerImpactSection from "../components/home/VolunteerImpactSection";
import TrustSafety from "../components/home/TrustSafety";
import FinalCTA from "../components/home/FinalCTA";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyPhoneGuru/>
      <HowItWorks />
      <WhatSeniorsLearn/>
      <VolunteerImpactSection/>
      <TrustSafety/>
      <FinalCTA/>
      
    </>
  );
};

export default Home;