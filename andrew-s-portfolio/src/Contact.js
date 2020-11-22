import React from 'react';
import  ReactDOM  from  'react-dom';
import {SocialIcon} from 'react-social-icons';


function Contact() {
    return (
        <div className="contact">
            <div className="social-icons">
                <SocialIcon url="https://www.instagram.com/" />
                <SocialIcon url="https://github.com/" />
            </div>
            <div className="contact-info">
                <a href ="mailto:andrewlorutter@gmail.com">Email</a>
                <a href="tel:931-494-3566">931-494-3566</a>
            </div>
        </div>
    );
}

export default Contact;