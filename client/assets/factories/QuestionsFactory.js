app.factory('QuestionsFactory', ['$http', function($http) {

    var factory = {};

    factory.index = function(callback) {
        $http.get('/questions')
        .then(function(res) {
            callback(res.data);
        });
    };

    factory.create = function(newQuestion, callback) {

        $http.post('/new_question/add', newQuestion)
        .then(function(res) {
            if (typeof(callback) === 'function') {
                callback(res.data);
                console.log("response from server received in factory");
            };
        });
    };

    return factory;

}]);