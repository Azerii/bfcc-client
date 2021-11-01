import FaqsEnquiry from 'components/FAQS/FaqsEnquiry';
import FaqsHeader from 'components/FAQS/FaqsHeader';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';


const FAQ = () => {
    return (
        <>
            <Navbar />
            <FaqsHeader />
            <FaqsEnquiry />
            <Footer />
        </>
    )
}

export default FAQ
