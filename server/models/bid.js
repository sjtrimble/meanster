console.log("bid model loading");

var mongoose = require('mongoose');

var BidSchema = new mongoose.Schema({
    product: {type: String, required: true},
    bidder: {type: String, required: true},
    amount: {type: Number, min: 0, max: 100, required: true},
}, {timestamps: true});

var Bid = mongoose.model('Bid', BidSchema);