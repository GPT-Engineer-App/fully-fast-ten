import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10">Passar stora och små</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Free</h3>
            <p className="text-2xl font-bold mb-4">0 kr</p>
            <p className="mb-4">För privatpersoner och små företag med upp till 5 hyresobjekt.</p>
            <Button>Kom igång</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Pro</h3>
            <p className="text-2xl font-bold mb-4">10 kr / hyresobjekt / månad</p>
            <p className="mb-4">För privata fastighetsägare upp till 100 hyresobjekt.</p>
            <Button>Kom igång</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Enterprise</h3>
            <p className="text-2xl font-bold mb-4">Offert</p>
            <p className="mb-4">För fastighetsbolag eller förvaltare från 50 till tusentals hyresobjekt.</p>
            <Button>Kontakta oss</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;