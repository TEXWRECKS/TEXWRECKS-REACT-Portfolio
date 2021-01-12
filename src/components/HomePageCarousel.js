import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import RandomRecipeGenerator from '../assets/images/RandomRecipeGenerator.png';
import ListlyApp from '../assets/images/ListlyApp.png';
import ResponsivePortfolio from '../assets/images/ResponsivePortfolio.png';
import WorkDayScheduler from '../assets/images/WorkDayScheduler.png';
import Stockify from '../assets/images/Stockify.PNG'
import Card from './HomePageCard';

// Setting up a Carousel component which will 
class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Stockify',
                    subTitle: 'Save Amazon products for instant price or availability change notifications',
                    imgSrc: Stockify,
                    link: "https://stockifyamzn.herokuapp.com/",
                    selected: false
                },
                {
                    id: 1,
                    title: 'Random Recipe Generator',
                    subTitle: 'Recipes on the fly',
                    imgSrc: RandomRecipeGenerator,
                    link: "https://emgal-aguirre.github.io/Recipe-Generator/",
                    selected: false
                },
                {
                    id: 2,
                    title: 'Responsive Portfolio',
                    subTitle: 'Only using Javascript, CSS, and HTML',
                    imgSrc: ResponsivePortfolio,
                    link: "https://texwrecks.github.io/02---Responsive-Portfolio/",
                    selected: false
                },
                {
                    id: 3,
                    title: 'Listly',
                    subTitle: 'Create and categorize to-do lists',
                    imgSrc: ListlyApp,
                    link: "https://github.com/TEXWRECKS/Listly",
                    selected: false
                },
                {
                    id: 4,
                    title: 'Work Day Scheduler',
                    subTitle: 'Schedule your work day!',
                    imgSrc: WorkDayScheduler,
                    link: "https://texwrecks.github.io/05---Day-Planner/",
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