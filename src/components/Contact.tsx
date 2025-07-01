import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Fitness Street', 'Downtown District', 'New York, NY 10001']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@fitnessclub.com', 'support@fitnessclub.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Friday: 5:00 AM - 11:00 PM', 'Saturday - Sunday: 6:00 AM - 10:00 PM']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact us today for more information 
            about our memberships, classes, or personal training services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-400">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-dark-900 rounded-lg p-6 border border-dark-700">
              <h4 className="text-white font-semibold text-lg mb-4">Find Us</h4>
              <div className="bg-dark-800 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-400">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-900 rounded-lg p-8 border border-dark-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitMessage.includes('error') 
                  ? 'bg-red-600/20 text-red-400 border border-red-600/30' 
                  : 'bg-green-600/20 text-green-400 border border-green-600/30'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="classes">Group Classes</option>
                    <option value="facilities">Facilities Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-600 focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell us about your fitness goals and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-800 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;