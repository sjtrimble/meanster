var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {

    index: function(req, res) {
        console.log("initiating order index sever controller")

        Question.find({}, function(err, questions) {
            if(err) {
                console.log("Error Found: ", err);
                res.json(err);
            } else {
                console.log("Questions found in DB: ", questions);
                res.json(questions);
            };
        });
    },

    create: function(req, res) {
        // console.log("req body printed in backend: ", req.body)

        var description             = req.body.description,
            correctAnswer           = req.body.correctAnswer,
            otherAnswer1            = req.body.otherAnswer1,
            otherAnswer2            = req.body.otherAnswer2

        var newQuestion = new Question ({description: description, correctAnswer: correctAnswer, otherAnswer1: otherAnswer1, otherAnswer2: otherAnswer2});
        newQuestion.save(function (err, newQuestion) {
            if (err){
                console.log("error saving new question");
                res.json(err);
            } else {
                console.log("new question created");
                res.json(newQuestion)
            };
        });
    }
};