import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
export const authContext = createContext();
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, } from "firebase/auth";
import auth from '../../Firebase/firebase';

const MainLayout = () => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twiterProvider = new TwitterAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            // .then(result => console.log(result))
            .then(result => setUser(result.user))
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            // .then(result => console.log(result))
            .then(result => setUser(result.user))
    }

    const handleTwiterLogin = () => {
        signInWithPopup(auth, twiterProvider)
            // .then(result => console.log(result))
            .then(result => setUser(result.user))
    }


    const handleSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
    }

    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
    }





    const handleLogout = () => {
        signOut(auth)
            .then(res => console.log(res))
    }

    useEffect(() => {
        console.log("user state: ", user)
    }, [user])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if (currentUser == null) {
                alert('logout')
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
                alert("user login")
            }
        });
        return (() => {
            unsubscribe();
        })
    }, [])

    const authData = {
        handleGoogleLogin,
        handleGithubLogin,
        handleTwiterLogin,
        user,
        setUser,
        handleLogout,
        handleSignUp,
        handleSignIn,
    }

    return (
        <div>

            <authContext.Provider value={authData}>
                <div className='mt-10'>
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>
            </authContext.Provider>
        </div>
    );
};

export default MainLayout;