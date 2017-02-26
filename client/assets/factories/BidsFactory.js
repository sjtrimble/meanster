app.factory('BidsFactory', ['$http', function($http) {

    var factory = {};

    factory.index = function(callback) {

        console.log("bids factory index function called");

        $http.get('/getbids')
        .then(function(res) {
            callback(res.data);
        });
    }

    factory.makeBid = function(newBid, callback) {
        console.log("makebid function called in factory")
        $http.post('/newbid', newBid)
        .then(function(res) {
            if (typeof(callback) === 'function') {
                callback(res.data);
                console.log("response from server received in factory: ", res.data);
            };
        });
    }

    factory.destroyBids = function() {
        $http.delete('/destroybids')
        .thn(function(res) {
            if (typeof(callback) === 'function') {
                callback(res.data);
                console.log("delete callback on server side")
            }
        })
    }

    return factory;

}]);