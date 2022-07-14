import React from 'react';


import NavBar from "../components/NavBar";
import Header from "../components/Header";
import HotelList from "../components/HotelList";

//css files
import '../styles/homePage.scss'

import Main from "../components/Main";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div className='home'>
            <NavBar/>
            <Header/>
            <Main />
            <Footer/>
        </div>
    );
};

export default HomePage;
