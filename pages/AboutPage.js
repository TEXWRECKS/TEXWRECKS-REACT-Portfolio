import React from 'react';
import Content from '../components/Content';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/Hero';
import Carousel from '../components/AboutPageCarousel';


function AboutPage(props){

    return(
        <div>
            <Hero title={props.title} />
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={5}>
                        <Carousel />
                    </Col>
                    <Col md={5}>
                        <Content>
                        <h3>
                        Hi!  I'm Greg Malone, and I'm a Full-Stack Developer, Continuous Improvement Specialist, and a family man!
                        </h3>
                        <p>
                        I love working with others to improve processes and tooling for better efficiency, mainly because I like seeing people succeed.  I've always felt like, if I'm helping you succeed, then I'm helping myself succeed.
                        </p>
                        <p>
                        My greatest strengths are my ability to develop strong working relationships, communicate to any audience, work with cross functional teams to accomplish business goals, work independently, my tenacity and drive to accomplish tasks in a timely manner, and last but certainly not least, my perseptiveness and empathy towards others.
                        </p>
                        <br></br>
                        <p>
                        I'm also a sports fanatic, fitness enthusiast, video gamer, dog lover, and a movie and music junkie!  I love anything Texas Longhorns related, Dallas Cowboys, Dallas Mavericks, Dallas Stars, and am stoked about Austin FC being the newest member of the MLS!  Fitness enthusiast may be a stretch, because I do not enjoy making the decision to work out, but I always love how I feel afterwards.  I grew up swimming, playing soccer, and running competitively since I was three years old, so luckily as an adult who doesn't want to but knows he has to, having that built in knowledge really helps push me farther in my workouts.  I love any dog if it stands shoulder height at least up to my knees.  You can wrestle with them, play with them, and cuddle with them in so many ways you can't with a small dog.  I take my dog (Brody) on runs as much as I can, and always take him out to throw the tennis ball for him (his favorite pasttime.)  Musically, I like just about everything under the sun.  My favorite band all-time is Rage Against The Machine.  My favorite bands growing up were Run-DMC and Guns N Roses.  I like all genres (I don't discreminate).
                        </p>
                        <p>
                        I love movie nights on the weekends with the beautiful wife and kids, getting out for a nice drive or going on vacations with the family when and where we can, going camping in new places, and visiting friends (if even in a socially distanced capacity).
                        </p>
                        <p>
                        I also love playing basketball with my son, and throwing the football and kicking the soccer ball around with my son.
                        </p>
                        <p>
                        My kids love sparring (jiu jitsu) with me when they still have the mats out and I am free, and my dog loves playing tug of war with me, going for runs with me, and fetching the tennis ball relentlessly.
                        </p>
                        <p>
                        Date nights with my wife are very special, and always a blast, and I have a pretty cool story to tell on how she and I met if you ever get to know me more!
                        </p>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default AboutPage;