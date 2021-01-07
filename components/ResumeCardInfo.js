import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props){

    const style = useSpring({opacity: 1, from : {opacity: 0}});

    return(
        <animated.div className="r-card-info" sytle={style}>
            <p className="r-card-title">{props.title}</p>
            <p className="r-card-sub-title">{props.subTitle}</p>
        </animated.div>
    )

}

export default CardInfo;