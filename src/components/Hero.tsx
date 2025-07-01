import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-950/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black leading-tight animate-fade-in">
            IT'S <span className="text-primary-600">GYM</span> TIME.<br />
            LET'S GO<br />
            WE ARE READY TO{' '}
            <span className="text-primary-600">FIT YOU</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mt-8 max-w-2xl animate-slide-up">
            Transform your body and mind with our state-of-the-art facilities, 
            expert trainers, and personalized fitness programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-slide-up">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-dark-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Plans
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;