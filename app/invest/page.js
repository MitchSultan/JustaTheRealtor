import React from 'react';
import Navbar from '../components/Navbar';
import MortgageCalculator from '../components/morgage-calc';
import NewProperty from '../components/NewProperty';
import WaystoInvest from '../components/waystoInvest';
import Footer from '../components/Footer';

const Page = () => {
    return (
        <div className='p-2'>
            <Navbar />
            <section
  className="relative bg-[url(https://images.unsplash.com/photo-1444676632488-26a136c45b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 lg:justify-around"
  >
    <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-bold sm:text-5xl">
        Let us find your

        <strong className="block font-bold text-green-600"> Forever Home. </strong>
      </h1>

      <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
      Take advantage of home purchase loan to own your own property. You can borrow up to KES 100 million, with up to 100% financing and a long tenor of up to 25 years
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
        >
          Learn More
        </a>

        
      </div>
    </div>
    <div>
        <MortgageCalculator />
    </div>
  </div>
</section>
            <WaystoInvest />
            <NewProperty />
            <Footer />
        </div>
    );
}

export default Page;
