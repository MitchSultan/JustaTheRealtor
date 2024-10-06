import React from 'react'
import Link from 'next/link'
import { blogPosts } from '../blogData'

export default function FeaturedPosts() {
  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
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