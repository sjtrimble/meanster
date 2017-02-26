var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');

module.exports = {

    index: function(req, res) {
        console.log("initiating bids index sever controller")

        Bid.find({}, function(err, bids) {
            if(err) {
                console.log("Error Found: ", err);
                res.json(err);
            } else {
                console.log("Bids found in DB: ", bids);
                res.json(bids);
            };
        });
    },

    create: function(req, res) {
        console.log(req.body);
        console.log("bid create controller hit")

        let product = req.body.product
        let bidder = req.body.bidder
        let amount = req.body.amount

        var bid = new Bid({product: product,bidder: bidder, amount: amount,})
        bid.save(function (err, savedBid) {
            if(err){
                console.log(err);
                res.json(err);
            }
            res.json(savedBid);
        })
	},

    destroy: function(req, res) {
        console.log("destroy function hit in backend controller")

        Bid.remove({}, function(err, bids){
            if(err) {
            console.log("Error: could not remove all bids");
            res.json(err);
            } else {
            console.log("all bids deleted!")
            res.json(bids);
            }
        });
    }
}