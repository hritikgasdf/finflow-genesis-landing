
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <span className="text-xl font-bold text-white">Waya</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
            About Us
          </a>
          <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">
            Services
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
            Pricing
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
