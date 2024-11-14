import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';

const Home = () => {
    const contextValue = useContext(authContext);
    // console.log(contextValue);
    const { handleGoogleLogin, handleGithubLogin, handleTwiterLogin, handleLogout } = contextValue;

    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn mx-5'>Gpoogle Login</button>
           <button onClick={handleGithubLogin} className='btn mx-5'>Github Login</button>
           <button onClick={handleTwiterLogin} className='btn mx-5'>Github Login</button>
           <button onClick={handleLogout} className='btn mx-5'>logout</button>
        </div>
    );
};

export default Home;