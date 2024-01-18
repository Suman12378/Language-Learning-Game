const express = require('express');
const cors = require('cors');
require('./initializeFirebase'); 


const app = express();

app.use(express.json());


// import all the routes and connect to the server 


const setterRoute = require('./routes/questionRoute');
const getQuestionRoute = require('./routes/getQuesRoute');
const authRoute = require('./routes/authRoute');

app.use(cors());
app.use("/api/v1", setterRoute);
app.use("/api/v1", getQuestionRoute);
app.use("/api/v1/auth", authRoute);


// middleware

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PATCH, DELETE"
    );
    next();
  });

// return the app

module.exports = app;
