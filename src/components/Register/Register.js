import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

//Styles
import './Register.css'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

//Alerts
import { successRegisterAlert } from '../Alerts/SuccessAlerts';
import { errorRegisterAlert } from '../Alerts/ErrorAlerts';

//Services
import axios from 'axios';

export default function Register() {
    const [redirect, setRedirect]           = useState(false);
    const [errorRedirect, setErrorRedirect] = useState(false);

    const [username, setUsername]   = useState('');
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');

    const user = {
        username,
        email,
        password
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.get('http://localhost:3333/app/Users')
                .then(response => {
                    for (let userDB of response.data) {
                        if(userDB.username === user.username) {
                            throw new Error('Username already exists.');
                        } else if (userDB.email === user.email) {
                            throw new Error('There is already an account with this email.');
                        } else if (userDB.password === user.password) {
                            throw new Error('Password already exists.');
                        }
                    }
                });

                try {
                    axios.post('http://localhost:3333/app/Register', user);
                    setRedirect(true);
                    successRegisterAlert();
                } catch (e) {
                    errorRegisterAlert(e.message);
                    setErrorRedirect(true);
                    return;
                }
                setUsername('');
                setEmail('');
                setPassword('');
        } catch (error) {
            errorRegisterAlert(error.message);
        }
    }
    
    return( 
        <div className='register-wrapper'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className='register-fieldset' style={{border: 'none'}}>
                    <label htmlFor='username'>
                        <p className='register-label'>Username</p>
                        <TextField
                            type='text'
                            label='Username'
                            variant='filled'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                    </label>
                    <label htmlFor='email'>
                        <p className='register-label'>Email</p>
                        <TextField
                            type='email'
                            label='Email'
                            variant='filled'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </label>
                    <label htmlFor='password'>
                        <p className='register-label'>Password</p>
                        <TextField
                            type='password'
                            label='Password'
                            color='warning'
                            variant='filled'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </label>
                </fieldset>
                <div className='register-btn'>
                    <IconButton aria-label='login' color='success' type='submit'>
                        <HowToRegOutlinedIcon fontSize='large'/>Register
                    </IconButton>
                    <Link to='/React-deploy-example'>
                        <IconButton aria-label='back' type='button'>
                            <ReplyAllOutlinedIcon fontSize='large'/>
                        </IconButton>
                    </Link>
                </div>
            </form>
            {redirect && <Navigate to='/login' replace/>}
            {errorRedirect && <Navigate to='/' replace/>}
        </div>
    )
}