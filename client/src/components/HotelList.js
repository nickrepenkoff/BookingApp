import React from 'react';


//css files
import '../styles/hotelList.scss'

const HotelList = () => {
    return (
        <div className='featured'>
            <div className="featured__item">
                <img className='featured__img' src="https://www.getpragueguide.com/img/gallery/shop/big_Get-Prague-Guide---Devil%C2%B4s-channel-5.jpg" alt="city image"/>
                <div className="featured__titles">
                    <h1>Prague</h1>
                    <h2>123 propetries</h2>
                </div>
            </div>
            <div className="featured__item">
                <img className='featured__img' src="https://images.adsttc.com/media/images/629c/d4fa/3e4b/31a7/1900/0006/newsletter/shutterstock_2092825747.jpg?1654445301" alt="city image"/>
                <div className="featured__titles">
                    <h1>Kyiv</h1>
                    <h2>123 propetries</h2>
                </div>
            </div>
            <div className="featured__item">
                <img className='featured__img' src="https://youimg1.tripcdn.com/target/01057120008k553yyCF03.jpg" alt="city image"/>
                <div className="featured__titles">
                    <h1>Minsk</h1>
                    <h2>123 propetries</h2>
                </div>
            </div>

        </div>
    );
};

export default HotelList;
