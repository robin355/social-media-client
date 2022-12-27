import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { user } = useContext(authContext)
    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

};

export default PrivateRoutes;