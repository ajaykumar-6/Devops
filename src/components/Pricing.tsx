import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Perfect for beginners getting started with their fitness journey',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        'Mobile app access',
        'Community support'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: 59,
      period: 'month',
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal training session (1/month)',
        'Nutrition consultation',
        'Priority booking',
        'Guest passes (2/month)',
        'Sauna & steam room access'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: 99,
      period: 'month',
      description: 'Ultimate package for maximum results and personalized attention',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Custom meal planning',
        'Body composition analysis',
        'Massage therapy (2/month)',
        'Supplement consultation',
        'VIP locker',
        '24/7 gym access'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Membership <span className="text-primary-600">Plans</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose the perfect membership plan that fits your lifestyle and fitness goals. 
            All plans include access to our state-of-the-art facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-dark-950 rounded-lg border-2 p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? 'border-primary-600 shadow-lg shadow-primary-600/20'
                  : 'border-dark-700 hover:border-primary-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-black text-white">${plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="bg-primary-600 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">All memberships include a 7-day free trial</p>
          <p className="text-gray-500 text-sm">No contracts • Cancel anytime • Full money-back guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;