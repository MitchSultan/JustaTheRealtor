"use client";
import React, { useState } from 'react';
import { Search, MapPin, DollarSign, BookOpen, Phone, CheckCircle, Star } from 'lucide-react';


const NewProperty = () => {
    return (
        <div>
            <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold mb-8 text-center">Featured Land Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={`https://images.pexels.com/photos/3013440/pexels-photo-3013440.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="Land" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl text-black font-semibold mb-2">Premium Land Parcel {item}</h3>
                  <div className="flex items-center mb-2">
                    <MapPin className="text-green-600 mr-2" size={18} />
                    <span className='text-black'>Location {item}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <DollarSign className="text-green-600 mr-2" size={18} />
                    <span className="text-lg font-bold text-black">${(Math.random() * 100000 + 50000).toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        </div>
    );
}

export default NewProperty;
