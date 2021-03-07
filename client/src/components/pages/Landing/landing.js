import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";
import LogoImage from '../../assets/images/PrettyPalms-logo-no Background.png';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Landing() {
    return (
        <div className='landingSection' id='landing'>
            <Container className='container'>
                <Row>
                    <Col sm={12} md={{span:6, offset:3}}>
                        <div className='box01'>
                        <img src={ LogoImage } alt="prettyPalmsLogo" className="logoImage" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}>
                        <div className='box02'>
                            <h1> Website Coming Soon!
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;
