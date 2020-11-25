import React, {useState} from 'react';
import PortfolioContent from './PortfolioContent';

function PortfolioButton(props) {

    const [isVisible, setVisible] = useState(false);

    const setVisibility = () => {
        setVisible(!isVisible);
    };

    return(

        <div>
        <a href="#bottom"><button onClick={setVisibility}>{props.title}</button></a>
        
        <div className={isVisible ? "" : "collapsed"}>
            <PortfolioContent image={props.image} desc={props.desc}/>        
        </div>
        
        </div>
    );


}

export default PortfolioButton;