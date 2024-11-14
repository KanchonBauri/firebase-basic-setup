import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';

const Signup = () => {
const {handleSignUp} = useContext(authContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value
        if(password.length < 6){
            alert('password must be at least 6 characters')
            return;
        } 
        if(password != confirmPassword){
            alert('confirm password ditn`t match')
            return;
        } 
        handleSignUp(email, password)

        // console.log(email, passsword, confirmPassword)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="" className='text-center'>
                Email <input className='border-2' type="email" name='email' placeholder='email' /><br /><br />
                Password <input className='border-2' type="password" name='password' placeholder='password' /><br /><br />
                Confirm Password <input className='border-2' type="password" name='confirmPassword' placeholder='confirm passsword' /><br />
                <button type='submit' className='btn'>Signup</button>
            </form>
        </div>
    );
};

export default Signup;