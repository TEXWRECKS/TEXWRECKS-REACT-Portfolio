import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import GregMalone2021_Resume from '../assets/images/GregMalone2021_Resume.PNG';
import Card from './ResumePageCard';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Greg Malone - 2021 Resume',
                    subTitle: 'Full Stack Developer & Continuous Improvement Specialist',
                    imgSrc: GregMalone2021_Resume,
                    href: "../assets/images/GregMalone2021_Resume.PNG",
                    selected: false
                },
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