import React from 'react';

const CustomerLogos = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-6">Några nöjda kunder</h2>
        <div className="flex justify-center space-x-8">
          <img src="/images/logo1.png" alt="Logo 1" className="h-12" />
          <img src="/images/logo2.png" alt="Logo 2" className="h-12" />
          <img src="/images/logo3.png" alt="Logo 3" className="h-12" />
          <img src="/images/logo4.png" alt="Logo 4" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;