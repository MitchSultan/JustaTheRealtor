import React from 'react'

export default function AboutHero
() {
  return (
    <div>
        <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="/images/About-image.jpg"
            className="absolute z-10 inset-0 px-10 h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl text-black font-bold sm:text-3xl">
         About JustaTheRealtor who is a Land Specialist & Property Management Expert</h2>

          <p className="mt-4 text-gray-600">
            With over 15 years of dedicated experience in real estate, I've built my career on a foundation of expertise in land sales and property management. My journey in real estate has been driven by a passion for helping clients find the perfect land investments while ensuring their properties reach their full potential.
  My Approach</p>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
