const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');

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
        response.status(404).json(error);
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
        });

        if(userDB === null) {
            throw new Error('User not found.');
        }

        response.status(200).json(userDB);
    } catch (error) {
        response.status(404).json({message: error.message});
    }
})

// router.get('/AllPosts', async (request, response) => {

// })

module.exports = router;