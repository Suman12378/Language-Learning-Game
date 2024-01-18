const Questions = require('../models/question');
const mongoose = require("mongoose");

const getQuestionPaper = async(req, res, next) => {
     
   try{
    const { lang } = req.body;
   //  console.log(lang);

   //   let arrEasy = await Questions.find({lang: lang, difficulty: "Easy"});
   //   let arrMedium = await Questions.find({lang: lang, difficulty: "Medium"});
   //   let arrHard = await Questions.find({lang: lang, difficulty: "Hard"});

   let arr = await Questions.find({lang: lang});
 


     return res.status(200).json({arr});
   } 
   catch(err){
      return res.status(400).json({message: "Something Went Wrong"});
   }
 
   
     
};

module.exports = getQuestionPaper;