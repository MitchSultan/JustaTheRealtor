'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className="bg-gray-100">
  <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
    

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">
          <Image src="/images/logoo.png" alt="Justareal Logo" width={100} height={100} />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
         Get the best deals today with Justa. Just a phone call away.
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
       <li>
        <Link 
                href="/#" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              </li>
       <li>
        <Link 
                href="/about" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              </li>

        <li> <Link 
                href="/news" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                News
              </Link>
        </li>

        <li> <Link 
                href="/contact" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
        </li>

       
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; {currentYear} . All rights reserved. JustaTheRealtor
    </p>
  </div>
</footer>
        </div>
    );
}

export default Footer;
