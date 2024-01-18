const app = require('./app');
const connectDatabase = require('./config/database');
require('dotenv').config(); 

// calling fuction to connect the databse
 connectDatabase();



const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`);
});


  