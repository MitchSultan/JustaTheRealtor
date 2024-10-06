"use client";
import React, { useState } from 'react';
import { Search, MapPin, DollarSign, BookOpen, Phone, CheckCircle, Star } from 'lucide-react';

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
      {
        name: "John Smith",
        role: "Real Estate Investor",
        content: "Found my dream investment property through this platform. The detailed land reports saved me hours of research.",
        rating: 5
      },
      {
        name: "Sarah Johnson",
        role: "First-time Land Buyer",
        content: "The educational resources helped me understand the buying process. I felt confident making my first land purchase.",
        rating: 5
      },
      {
        name: "Mike Thompson",
        role: "Property Developer",
        content: "This site's market analysis tools are invaluable. I've closed multiple deals thanks to their insights.",
        rating: 4
      }
    ];
    return (
        <div>
            <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <p className="text-lg text-black mb-4 text-center italic">"{testimonials[activeTestimonial].content}"</p>
              <div className="text-center">
                <p className="font-semibold text-black">{testimonials[activeTestimonial].name}</p>
                <p className="text-black">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`mx-1 w-3 h-3 rounded-full ${
                    index === activeTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Testimonials;
