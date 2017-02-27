var bids = require('../controllers/bids.js');

module.exports = function(app) {
    console.log("routes loading");

    app.post('/newbid', bids.create)

    app.get('/getbids', bids.index)

    app.delete('/destroybids', bids.destroy)

}