import React from 'react';
import PortfolioButton from './PortfolioButton';
import Image1 from './lightswitch.jpg';



function Portfolio() {

    const content = [
        {title: "Remote Control Lightswitch", image: Image1, desc: "A remote control lightswitch made using a remote ssh connection"},
    ];

    return (
        <div className="portfolio">
            <a class="anchor" id="portfolio" href="anchor">anchor</a>
            {content.map(contents => (
                <PortfolioButton title={contents.title} image={contents.image} desc={contents.desc}/>
            ))}
            
        </div>
    )
}

export default Portfolio;