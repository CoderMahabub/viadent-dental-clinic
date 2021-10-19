import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Appointment.css';

const Appointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="d-flex justify-content-center  bg-dark">

            <form className="shipping-form  bg-light p-5" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="fw-bold"><u>Appointment</u></h1>
                <input defaultValue={user?.displayName} {...register("name")} />
                <input defaultValue={user?.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" {...register("address")} />
                <input placeholder="city" {...register("city")} />
                <input placeholder="phone" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Appointment;