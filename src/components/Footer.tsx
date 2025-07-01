import React from 'react';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Classes', href: '#classes' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Personal Training',
    'Group Classes',
    'Nutrition Coaching',
    'Strength Training',
    'Cardio Workouts',
    'Yoga & Pilates'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold text-white">Fitness Club</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Transform your body and mind at our premier fitness facility. We're committed 
              to helping you achieve your fitness goals with expert guidance and state-of-the-art equipment.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-dark-800 hover:bg-primary-600 p-3 rounded-lg transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>123 Fitness Street</p>
                  <p>Downtown District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-primary-600 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <a href="mailto:info@fitnessclub.com" className="text-gray-400 hover:text-primary-600 transition-colors">
                  info@fitnessclub.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="border-t border-dark-800 mt-12 pt-8">
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-4">Operating Hours</h3>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="text-gray-400">
                <span className="text-primary-600 font-medium">Monday - Friday:</span> 5:00 AM - 11:00 PM
              </div>
              <div className="text-gray-400">
                <span className="text-primary-600 font-medium">Saturday - Sunday:</span> 6:00 AM - 10:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500">
              © 2024 Fitness Club. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;