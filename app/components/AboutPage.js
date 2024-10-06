"use client"
import React from 'react';

const AboutPage = () => {
    return (
        <section className="about-section py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">About Her</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl text-black font-semibold mb-4">My Mission</h3>
                        <p className='text-black'>To provide innovative solutions that make a positive impact on people's lives.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl text-black font-semibold mb-4">My Vision</h3>
                        <p className='text-black'>To be a leading provider of innovative solutions that make a positive impact on people's lives.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl text-black font-semibold mb-4">My Values</h3>
                        <p className='text-black'>Integrity, innovation, and customer satisfaction are at the core of my business philosophy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
