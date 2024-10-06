"use client";
import React, { useState } from 'react';
import { Search, MapPin, DollarSign, BookOpen, Phone, CheckCircle, Star } from 'lucide-react';

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
      {
        name: "John Rotich",
        role: "Real Estate Investor",
        content: "Working with Justa was an absolute game-changer in our home-buying journey. Her deep knowledge of the local market, combined with her uncanny ability to understand exactly what we were looking for, made the entire process seamless. What truly sets Justa apart is her dedication to building genuine relationships with her clients. She made the entire process feel like a partnership, rather than just another transaction. I'm thrilled with my new home and the experience I had working with Justa.",
        rating: 5
      },
      {
        name: "Sarah Wambui",
        role: "First-time Land Buyer",
        content: "In the competitive world of real estate, having Justa by your side is like having a secret weapon. Her negotiation skills are unparalleled, but what really impressed me was her commitment to ensuring I felt supported throughout the entire selling process. She took the time to understand my needs, provided honest feedback, and always had my best interests at heart. I couldn't be happier with the outcome and the experience I had working with Justa.",
        rating: 5
      },
      {
        name: "Mike Too",
        role: "Property Developer",
        content: "As a first-time homebuyer, the process was overwhelming. Enter Justa - a true professional who transformed our experience from daunting to delightful. Her attention to detail, proactive communication, and genuine care for her clients are unmatched. Justa went above and beyond, not just in finding us the perfect home, but in educating us about the entire process. We couldn't be happier with our decision to work with Justa. We've already recommended her to our friends and family, and will continue to do so.",
        rating: 5
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
