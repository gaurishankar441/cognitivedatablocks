import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedGradient from "@/components/ui/AnimatedGradient";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <AnimatedGradient className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Have a project in mind? Let's discuss how we can help bring your ideas to life.
              </p>
            </div>
          </div>
        </AnimatedGradient>

        {/* Contact Information and Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="glass rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-techpurple-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                      <p className="text-gray-600">
                        841, 1st Block, Solaris Business Hub, Nr. Parshwanath Jain Mandir Bhuyangdev, Sola Rd, Ahmedabad, Gujarat 380013
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-techpurple-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        info@cognitivedatablocks.com<br />
                        support@cognitivedatablocks.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-techpurple-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                      <p className="text-gray-600">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Send a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-techpurple-500 focus:border-transparent transition"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-techpurple-500 focus:border-transparent transition"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-techpurple-500 focus:border-transparent transition"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-techpurple-500 focus:border-transparent transition"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-techblue-600 to-techpurple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Find Us</h2>
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.584435096247!2d72.5298091756955!3d23.073763013558602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83417ead915b%3A0xfdcfc6cf89f1dab0!2sSolaris!5e0!3m2!1sen!2sin!4v1714680280323!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
