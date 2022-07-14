import React from 'react';
import HotelList from "./HotelList";
import PropertyList from "./PropertyList";
import RecommendedHotelList from "./RecommenedHotelList";
import MailList from "./MailList";



const Main = () => {
    return (
        <main className="home-container">
            <HotelList/>
            <h1 className="home-title">Browse by property type</h1>
            <PropertyList/>
            <h1 className="home-title">Home guests love</h1>
            <RecommendedHotelList/>
            <MailList/>
        </main>
    );
};

export default Main;
