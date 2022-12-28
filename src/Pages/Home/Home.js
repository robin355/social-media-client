import React from 'react';
import PrivateRoutes from '../../Routes/PrivateRoutes';
import Apparea from './Apparea/Apparea';
import Banner from './Banner/Banner';
import FirstSection from './firstSection/FirstSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FirstSection></FirstSection>
            <Apparea></Apparea>
        </div>
    );
};

export default Home;