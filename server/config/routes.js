var bids = require('../controllers/bids.js');

module.exports = function(app) {
    console.log("routes loading");

    app.post('/newbid', bids.create)

    app.get('/getbids', bids.index)

    app.delete('/destroybids', bids.destroy)


    // OLD TO DELETE

    app.post('/new_question/add', bids.index)

    app.get('/questions', bids.index)

    app.get('/games', bids.index)

    app.post('/game', bids.index)

}