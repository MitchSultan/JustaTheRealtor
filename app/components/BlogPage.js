"use client"
import React from 'react'
import Link from 'next/link'

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and start building modern web applications.",
    image: "https://example.com/nextjs-image.jpg",
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    excerpt: "Dive deep into React Hooks and improve your functional component skills.",
    image: "https://example.com/react-hooks-image.jpg",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips and Tricks",
    excerpt: "Discover powerful Tailwind CSS techniques to streamline your styling workflow.",
    image: "https://example.com/tailwind-image.jpg",
  },
]

export default function BlogPage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-blue-500 hover:text-blue-600 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
