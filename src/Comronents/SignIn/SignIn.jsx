import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';

const SignIn = () => {
    const {handleSignIn} = useContext(authContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value

        handleSignIn(email, password)
        // console.log(email, passsword, confirmPassword)
    }

    return (
        <div>
             <form onSubmit={handleSubmit} action="" className='text-center'>
                Email <input className='border-2' type="email" name='email' placeholder='email' /><br /><br />
                Password <input className='border-2' type="password" name='password' placeholder='password' /><br /><br />
                <button onClick={handleSignIn} type='submit' className='btn'>SignIn</button>
            </form>
        </div>
    );
};

export default SignIn;