import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup,  } from "firebase/auth";
import auth from '../../Firebase/firebase';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider )
        .then(result => console.log(result))
    }

    const handleGithubLogin = () =>{
        signInWithPopup(auth, githubProvider )
        .then(result => console.log(result))
    }
    return (
        <div>
           <button onClick={handleGoogleLogin} className='btn mx-5'>Gpoogle Login</button>
           <button onClick={handleGithubLogin} className='btn'>Github Login</button>
        </div>
    );
};

export default Login;