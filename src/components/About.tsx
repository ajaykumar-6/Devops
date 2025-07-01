import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Goals',
      description: 'Custom fitness plans tailored to your specific needs and objectives.'
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Certified professionals dedicated to helping you achieve your best.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Over 10,000 successful transformations and counting.'
    },
    {
      icon: Zap,
      title: 'Modern Equipment',
      description: 'State-of-the-art facilities with the latest fitness technology.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-primary-600">Fitness Club</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              For over a decade, Fitness Club has been the premier destination for fitness 
              enthusiasts seeking transformation. We combine cutting-edge equipment with 
              expert guidance to create an environment where your fitness goals become reality.
            </p>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Our mission is simple: to empower individuals to unlock their full potential 
              through comprehensive fitness programs, nutritional guidance, and unwavering support.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Modern Gym Interior"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;