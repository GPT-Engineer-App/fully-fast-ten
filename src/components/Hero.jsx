import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Ett modernt fastighetssystem</h1>
          <p className="mb-4">TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</p>
          <p className="mb-4">kontact@tenfast.se</p>
          <p className="mb-4">08-199 552</p>
          <Button>Kom igång</Button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/images/hero-image.png" alt="Hero" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;