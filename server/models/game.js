console.log("game model loading");

var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
    player: {type: String, required: true},
    score: {type: Number, required: true},
    percentage: {type: Number, min: 0, max: 100, required: true},
}, {timestamps: true});

var Game = mongoose.model('Game', GameSchema);