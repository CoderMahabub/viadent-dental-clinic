import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { serviceId, sName, sImage, sDescription } = service;
    return (
        <Col>
            <Card className="py-3">
                <Card.Img className="service-img" variant="top" src={sImage} />
                <Card.Body>
                    <Card.Title className="fw-bold fs-4 pb-2">{sName}</Card.Title>
                    <Card.Text>
                        {sDescription.slice(0, 100)}
                    </Card.Text>
                    <Link to={`/service/${serviceId}`}>
                        <button className="btn btn-primary rounded">Service Detail</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;