import React from 'react';
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutPage from '../components/AboutPage';
// import AboutJusta from '../components/AboutJusta';
import Footer from '../components/Footer';

const Page = () => {
    return (
        <div>
            <Navbar />
            <AboutHero/>
            <AboutPage />
            {/* <AboutJusta /> */}
            <Footer />
        </div>
    );
}

export default Page;
