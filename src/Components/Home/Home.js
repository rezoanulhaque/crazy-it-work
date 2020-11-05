import React from 'react';
import Header from '../Header/Header';
import HomeBody from '../HomeBody/HomeBody';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <HomeBody></HomeBody>
        </div>
    );
};

export default Home;