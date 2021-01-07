import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Setting up "Content" to house my About Me text to render on the About Page
function Content(props){

    return(
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={10}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )

}

export default Content;