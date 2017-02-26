console.log("question loading");

var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    description: {type: String, minlength: 15, required: true},
    correctAnswer: {type: String, required: true},
    otherAnswer1: {type: String, required: true},
    otherAnswer2: {type: String, required: true}
}, {timestamps: true}
);

var Question = mongoose.model('Question', QuestionSchema);