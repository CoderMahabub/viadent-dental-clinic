import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Service = ({ service }) => {
    const detail = <FontAwesomeIcon icon={faInfoCircle} />
    const { serviceId, sName, sImage, sDescription } = service;
    return (
        <Col>
            <Card className="py-3 service-card">
                <Card.Img className="service-img-top" variant="top" src={sImage} />
                <Card.Body>
                    <Card.Title className="fw-bold fs-4 pb-2">{sName}</Card.Title>
                    <Card.Text>
                        {sDescription.slice(0, 100)}....
                    </Card.Text>
                    <Link to={`/service/${serviceId}`}>
                        <button className="btn btn-primary rounded">{detail} Service Detail</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;