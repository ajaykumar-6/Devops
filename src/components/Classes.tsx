import React from 'react';
import { Clock, Users, TrendingUp } from 'lucide-react';

const Classes = () => {
  const classes = [
    {
      name: 'High-Intensity Interval Training',
      time: '6:00 AM - 7:00 AM',
      duration: '60 minutes',
      capacity: '20 people',
      level: 'All Levels',
      instructor: 'Sarah Johnson',
      description: 'Burn calories and build endurance with this high-energy workout.',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Strength & Conditioning',
      time: '8:00 AM - 9:30 AM',
      duration: '90 minutes',
      capacity: '15 people',
      level: 'Intermediate',
      instructor: 'Mike Chen',
      description: 'Build muscle and improve overall strength with compound movements.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Yoga Flow',
      time: '10:00 AM - 11:00 AM',
      duration: '60 minutes',
      capacity: '25 people',
      level: 'Beginner',
      instructor: 'Emma Rodriguez',
      description: 'Improve flexibility and mindfulness through flowing yoga sequences.',
      image: 'https://images.pexels.com/photos/3984347/pexels-photo-3984347.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'CrossFit Challenge',
      time: '6:00 PM - 7:00 PM',
      duration: '60 minutes',
      capacity: '12 people',
      level: 'Advanced',
      instructor: 'David Kim',
      description: 'Functional fitness combining cardio, strength, and agility training.',
      image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Dance Fitness',
      time: '7:30 PM - 8:30 PM',
      duration: '60 minutes',
      capacity: '30 people',
      level: 'All Levels',
      instructor: 'Lisa Thompson',
      description: 'Fun, high-energy dance workouts that make fitness feel like a party.',
      image: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Boxing Bootcamp',
      time: '5:30 PM - 6:30 PM',
      duration: '60 minutes',
      capacity: '18 people',
      level: 'Intermediate',
      instructor: 'Carlos Martinez',
      description: 'Learn boxing techniques while getting an incredible full-body workout.',
      image: 'https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="classes" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fitness <span className="text-primary-600">Classes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join our diverse range of group fitness classes led by certified instructors. 
            Find the perfect workout that matches your schedule and fitness level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="bg-dark-950 rounded-lg overflow-hidden border border-dark-700 hover:border-primary-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {classItem.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{classItem.name}</h3>
                <p className="text-gray-400 mb-4">{classItem.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 text-primary-600 mr-3" />
                    <span className="text-sm">{classItem.time} ({classItem.duration})</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 text-primary-600 mr-3" />
                    <span className="text-sm">Max {classItem.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <TrendingUp className="w-4 h-4 text-primary-600 mr-3" />
                    <span className="text-sm">Instructor: {classItem.instructor}</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                  Book Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;