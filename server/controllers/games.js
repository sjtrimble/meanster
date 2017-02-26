var mongoose = require('mongoose');
var Game = mongoose.model('Game');

module.exports = {

    index: function(req, res) {
        console.log("initiating product index sever controller")

        Game.find({}, function(err, games) {
            if(err) {
                console.log("Error Found: ", err);
                res.json(err);
            } else {
                console.log("Games found in DB: ", games);
                res.json(games);
            };
        });
    },

    create: function(req, res) {

        let score = req.body.score
        let percentage = req.body.percentage
        let player = req.body.player

        var game = new Game({player: player,score: score, percentage: percentage,})
        game.save(function (err, savedGame) {
            if(err){
                console.log(err);
                res.json(err);
            }
            res.json(savedGame);
        })
	}
}