import React, { useEffect, useReducer, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

//Styles
import './Posts.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

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
            <div className='all-post-header'>
                <h3><AccountCircleIcon sx={{fontSize: '25px'}}/> {userContext.userLogin}</h3>
            <Link to='/CreatePost' style={{ textDecoration: 'none', marginRight: '5px' }}>
                <Button 
                    variant='contained' 
                    startIcon={<AddCircleOutlineIcon/>}>
                    New post
                </Button>
            </Link>
            <Link to='/' style={{textDecoration: 'none'}}> 
                <Button 
                    variant='contained' 
                    color='warning' 
                    onClick={() => {userContext.logOut()}} 
                    startIcon={<LogoutIcon/>}>
                    Log Out
                </Button>
            </Link>
            </div>
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