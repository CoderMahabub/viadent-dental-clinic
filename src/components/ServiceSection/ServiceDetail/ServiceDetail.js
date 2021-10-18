import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [services] = useServices();
    const serviceDetail = services?.find(service => service.serviceId === Number(serviceId));

    return (
        <div className="bg-dark  py-5">
            <div className="container card mb-3 p-3 text-start">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={serviceDetail?.sImage} className="service-detail-img" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title text-primary fw-bolder">{serviceDetail?.sName}</h4>
                            <p className="card-text">{serviceDetail?.sDescription}</p>
                            <h5>Service Cost: <span className="text-danger rounded fw-bolder bg-dark px-2">$ {serviceDetail?.sPrice}</span></h5>
                            <h6>Total Meets Needed: <span className="text-light rounded fw-bolder bg-dark px-2">{serviceDetail?.sMeets}</span></h6>

                        </div>
                        <button className="btn btn-primary ms-3">Click here to book a service</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;