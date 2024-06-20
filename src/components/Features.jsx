import React from 'react';
import { FaCloud, FaDollarSign, FaCogs, FaCheck } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10">Fastighetssystemet för din verksamhet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <FaCloud className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Webbaserat</h3>
            <p>TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd dator eller mobilen!</p>
          </div>
          <div className="text-center">
            <FaDollarSign className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Enkel prissättning</h3>
            <p>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är dessutom gratis för mindre hyresvärdar.</p>
          </div>
          <div className="text-center">
            <FaCogs className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Automatisera din verksamhet</h3>
            <p>Automatisk avisering via e-post eller traditionell post. Bankkoppling för inbetalningar, bokföring, m.m.</p>
          </div>
          <div className="text-center">
            <FaCheck className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Allt i ett</h3>
            <p>Få allt relaterat till din verksamhet samlat i ett system och få stenkoll på avtal och hyresgäster.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;