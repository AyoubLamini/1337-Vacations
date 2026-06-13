import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // const [loginStatus, setLoginStatus] = useState('');

    var success = {};
    var failed = {
        outline : '1px solid #DE3163'
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const emailRegex = /^\S+@\S+\.\S+$/;
        // Email validation
        if (email.trim().length === 0) {
            setEmailError('email is required')
        }if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.') 
        }
        // Password validation
        if (pass.trim().length === 0) {
            setPassError('password is required') 
        }

    
     // Check if there are no errors before sending the post request   
    if(emailError === '' && passError === ''){
        const data = {
            email : email,
            password : pass
        }
        axios.post("http://localhost:3005/login", data) // Api Adress
        .then((response) => {
            if(response.data.message) {
                console.log(response.data.message);
            }else{
                console.log(response.data[0].email)
            }
            
        })
        // .catch((error) => {
        //     if (error.response) {
        //         setPassError('Invalid email or password')
        //     } else {
        //         console.log(error)
        //     }
        // })
    }
    }
    return (    
        <div className='auth-form-container'>
            <h2>Login</h2>
            <div className='login-form' >
                <label htmlFor='email'>email</label> 
                <input style={emailError  == '' ? success  : failed}  value={email} onChange={(e) => setEmail(e.target.value) + setEmailError('') }type='text' placeholder='youremail@gmail.com' id='email' name='email' />
                <div>
                    {emailError == '' ? '' : <div className='error-message'>{emailError}</div>}
                </div>
                <label htmlFor='password'>password</label>
                <input style={passError  == '' ? success : failed} value={pass} onChange={(e) => setPass(e.target.value) + setPassError('') } type={showPassword ? 'text' : 'password'}  placeholder='********' id='password' name='password' />
                <div className='show-pass'>
                <div>
                    { passError == '' ? '' : <div className='error-message'>{passError} </div>}
                </div>
                <label> <small>Show Password</small>  </label>
                <input type="checkbox" checked={showPassword} onChange={e => setShowPassword(e.target.checked)} />
                </div>
                <p className='link-btn' onClick={() => props.onFormSwitch('ResetPassword')}>Forgot passwrod ?</p>
                <button className='loginButton' onClick={handleSubmit}>Log In</button>
            </div>
            
        </div>
    )
}