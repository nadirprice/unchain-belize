// src/components/LandingPage.tsx
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection'; // Import the new section
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Other sections would go here, e.g.: */}
      {/* <FeaturesSection /> */}
      {/* <TestimonialSection /> */}

      <div className="mt-auto"> {/* This pushes the footer to the bottom */}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
