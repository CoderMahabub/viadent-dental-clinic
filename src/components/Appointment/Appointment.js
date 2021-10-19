import React, { useState } from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Appointment.css';

const Appointment = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <>
            <Row>
                <Col xs={6}>
                    <Toast className="bg-info" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Appointment Will Be Added</strong>
                            <small>Now....</small>
                        </Toast.Header>
                        <Toast.Body>Try to fill up all the fields for quick action </Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <div className="d-flex justify-content-center">

                <form className="shipping-form  bg-light p-5" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="fw-bold"><u>Appointment</u></h1>
                    <input defaultValue={user?.displayName} {...register("name")} />
                    <input defaultValue={user?.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" {...register("address")} />
                    <input placeholder="city" {...register("city")} />
                    <input placeholder="phone" {...register("phone")} />
                    <input onClick={() => setShow(true)} className="btn btn-primary" type="submit" />
                </form>

            </div>
        </>
    );
};

export default Appointment;