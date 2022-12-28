import React from 'react';
import PrivateRoutes from '../../Routes/PrivateRoutes';
import Apparea from './Apparea/Apparea';
import Banner from './Banner/Banner';
import FirstSection from './firstSection/FirstSection';
import SecondSection from './SecondSection/SecondSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <Apparea></Apparea>
        </div>
    );
};

export default Home;