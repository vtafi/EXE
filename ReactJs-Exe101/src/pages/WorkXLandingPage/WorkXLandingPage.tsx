import React from 'react';
import { Navbar, Footer, Hero, Features, Statistics, Testimonial, CTA } from '../../components';

const WorkXLandingPage: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 bg-[#FDFBF7] selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Statistics Section */}
      <Statistics />

      {/* Testimonial Section */}
      <Testimonial />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WorkXLandingPage;
