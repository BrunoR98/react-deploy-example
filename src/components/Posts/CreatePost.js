import React, { useContext, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

//Styles
import './Posts.css';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

//Services
import axios from 'axios';

//Alert
import { postCreatedAlert } from '../Alerts/SuccessAlerts';

//Context
import UserContext from '../../contexts/UserContext';

export default function CreatePost () {
    const userContext = useContext(UserContext);

    const [title, setTitle]         = useState('');
    const [content, setContent]     = useState('');
    const [redirect, setRedirect]   = useState(false);

    const post = {
        title, 
        content,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3333/app/CreatePost', post)
        .catch(error => console.log(error.message));
        setRedirect(true);
        setTitle('');
        setContent('');
    }

    return(
        <div className='create-post-wrapper'>
            <div>
                <h3><AccountCircleIcon sx={{fontSize: '25px'}}/> {userContext.userLogin}</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <fieldset style={{border: 'none'}}>
                    <label htmlFor='title'>
                        <Input 
                            type='text'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            sx={{width: '95%'}}
                            placeholder='Title'
                            required 
                        />
                    </label>
                    <label htmlFor='content'>
                        <p className='create-post-content-header'>Content</p>
                        <TextField
                            type='text'
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            required
                            multiline
                            rows={8}
                            sx={{width: '95%'}}
                            placeholder='Content of your post..'
                            variant='filled'
                        />
                    </label>
                    <div className='create-post-btn'>
                    <IconButton aria-label='add-post' type='submit' onClick={() => {
                        if (title !== '' && content !== '') {
                            postCreatedAlert();
                        }
                    }}>
                        <AddBoxIcon sx={{ fontSize: '45px', color: '#5CD752' }}/>
                    </IconButton>
                    <Link to='/AllPosts'>
                        <IconButton aria-label='back' type='button'>
                            <ReplyAllOutlinedIcon fontSize='large'/>
                        </IconButton>
                    </Link>
                    </div>
                </fieldset>
            </form>
            {redirect && <Navigate to='/AllPosts' replace/>}
        </div>
    )
}