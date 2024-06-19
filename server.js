const express = require('express');
const mongoose = require('mongoose');
const graphqlRouter = require('./graphqlRouter.js');
require("dotenv").config();
const app = express();

app.use('/graphql', graphqlRouter);

mongoose.connect(process.env.MONGO_URL, { });

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000/graphql');
});
