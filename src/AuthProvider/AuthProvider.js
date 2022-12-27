import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth } from "firebase/auth";
export const authContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')

    const authInfo = {}

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;