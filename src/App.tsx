import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-950 text-white font-inter">
      <Header />
      <Hero />
      <About />
      <Services />
      <Classes />
      <Trainers />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;