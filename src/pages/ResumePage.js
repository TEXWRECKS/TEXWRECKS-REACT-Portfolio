import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/ResumePageCarousel';

function ResumePage(props){

    return(
        <div>
            <Hero title={props.title} />
            <Carousel />
        </div>
    );

}

export default ResumePage;