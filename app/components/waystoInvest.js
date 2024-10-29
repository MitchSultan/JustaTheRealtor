import React from 'react';

const WaystoInvest = () => {
    return (
        <div>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-3xl font-bold sm:text-4xl">Ways to Invest</h2>

        <p className="mt-4 text-gray-600">
        With a proven track record of delivering 15% average annual returns in Kenyan real estate over the past decade, our investment strategy combines prime property locations with rigorous due diligence and professional management. Our diverse portfolio spans residential developments in high-growth areas like Kilimani and commercial properties in Westlands, backed by transparent reporting and a dedicated team of real estate experts who monitor every investment daily
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          

          <h2 className="mt-2 font-bold">Mutual funds</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Participate in online platforms that pool investments.Lower minimum investment requirements.Diversification across multiple properties
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
         

          <h2 className="mt-2 font-bold">Real Estate Investment Groups (REIGs)</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Join or form investment groups where members pool resources. Allows for larger investments with shared risk

          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          

          <h2 className="mt-2 font-bold">Real Estate Investment Trusts (REITs)</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Invest in listed REITs on the Nairobi Securities Exchange. Provides liquidity and professional management
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          

          <h2 className="mt-2 font-bold">Property Development</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Build residential or commercial properties. Partner with contractors and architects

          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          

          <h2 className="mt-2 font-bold">Buy-to-Let Properties</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Purchase properties specifically for rental income.Focus on areas with high rental demand. Student housing near universities
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          

          <h2 className="mt-2 font-bold">Direct Property Purchase</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Buy land or developed properties in growing areas like Nairobi, Mombasa, or satellite towns.Focus on residential properties, commercial spaces, or undeveloped land

          </p>
        </a>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default WaystoInvest;
