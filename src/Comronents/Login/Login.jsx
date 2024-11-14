import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';

const Login = () => {
    const { handleGoogleLogin, user } = useContext(authContext)
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Login</h3>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            {/* <img src={photoURL} /> */}
            <button onClick={handleGoogleLogin} className='btn'>Google Login</button>
        </div>
    );
};

export default Login;