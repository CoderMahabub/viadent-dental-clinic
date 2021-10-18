import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [services] = useServices();
    const serviceDetail = services?.find(service => service.serviceId === Number(serviceId));

    return (
        <div>
            <h1>Service Detail({serviceId})</h1>
            <h2>{serviceDetail?.sDescription}</h2>
        </div>
    );
};

export default ServiceDetail;