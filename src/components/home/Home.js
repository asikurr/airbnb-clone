import React from 'react';
import './home-style.css'
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className="home">
            {/* <h1>Home component</h1> */}
            <Banner/>
        </div>
    );
};

export default Home;