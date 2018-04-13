import React from 'react';
import {
    Card, CardHeader, CardBody, Row, Col,Jumbotron , CardText, CardTitle , CardSubtitle, CardDeck
} from 'reactstrap';

import { CardAuthor, CardSocials } from 'components';

import userBackground from 'assets/img/bg5.jpg';
import userAvatar from 'assets/img/avatar.jpg';


class About extends React.Component{
    render(){
        return (
            <div>
                <div className="content">
                <CardDeck>
                    <Row>
                        <Col md={8} xs={12}>
                            <Jumbotron Body outline color="warning" className="lead rounded img-raised">
                                <CardHeader>
                                    <h5 className="title">About The Founder</h5>
                                </CardHeader>
                                <CardBody >
                                <CardTitle>Personal Data</CardTitle>
                                    <CardText>
                                        Mohamed Abdeen Mohamed Ahmed<br/>
                                        25/09/1994, Male, Single<br/>
                                        Nationality: Sudan<br/>
                                        Residence: Sudan<br/>
                                        Sal-ha-Omdurman-Khartoum state<br />
                                        0915775147<br />
                                        mohamed0group@gmail.com<br/>
                                    </CardText>
                                    <CardSubtitle>Skills</CardSubtitle>                                
                                    <CardText>
                                        HTML5
                                        CSS3
                                        JAVASCRIPT<br/>
                                        BOOTSTRAP
                                        REACT JS
                                        REDUX
                                        REACTSTRAP
                                        WEBPACK
                                    </CardText>
                                    <CardSubtitle>Summary</CardSubtitle>                                
                                    <CardText>
                                        The publisher dedicated to meeting the information needs of IT professionals, developers, and tech enthusiasts worldwide.
                                    </CardText>
                                    <CardSubtitle>Education</CardSubtitle>                                
                                    <CardText>
                                        2017, Sudan, Nile valley University<br/>
                                        Degree: Bachelors<br/>
                                        Major: Mechanical Engineering & Web Devolopment<br/>
                                    </CardText>
                                    <CardSubtitle>Achievements</CardSubtitle>                                
                                    <CardText>
                                        my-first-app<br/>
                                        Ace Group<br/>
                                        Ace Books<br/>
                                    </CardText>    
                                    <CardSubtitle>Languages</CardSubtitle>                                
                                    <CardText>
                                        Arabic: ( Excellent )<br/>
                                        English: ( Excellent )<br/>
                                        Japanese: ( Good )<br/>
                                        Spanish:( Fair )
                                    </CardText>    
                                </CardBody>
                            </Jumbotron>
                        </Col>
                        <Col md={4}  xs={12}>
                            <Card className="lead card-user">
                                <div className="image">
                                    <img src={userBackground} alt="..."/>
                                </div>
                                <CardBody>
                                    <CardAuthor
                                        avatar={userAvatar}
                                        avatarAlt="..."
                                        title="Mohamed Abdeen"
                                        description="Ace Group Founder"
                                    />
                                    <p className="description text-center">
                                        "Ace Group <br/>
                                        opening new branch  <br/>
                                        Ace Books for reader & leaders"
                                    </p>
                                </CardBody>
                                <hr />
                                <CardSocials
                                    size="lg"
                                    socials={[
                                        {
                                            icon: "fab fa-facebook-f",
                                            href: "https://www.facebook.com/"
                                        },
                                        {
                                            icon: "fab fa-twitter",
                                            href: "https://www.facebook.com/"
                                        },
                                        {
                                            icon: "fab fa-google-plus-g",
                                            href: "https://plus.google.com/discover"
                                        },
                                    ]}
                                />
                            </Card>
                        </Col>
                    </Row>
                    </CardDeck>                    
                </div>
            </div>
        );
    }
}

export default About;
