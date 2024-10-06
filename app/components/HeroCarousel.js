"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Search, MapPin, DollarSign, BookOpen, Phone, CheckCircle, Star } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Find Your Perfect Plot of Land",
      description: "Discover premium land opportunities vetted by experts",
      cta: "Start Searching",
      bgImage: "/images/hero6.jpeg",
      complementaryImage: "/images/hero5.jpeg"
    },
    {
      title: "Invest in Your Future",
      description: "Secure prime real estate for long-term growth",
      cta: "Explore Investments",
      bgImage: "/images/hero3.jpeg",
      complementaryImage: "/images/hero4.jpeg"
    },
    {
      title: "Build Your Dream Home",
      description: "Find the ideal location for your custom-built house",
      cta: "View Locations",
      bgImage: "/images/hero5.jpeg",
      complementaryImage: "/images/hero6.jpeg"
    },
    {
      title: "Expert Guidance Every Step",
      description: "Our team of professionals is here to assist you",
      cta: "Meet Our Experts",
      bgImage: "/images/hero7.jpeg",
      complementaryImage: "/images/hero8.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="container mx-auto h-full flex items-center justify-between px-4">
            <div className="text-white max-w-lg">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8">{slide.description}</p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors">
                {slide.cta}
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src={slide.complementaryImage}
                alt="Complementary"
                className="max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;