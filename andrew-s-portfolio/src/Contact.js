import React from 'react';
import {SocialIcon} from 'react-social-icons';


function Contact() {
    return (
        <footer className="contact">
            
            <div className="social-icons">
                <SocialIcon url="https://www.instagram.com/andyrewtn/" target="_blank" bgColor='lightslategray'/>
                <SocialIcon url="https://github.com/andlrutt?tab=repositories" target="_blank" bgColor='lightslategray'/>
            </div>
            <div className="contact-info">
                <a href ="mailto:andrewlorutter@gmail.com" target="_blank" rel="noreferrer">Email</a>
                <a href="tel:931-494-3566">931-494-3566</a>
                <p>Andrew Rutter</p>
            </div>
            <a class="anchor" id="contact" href="anchor">anchor</a>
            <div className="filler"></div>
        </footer>
    );
}

export default Contact;