import React from 'react';
import './WhyWe.css';
import { Card, CardGroup } from 'react-bootstrap';
import icon1 from '../../Images/icons/1.png';
import icon2 from '../../Images/icons/2.png';
import icon3 from '../../Images/icons/3.png';

const WhyWe = () => {
    return (
        <div id="about" className="bg-light pb-5 px-5">
            <div className="py-5">
                <h4 className="text-primary">Why Choose Us</h4>
                <h1 className="fw-bold">Key To Success</h1>
                <span className="text-secondary">At ViaDent Dental Clinic, we make caring for your smile convenient and have a wide array of treatments to meet all of your dental needs.</span>
            </div>
            <CardGroup>
                <Card className="py-3 mx-2">
                    <Card.Img className="mx-auto d-block" variant="top" src={icon1} />
                    <Card.Body>
                        <Card.Title>Satisfaction Guarantee</Card.Title>
                        <Card.Text>
                            You can check our review section. You will understand how much satisfied they are.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="py-3 mx-2">
                    <Card.Img variant="top" src={icon2} />
                    <Card.Body>
                        <Card.Title>Awesome Technology</Card.Title>
                        <Card.Text>
                            We have highly decorated important and valuable equipments to give you service.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="py-3 mx-2">
                    <Card.Img variant="top" src={icon3} />
                    <Card.Body>
                        <Card.Title>Professional Dentist</Card.Title>
                        <Card.Text>
                            Most importantly, we have high profile with kind hearted doctors for your treatment.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    );
};

export default WhyWe;