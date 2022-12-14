const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const Post = require('../models/PostModel');

router.get('/Users', async (request, response) => {
    try {
        const allUsers = await User.find({});
        response.status(200).json(allUsers);
    } catch (error) {
        response.status(404).json({message: error.message});
    }
})

router.post('/Register', (request, response) => {
    const user = {
        username,
        email,
        password,
    } = request.body;

    const userToSave = new User(user);
    userToSave.save()
    .then(data => {
        response.status(201).json(data);
    })
    .catch(error => {
        response.status(500).json(error);
    })
})

router.post('/Login', async (request, response) => {
    const user = {
        email,
        password
    } = request.body;
    
    try {
        const userDB = await User.findOne({
            email: user.email,
            password: user.password,
        })

        if(userDB.data !== null) {
            response.status(200).json(userDB);
        }
    } catch (error) {
        response.status(401).json({message: 'Invalid credentials.'});
    }
})

router.post('/CreatePost', async (request, response) => {
    const post = {
        title,
        content,
    } = request.body;

    const postToSave = new Post(post);
    postToSave.save()
        .then(data => {
            response.status(201).json(data);
    })
    .catch(error => {
        response.status(404).json({message: error.message});
    })

})

router.get('/AllPosts', async (request, response) => {
    try {
        const allPosts = await Post.find({});
        response.status(200).json(allPosts);
    } catch (error) {
        response.status(404).json({message: error.message});
    }
})

module.exports = router;