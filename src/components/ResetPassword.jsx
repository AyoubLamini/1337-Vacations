import React, { useState } from 'react';
import axios from 'axios'
export const ResetPassword = (props) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    var success = {};
    var failed = {
    outline : '1px solid #DE3163'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {email}
        const emailRegex = /^\S+@\S+\.\S+$/;
        // Email validation
        if (email.trim().length === 0) {
            setEmailError('email is required');
        }else if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
        }
        //----------------------------------------------------------- 
        axios.post('api/login', data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    console.log(emailError)

    return (
        <div className='auth-form-container'>
            <h2>A new password ?</h2>
        <form className='ResetPassword-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>email</label>
            <input style={emailError  == '' ? success  : failed} value={email} onChange={(e) => setEmail(e.target.value) + setEmailError('') } type='text' placeholder='youremail@gmail.com' id='email' name='email' />
            <div>
                {emailError == '' ? '' : <div className='error-message'>{emailError}</div>}
            </div>
            <div className='btns-div'>
            <button className='send-btn loginButton' type='submit'>Send Code</button>
            <button className='cancel-btn loginButton' onClick={() => props.onFormSwitch('login')}>Cancel</button>
            </div>
            
        </form>
        
    </div>
    )
}