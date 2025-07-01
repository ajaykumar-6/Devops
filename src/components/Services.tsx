import React from 'react';
import { Dumbbell, Heart, Users, Trophy, Timer, Apple } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weightlifting programs.',
      features: ['Free Weights', 'Machines', 'Functional Training']
    },
    {
      icon: Heart,
      title: 'Cardio Workouts',
      description: 'Improve cardiovascular health with varied and engaging cardio sessions.',
      features: ['Treadmills', 'Cycling', 'HIIT Classes']
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join energizing group sessions led by certified fitness instructors.',
      features: ['Yoga', 'Pilates', 'Dance Fitness']
    },
    {
      icon: Trophy,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored specifically to your fitness goals.',
      features: ['Custom Plans', 'Progress Tracking', 'Nutrition Guidance']
    },
    {
      icon: Timer,
      title: 'HIIT Programs',
      description: 'High-intensity interval training for maximum results in minimum time.',
      features: ['Circuit Training', 'Metabolic Workouts', 'Fat Burning']
    },
    {
      icon: Apple,
      title: 'Nutrition Coaching',
      description: 'Professional nutritional guidance to complement your fitness routine.',
      features: ['Meal Planning', 'Supplements', 'Lifestyle Changes']
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your goals, 
            whether you're a beginner or an experienced athlete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-900 p-8 rounded-lg border border-dark-700 hover:border-primary-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-700 transition-colors">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-white text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-primary-600 text-sm flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;