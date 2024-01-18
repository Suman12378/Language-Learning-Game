const express = require('express');
const QuestionSetter = require('../controllers/questionSetter');


const route = express.Router();

route.post("/setter", QuestionSetter);

module.exports = route;
