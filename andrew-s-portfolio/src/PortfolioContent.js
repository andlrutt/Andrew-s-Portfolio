import React from 'react';



function PortfolioContent(props) {

    

    return(
        <div className="portfolio-content">
            <img src={props.image} alt=""></img>
            <p>{props.desc}</p>
            <div id="jumps"></div>
        </div>

    );
}

export default PortfolioContent;