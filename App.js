import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    title: "Greg Malone",
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Resume', path: '/resume' },
      { title: 'Contact', path: '/contact' },
    ],
    home: {
      title: "Making an impact",
      subTitle: "Excuses are the enemy of results",
      text: "Check out my projects!"
    },
    about: {
      title: "About Me"
    },
    resume: {
      title: "My Resume"
    },
    contact: {
      title: "Get In Touch"
    },
  }
}

  render(){
    return (
      <Router>
        <Container fluid={true}>
          <Navbar className="border-bottom" expand="lg">
            <Navbar.Brand className="nav-left">Greg Malone</Navbar.Brand>
            
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <NavDropdown title="Contact" id="basic-nav-dropdown">
                  <NavDropdown.Item  href="https://www.linkedin.com/in/gregory-malone">LinkedIn</NavDropdown.Item>
                  <NavDropdown.Item  href="https://github.com/TEXWRECKS">GitHub</NavDropdown.Item>
                  <NavDropdown.Item  href="atx76dragon@live.com">atx76dragon@live.com</NavDropdown.Item>
                  <NavDropdown.Item  href="#">512-961-0321</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} /> } />
          <Route path="/resume" render={() => <ResumePage title={this.state.resume.title} /> } />
          
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
