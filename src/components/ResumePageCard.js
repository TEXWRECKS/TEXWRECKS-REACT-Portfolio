import React from 'react';

import CardInfo from './ResumeCardInfo';


function Card(props){

    return(
        <div className="r-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="r-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    )

}

export default Card;