const express = require('express');
const getQuestionPaper = require('../controllers/questionController');

const route = express.Router();

route.post("/get", getQuestionPaper);

module.exports = route;