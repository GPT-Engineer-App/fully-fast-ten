import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CustomerLogos from '@/components/CustomerLogos';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CustomerLogos />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;