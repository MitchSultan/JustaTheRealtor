import React from 'react'

export default function AboutJusta() {
  return (
    <div>
        <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am <br className="block sm:hidden" />JustaTheRealtor</h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">With over 15 years of dedicated experience in real estate, I've built my career on a foundation of expertise in land sales and property management. My journey in real estate has been driven by a passion for helping clients find the perfect land investments while ensuring their properties reach their full potential.
  </p>

                <p className="mt-4 text-xl text-gray-600 md:mt-8">
                    <span className="relative inline-block">
                        <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                        <span className="relative"> Have a question? </span>
                    </span>
                    <br className="block sm:hidden" />Ask me on <a href="#" title="" className="transition-all duration-200 text-green-500 hover:text-green-800 hover:underline">Whatsapp</a>
                </p>
            </div>

            <div className="relative">
                <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="/images/About-image.jpg" alt="" />
            </div>
        </div>
    </div>
</section>

    </div>
  )
}
