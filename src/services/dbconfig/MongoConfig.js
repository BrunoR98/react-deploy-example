const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({
    path: 'src/services/dbconfig/.env',
});

const dataBaseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dtzp66u.mongodb.net/test`;

mongoose.connect(dataBaseURL);
const database = mongoose.connection;

database.on('error', (e) => {
    console.error(`\nDatabase error: ${e}\n`);
})

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`\nServer running on: http://${process.env.HOST}:${process.env.PORT}`);
});