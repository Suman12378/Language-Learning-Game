const express = require('express');
const {verifyUser} = require('../middleware/veryuser');
const {userDetails, fetchProfile} = require('../controllers/authController');

const Route = express.Router();

Route.post('/set', verifyUser,  userDetails);
Route.post('/profile', verifyUser,  fetchProfile);

module.exports = Route; 