import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
const PrivateRoute = ({ children, ...rest }) => {
    const { user, Loading } = useAuth();

    if (Loading) {
        return (
            <Spinner animation="border" variant="success" />
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ? children
                : <Redirect
                    to={{
                        pathname: "/login-register",
                        state: { from: location }
                    }}
                ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;