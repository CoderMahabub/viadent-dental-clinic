import React from 'react';
import './CustomerReview.css';
import { Carousel, Col, Row } from 'react-bootstrap';
import review from '../../Images/review.jpg';
import slider from '../../Images/slider.png';
import Alessia from '../../Images/testimonials/Alessia Morin.jpg';
import Dwayne from '../../Images/testimonials/Dwayne Lake.jpg';
import Oliver from '../../Images/testimonials/Oliver Gomez.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const CustomerReview = () => {
    const quote = <FontAwesomeIcon icon={faQuoteLeft} />
    return (
        <div className="my-4 pb-5 testimonialSlider">
            <Row className="row">
                <Col className="col-12 col-md-6 col-lg-6">
                    <img className="img-fluid" src={review} alt="" />
                </Col>
                <Col className="col-12 col-md-6 col-lg-6 testimonial py-4">
                    <h4 className="text-primary">Testimonial</h4>
                    <h2 className="fw-bold">What Customer Says</h2>
                    <b className="text-primary fs-2">{quote}</b>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider}
                                alt="First slide"

                            />
                            <Carousel.Caption className="text-dark">
                                <i>"Hospital staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends"</i>
                                <br />
                                <img className="pro-img" src={Dwayne} alt="" />
                                <h5 className="fw-bold">Alessia Morin</h5>
                                <p>HR Manager</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider}
                                alt="Second slide"
                            />

                            <Carousel.Caption className="text-dark">
                                <i>"viadent did a great job with my first ever health exam. She explained everything to me in a very clear manner. She was also kind and friendly. All of the staff was great – they were helpful, patient and helped with my insurance."</i>
                                <br />
                                <img className="pro-img" src={Alessia} alt="" />
                                <h5 className="fw-bold">Dwayne Lake</h5>
                                <p>Entrepreneur</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider}
                                alt="Third slide"
                            />

                            <Carousel.Caption className="text-dark">
                                <i>"Wonderful experience with (Clinic name). Dr. (Name) was a wonderful surgeon, and the staff was always helpful and kind. They ensured I had a smooth prep, surgery, and follow-up."</i>
                                <br />
                                <img className="pro-img" src={Oliver} alt="" />
                                <h5 className="fw-bold">Oliver Gomez</h5>
                                <p>SEO & Manager</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>
        </div>
    );
};

export default CustomerReview;