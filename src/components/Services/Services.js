import React from 'react';
import { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container py-5">
            <div className="py-5">
                <h4>Our Services</h4>
                <h1>What Service We Offer</h1>
                <span>At ViaDent Dental Clinic, we make caring for your smile convenient and have a wide array of treatments to meet all of your dental needs. In the following links, you can learn more about our dental services.</span>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.serviceId}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;