import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';

const About = () => {
    const { user } = useContext(authContext)
    console.log(user)
    return (
        <div>
            <h2>About</h2>
        </div>
    );
};

export default About;