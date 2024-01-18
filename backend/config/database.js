const mongoose = require('mongoose');




const connectDatabase = async(err) => {
    await mongoose
          .connect(process.env.MONGO_URI)
          .then(()=>{
              console.log('MongoDB connected Successfully')
          })
          .catch(err, () => {
              console.log('Hello'); 
          });
};

module.exports = connectDatabase;