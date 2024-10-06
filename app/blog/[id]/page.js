import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function BlogPost({ params }) {
  return (
    <div>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold mb-4">Blog Post {params.id}</h1>
      <p>This is the content of blog post with ID: {params.id}</p>
    </div>
    <Footer/>
    </div>
  )
}