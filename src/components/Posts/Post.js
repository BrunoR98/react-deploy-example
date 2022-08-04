import React from 'react';
import PropTypes from 'prop-types';

//Styles
import './Posts.css';
import Grid from '@mui/material/Grid';

export default function Post({ id, title, content }) {
    return(
        <>
            <Grid container rowSpacing={1} columns={1} className='grid-container' sx={{width: '95%'}}>
                <Grid item xs={1}>
                    <div className='grid-header'>
                        <h1>{id}. {title}</h1>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <div className='grid-content'>
                        {content}
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}