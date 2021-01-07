import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './AboutPageCard';

// Importing all of the images for use on this page
// import Bridge from '../assets/images/360Bridge.png';
import AustinFC from '../assets/images/AustinFC.png';
// import BartonCreek from '../assets/images/BartonCreek.png';
// import Brody from '../assets/images/Brody.png';
// import Chicago from '../assets/images/Chicago.png';
// import Colorado from '../assets/images/Colorado.png';
// import ColorFestival from '../assets/images/ColorFestival.png';
// import Dance from '../assets/images/Dance.png';
// import DateNight2 from '../assets/images/DateNight2.png';
// import Halloween from '../assets/images/Halloween.png';
// import Heat from '../assets/images/Heat.png';
// import LakeLBJ from '../assets/images/LakeLBJ.png';
// import Still from '../assets/images/Still.png';
// import Sunlight from '../assets/images/Sunlight.png';
// import TakeTheKidsToWorkDay from '../assets/images/TakeTheKidsToWorkDay.png';

// Rendering these images in a Carousel component which will share the screen on the same row as props.children (AboutMe content) in the Container below
class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // setting up the images in an items array
            items: [
                // {
                //     id: 0,
                //     title: '360Bridge',
                //     imgSrc: Bridge,
                //     selected: false
                // },
                {
                    id: 1,
                    title: 'AustinFC',
                    imgSrc: AustinFC,
                    selected: false
                },
                // {
                //     id: 2,
                //     title: 'BartonCreek',
                //     imgSrc: BartonCreek,
                //     selected: false
                // },
                // {
                //     id: 3,
                //     title: 'Brody',
                //     imgSrc: Brody,
                //     selected: false
                // },
                // {
                //     id: 4,
                //     title: 'Chicago',
                //     imgSrc: Chicago,
                //     selected: false
                // },
                // {
                //     id: 5,
                //     title: 'Colorado',
                //     imgSrc: Colorado,
                //     selected: false
                // },
                // {
                //     id: 6,
                //     title: 'ColorFestival',
                //     imgSrc: ColorFestival,
                //     selected: false
                // },
                // {
                //     id: 7,
                //     title: 'Dance',
                //     imgSrc: Dance,
                //     selected: false
                // },
                // {
                //     id: 8,
                //     title: 'DateNight2',
                //     imgSrc: DateNight2,
                //     selected: false
                // },
                // {
                //     id: 9,
                //     title: 'Halloween',
                //     imgSrc: Halloween,
                //     selected: false
                // },
                // {
                //     id: 10,
                //     title: 'Heat',
                //     imgSrc: Heat,
                //     selected: false
                // },
                // {
                //     id: 11,
                //     title: 'LakeLBJ',
                //     imgSrc: LakeLBJ,
                //     selected: false
                // },
                // {
                //     id: 12,
                //     title: 'Still',
                //     imgSrc: Still,
                //     selected: false
                // },
                // {
                //     id: 13,
                //     title: 'Sunlight',
                //     imgSrc: Sunlight,
                //     selected: false
                // },
                // {
                //     id: 14,
                //     title: 'TakeTheKidsToWorkDay',
                //     imgSrc: TakeTheKidsToWorkDay,
                //     selected: false
                // },
            ]
        }
    }

    handleCardClick = (id, card) => {
        // gets all the items
        let items = [...this.state.items];
        // inside the array of items, go to the one with the same id of the card clicked on to toggle the selected property/argument
        items[id].selected = items[id].selected ? false : true;
        // loop through the array of id's to determine if an id is not the selected id, then it is false
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        // Makes this persist (a thing)
        this.setState({
            items
        });
    }

    makeItems = (items) =>  {
       return items.map(item => {
           return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
       }) 
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;