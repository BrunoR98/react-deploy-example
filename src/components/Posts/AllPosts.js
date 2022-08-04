import React, { useEffect, useReducer, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

//Styles
import './Posts.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

//Components
import Post from './Post';

//Services
import axios from 'axios';

//Context
import UserContext from '../../contexts/UserContext';

function reducer(state, item) {
    return [...state, item];
}

export default function AllPosts() {
    const [allPosts, setAllPosts]   = useReducer(reducer, []);
    const [loading, setLoading]     = useState(true);
    const userContext = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
        axios.get('http://localhost:3333/app/AllPosts')
        .then(response => {
            for(let post of response.data) {
                setAllPosts(post);
            }
            setLoading(false);
        });
    }, [])
    
    if(loading) {
        return <h1>Loading all posts...</h1>
    }
        
    return(
        <div className='all-posts-wrapper'>
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to='/CreatePost' 
                                    style={{ 
                                        textDecoration: 'none',
                                        color:'black',
                                        fontFamily: 'Ibarra Real Nova',
                                        fontSize: '20px'
                                    }}>
                                    New post
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={() => {userContext.logOut()}}>
                                <Link to='/React-deploy-example' 
                                    style={{
                                        textDecoration: 'none',
                                        color:'black',
                                        fontFamily: 'Ibarra Real Nova',
                                        fontSize: '20px'
                                    }}>
                                    Log out
                                </Link>
                            </MenuItem>
                        </Menu>
                    </div>
                    <h3 className='all-post-header'>{userContext.userLogin}</h3>
                </Toolbar>
            </AppBar>
            <ul>
            {allPosts.map(post => (
                <li key={allPosts.indexOf(post) + 1}>
                    <Post
                        id={allPosts.indexOf(post) + 1} 
                        title={post.title}
                        content={post.content}
                    />
                </li>    
            ))}
            </ul>
        </div>
    )
}