"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const blogPosts = [
        {
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            heading: "The Future of Real Estate Investment",
            date: "June 15, 2023",
            snippet: "Explore emerging trends in real estate investment and how they might shape the market in the coming years."
        },
        {
            image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMGFnZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            heading: "5 Tips for First-Time Land Buyers",
            date: "June 10, 2023",
            snippet: "Essential advice for those looking to make their first land purchase, from financing to legal considerations."
        },
        {
            image: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            heading: "Understanding Property Zoning Laws",
            date: "June 5, 2023",
            snippet: "A comprehensive guide to property zoning laws and how they affect land use and development."
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length);
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-black">Latest Real Estate News</h2>
                <div className="relative">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {isMobile ? (
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <img src={blogPosts[currentIndex].image} alt={blogPosts[currentIndex].heading} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-black">{blogPosts[currentIndex].heading}</h3>
                                    <p className="text-gray-600 mb-2">{blogPosts[currentIndex].date}</p>
                                    <p className="text-gray-800">{blogPosts[currentIndex].snippet}</p>
                                <Link href={`/blog/${blogPosts[currentIndex].id}`} className="text-blue-500 hover:text-blue-700">Read More</Link>
                                </div>
                            </div>
                        ) : (
                            blogPosts.map((post, index) => (
                                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                                    <img src={post.image} alt={post.heading} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2 text-black">{post.heading}</h3>
                                        <p className="text-gray-600 mb-2">{post.date}</p>
                                        <p className="text-gray-800">{post.snippet}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    {isMobile && (
                        <>
                            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                                <ChevronLeft className="text-gray-800" size={24} />
                            </button>
                            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                                <ChevronRight className="text-gray-800" size={24} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
