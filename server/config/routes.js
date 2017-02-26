var games = require('../controllers/games.js');
var questions = require('../controllers/questions.js');


module.exports = function(app) {
    console.log("routes loading");

    app.post('/new_question/add', questions.create)

    app.get('/questions', questions.index)

    app.get('/games', games.index)

    app.post('/game', games.create)

}