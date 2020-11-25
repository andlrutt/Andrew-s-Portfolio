import React from 'react';
import AboutTitle from './AboutTitle';
import AboutContent from './AboutContent';

function About() {
    return (
        
        <div className="about">
            <a class="anchor" id="about" href="anchor">anchor</a>
            <AboutTitle />
            <AboutContent />
        </div>

    );
}

export default About;