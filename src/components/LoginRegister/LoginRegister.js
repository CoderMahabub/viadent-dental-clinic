import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const LoginRegister = () => {
    const {
        error,
        handleRegistration,
        signInUsingGoogle,
        handleEmailChange,
        handlePasswordChange,
        toggleLogIn,
        isLoggedIn,
        success,
        handleResetPassword,
        handleNameChange,
        setError
    } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // Google Login Redirect to Destination URI
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="container w-50 my-4 bg-light rounded py-4 text-start text-dark">
            <p className="text-info text-center fw-bold fs-5">{success}</p>
            <h1 className="text-center text-primary fw-bolder"><u>Please {isLoggedIn ? 'LogIn' : 'Register'}</u></h1>
            <Form onSubmit={handleRegistration}>
                {!isLoggedIn && <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>FullName</Form.Label>
                    <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter Your Name" />
                </Form.Group>
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3 d-lg-flex justify-content-between align-items-center" controlId="formBasicCheckbox">
                    <Form.Check className="text-primary fw-bold" onChange={toggleLogIn} type="checkbox" label="Already Registered ?" />
                    {isLoggedIn && <Button className="btn btn-sm ms-1 mt-1" onClick={handleResetPassword} variant="dark">Reset Password</Button>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p className="text-danger text-center fw-bold">{error}</p>
                </Form.Group>
                <Button className="mx-auto" variant="success" type="submit">
                    {isLoggedIn ? 'LogIn' : 'Register'}
                </Button>
            </Form>
            <hr />
            <fieldset>You Can Also SignIn</fieldset>
            <button onClick={handleGoogleLogIn} className="btn btn-success text-center mt-1"> Login using Google</button>
        </div>
    );
};

export default LoginRegister;