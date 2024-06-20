import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">TenFAST</Link>
        <div className="space-x-4">
          <Link to="/fastighetssystem" className="text-gray-700">Fastighetssystem</Link>
          <Link to="/om-oss" className="text-gray-700">Om oss</Link>
          <Link to="/pris" className="text-gray-700">Pris</Link>
          <Link to="/support" className="text-gray-700">Support</Link>
        </div>
        <div className="space-x-2">
          <Button variant="outline">Kom igång</Button>
          <Button>Logga in</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;