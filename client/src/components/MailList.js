import React from 'react';


//css files
import '../styles/mailList.scss'

const MailList = () => {
    return (
        <div className='mail'>
            <h1 className="mail__title">Save time, save money!</h1>
            <span className='mail__description'>Sign up and we'll send you a letter</span>
            <div className="mail__inputContainer">
                <input type="text" placeholder='Your Email'/>
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;
