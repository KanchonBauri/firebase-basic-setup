import React from 'react';
import { GoogleAuthProvider, signInWithPopup,  } from "firebase/auth";
import auth from '../../Firebase/firebase';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider )
        .then(result => console.log(result))
    }
    return (
        <div>
           <button onClick={handleGoogleLogin} className='btn'>Gpoogle Login</button>
        </div>
    );
};

export default Login;