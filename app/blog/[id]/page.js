
import React from 'react'
import { notFound } from 'next/navigation'
import Navbar from '../../components/Navbar'

import { blogDatas } from '../../blogData'
// import { useRouter } from 'next/router'
import Footer from '../../components/Footer'

async function getBlogPost(slug) {
  // Simulating an API call
  // await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock data
  const posts = {
    'my-first-post': { title: 'My First Post', content: 'This is my first blog post!' },
    'another-post': { title: 'Another Post', content: 'This is another blog post.' }
  }
  
  return posts[slug] || null
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug)

  // if (!post) {
  //   notFound()
  // }



// export default function BlogData({ params }) {
//   // const router = useRouter()
//   // const { id } = router.query
//   const post = blogDatas.find(post => post.id === params.id)
//   if (!post){
  //   return <div className='text-3xl text-black'>not found</div>
  // }
  return (
    <div>
    <Navbar/>
    <div className="container mx-auto px-4 py-8 min-h-screen bg-white">
      <div className=' lg:flex gap-2'>
        <div className='lg:flex justify-center align-middle'>
        <h1 className="text-3xl font-bold mb-4"> the heading{params.title}</h1></div>
        <div>
          <img>{params.image}</img>
        </div>
      </div>
      <p> {params.content}</p>
    </div>
    <Footer/>
    </div>
  )
}
export function getStaticPaths() {
  const paths = blogDatas.map(post => ({
    params: { id: post.id.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}

// export function ({ params }) {
//   const post = blogPosts.find(post => post.id === params.id)
//   return {
//     props: {
//       params: post
//     }
//   }
// }

// export function generateStaticParams({ params }) {
//   const post = blogDatas.find(post => post.id === params.id)
//   return {
//     props: {
//       params: post
//     }
//   }
// }