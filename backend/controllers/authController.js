const express = require('express');
const User = require('../models/user');



const userDetails = async(req, res, next) => {
  
    try{
        const { name, email } = req.body;
 
        const newUser = new User({
            name, 
            email,
        });
    
        await newUser.save();
    
        return res.status(200).json({message: "User Details Save Successfully"});
    }
    catch(err){
        return res.status(400).json({message: "Something Went Wrong"});
    }

};

const fetchProfile = async(req, res, next) => {
      
    try{
        const { name, email } = req.userData;
        //  console.log(email); 
        //  console.log(name); 

      let user = await User.findOne({"email": email});

        if(!user){
         user = new User({
                name, 
                email,
            });
        
            await user.save();
        }
    //   console.log(user);

      return res.status(200).json({message: "Successfully Found The User", user});
    }
    catch(err){
        return res.status(400).json({message: "Something Went Wrong"});
    }
};

module.exports = { userDetails, fetchProfile };

