const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: [
        {
            type: String,
        }
    ],
    ans: {
        type: String,
        required: true,
    },
    lang: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
});


const Questions = mongoose.model("Qestions", questionSchema);
module.exports = Questions;