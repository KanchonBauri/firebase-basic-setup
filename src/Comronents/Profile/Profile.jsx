import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(authContext)
    if(!user){
        console.log('user not available');
        alert('user not available plase sign in');
        return <Navigate to="/signin"></Navigate>
    }
    return (
        <div>
            <h3>Profile</h3>
        </div>
    );
};

export default Profile;