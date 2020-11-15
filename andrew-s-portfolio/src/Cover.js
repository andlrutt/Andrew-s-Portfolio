import React from 'react';
import Name from './Name';
import './App.css';
import CoverImage from './Cover-image';

function Cover() {
    return(
        <div className="cover">
            <Name />
            <CoverImage />
        </div>
    )
}

export default Cover;