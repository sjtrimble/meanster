app.factory('GamesFactory', ['$http', function($http) {

    var factory = {};

    factory.index = function(callback) {

        console.log(" index function called");

        $http.get('/games')
        .then(function(res) {
            callback(res.data);
        });
    }

    factory.scoreGame = function(newGame, callback) {
        $http.post('/game', newGame)
        .then(function(res) {
            if (typeof(callback) === 'function') {
                callback(res.data);
                console.log("response from server received in factory: ", res.data);
            };
        });
    }

    return factory;

}]);