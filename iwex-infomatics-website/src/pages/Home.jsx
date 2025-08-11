import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatWeDid from '../sections/WhatWeDid';
import Services from '../sections/Services';
import CustomerReviews from '../sections/CustomerReviews';
import Technologies from '../sections/Technologies';
import TechShowcase from '../sections/TechShowcase';
import StepsSection from '../sections/StepsSection';
import StickySection from '../sections/StickySection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <StickySection />
      <WhatWeDid />
      <TechShowcase />
      <Services />
      <CustomerReviews />
      <Technologies />
      <StepsSection />
      <Footer />
    </div>
  );
};

export default Home;