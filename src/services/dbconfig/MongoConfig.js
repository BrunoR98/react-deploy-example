const express = require('express');
const mongoose = require('mongoose');
const dataBaseURL = 'mongodb+srv://mongodb:contra12345@cluster0.dtzp66u.mongodb.net/test';

const PORT = 3001;
const HOST = 'localhost';

mongoose.connect(dataBaseURL);
const database = mongoose.connection;

database.on('error', (e) => {
    console.error(`\nDatabase error: ${e}\n`);
})

const app = express();
app.use(express.json());

app.listen(PORT, HOST, () => {
    console.log(`\nServer running on: http://${HOST}:${PORT}`);
})