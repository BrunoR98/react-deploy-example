import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Styles
import './Home.css'
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Button } from '@mui/material';

//Context
import UserContext from '../../contexts/UserContext';

export default function Home () {
    const user = useContext(UserContext);
    
    return(
        <div className='home-wrapper'>
            <div className='home-btn'>
                <Link to='/Login' style={{ textDecoration: 'none' }}> 
                    <Button 
                        color='secondary' 
                        variant='outlined' 
                        size='medium' 
                        sx={{marginRight: '5px'}} 
                        startIcon={<LoginIcon />}
                        >
                        Log In
                    </Button>
                </Link>
                <Link to='/Register' style={{ textDecoration: 'none' }}> 
                    <Button 
                        color='secondary' 
                        variant='outlined' 
                        size='medium' 
                        startIcon={<AppRegistrationIcon />}
                        >
                        Register
                    </Button>
                </Link>
            </div>
            <div className='home-title'>
                <h1>Welcome, {user.userLogin}!</h1>
            </div>
            <div className='home-details'>
                <h3>For full access to the posts, please LogIn.</h3>
                <h3>If you don´t have an account, you can register now for free!</h3>
            </div>
        </div>
    )
}