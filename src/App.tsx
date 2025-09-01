import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import AccessibilityButton from './components/AccessibilityButton';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50" dir="rtl">
      <AccessibilityButton />
      <CookieConsent />
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;