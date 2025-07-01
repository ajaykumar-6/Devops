import React from 'react';
import { Star, Award, Users } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: 'Sarah Johnson',
      specialty: 'HIIT & Weight Loss',
      experience: '8 years',
      certifications: ['NASM-CPT', 'HIIT Specialist'],
      rating: 4.9,
      clients: 250,
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Specializes in high-intensity workouts and sustainable weight loss programs.'
    },
    {
      name: 'Mike Chen',
      specialty: 'Strength Training',
      experience: '10 years',
      certifications: ['CSCS', 'Powerlifting Coach'],
      rating: 4.8,
      clients: 180,
      image: 'https://images.pexels.com/photos/3768920/pexels-photo-3768920.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in building muscle mass and improving overall strength through proven methods.'
    },
    {
      name: 'Emma Rodriguez',
      specialty: 'Yoga & Flexibility',
      experience: '6 years',
      certifications: ['RYT-500', 'Anatomy Specialist'],
      rating: 5.0,
      clients: 320,
      image: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Focuses on mind-body connection through yoga, meditation, and flexibility training.'
    },
    {
      name: 'David Kim',
      specialty: 'CrossFit & Functional',
      experience: '7 years',
      certifications: ['CF-L2', 'FMS Certified'],
      rating: 4.9,
      clients: 150,
      image: 'https://images.pexels.com/photos/3768918/pexels-photo-3768918.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Combines CrossFit methodology with functional movement patterns for real-world fitness.'
    },
    {
      name: 'Lisa Thompson',
      specialty: 'Dance & Cardio',
      experience: '5 years',
      certifications: ['ACE-CPT', 'Dance Fitness'],
      rating: 4.8,
      clients: 280,
      image: 'https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Makes fitness fun through dance-based workouts and high-energy cardio sessions.'
    },
    {
      name: 'Carlos Martinez',
      specialty: 'Boxing & MMA',
      experience: '12 years',
      certifications: ['Boxing Certified', 'MMA Coach'],
      rating: 4.9,
      clients: 120,
      image: 'https://images.pexels.com/photos/3768921/pexels-photo-3768921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Former professional boxer teaching technique, conditioning, and self-defense.'
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-dark-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expert <span className="text-primary-600">Trainers</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our certified fitness professionals are dedicated to helping you achieve your goals 
            with personalized guidance, expert knowledge, and unwavering motivation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-dark-900 rounded-lg overflow-hidden border border-dark-700 hover:border-primary-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  {trainer.rating}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-1">{trainer.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm mb-4">{trainer.bio}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Award className="w-4 h-4 text-primary-600 mr-3" />
                    <span className="text-sm">{trainer.experience} experience</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 text-primary-600 mr-3" />
                    <span className="text-sm">{trainer.clients}+ clients trained</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Certifications:</div>
                  <div className="flex flex-wrap gap-1">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-dark-700 text-primary-600 px-2 py-1 rounded text-xs"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;