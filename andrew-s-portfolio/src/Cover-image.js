import React from 'react';
import Image from './coverimage.png';

function CoverImage() {
    return (
        <div className="cover-image">
            <img id="cover-image-full" src={Image} alt=""></img>               
        </div>

    );
}

export default CoverImage;