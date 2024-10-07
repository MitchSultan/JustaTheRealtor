import React from 'react';
import Navbar from '../components/Navbar';
import ContactPage from '../components/ContactPage';
// import CompHero from '../components/CompHero';
import Footer from '../components/Footer';

const Page = () => {
    return (
        <div>
            <Navbar />
            {/* <CompHero /> */}
            <ContactPage />
            <Footer />
        </div>
    );
}

export default Page;
