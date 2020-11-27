import React, {useState} from 'react';
import PortfolioContent from './PortfolioContent';

function PortfolioButton(props) {

    const [isVisible, setVisible] = useState(false);

    const setVisibility = () => {
        setVisible(!isVisible);
    };

    return(

        <div>
        <button className="collapse-button" onClick={setVisibility}><span>{props.title}</span></button>
        <div className={isVisible ? "" : "collapsed"}>
            <PortfolioContent image={props.image} desc={props.desc}/>        
        </div>
        
        </div>
    );


}

export default PortfolioButton;