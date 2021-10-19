import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className="container py-5" id="services">
            <div className="py-5">
                <h4 className="text-primary">Our Services</h4>
                <h1 className="fw-bold">What Service We Offer</h1>
                <span className="text-secondary">At ViaDent Dental Clinic, we make caring for your smile convenient and have a wide array of treatments to meet all of your dental needs. In the following links, you can learn more about our dental services.</span>
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