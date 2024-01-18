const Questions = require('../models/question');

const QuestionSetter = async(req, res, next) => {
    try{
        const { question, options, ans, lang, difficulty } = req.body;

          console.log(options);  

          const newQuestion = new Questions({
            question,
            options,
            ans,
            lang,
            difficulty
          });
 
          await newQuestion.save();
 
         
         return res.status(200).json({message: "Question Saved Successfully"});
    }
    catch(err){
        return res.status(400).json({message: "Something Went Wrong in saving "});
    }
};

module.exports = QuestionSetter;
