import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Services from '../ServiceSection/Services/Services';
import WhyWe from '../WhyWe/WhyWe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CustomerReview></CustomerReview>
            <WhyWe></WhyWe>
        </div>
    );
};

export default Home;