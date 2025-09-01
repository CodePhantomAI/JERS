import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Heart className="w-8 h-8 text-pink-500" />
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              ירושלים בלונים
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors hover:text-pink-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              בית
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors hover:text-pink-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              שירותים
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors hover:text-pink-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              אודות
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`font-medium transition-colors hover:text-pink-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              גלריה
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 font-medium hover:text-pink-500 transition-colors text-right"
              >
                בית
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 font-medium hover:text-pink-500 transition-colors text-right"
              >
                שירותים
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 font-medium hover:text-pink-500 transition-colors text-right"
              >
                אודות
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 font-medium hover:text-pink-500 transition-colors text-right"
              >
                גלריה
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;