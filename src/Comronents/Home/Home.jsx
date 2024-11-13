import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider,  } from "firebase/auth";
import auth from '../../Firebase/firebase';


const Home = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twiterProvider = new TwitterAuthProvider();


    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider )
        .then(result => console.log(result))
    }

    const handleGithubLogin = () =>{
        signInWithPopup(auth, githubProvider )
        .then(result => console.log(result))
    }

    const handleTwiterLogin = () =>{
        signInWithPopup(auth, twiterProvider)
        .then(result => console.log(result))
    }

    return (
        <div>
           <button onClick={handleGoogleLogin} className='btn mx-5'>Gpoogle Login</button>
           <button onClick={handleGithubLogin} className='btn mx-5'>Github Login</button>
           <button onClick={handleTwiterLogin} className='btn'>Github Login</button>
        </div>
    );
};

export default Home;