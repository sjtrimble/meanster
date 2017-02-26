app.controller('mainCtrl', function($scope, GamesFactory, UsersFactory, QuestionsFactory, $routeParams, $location) {
    console.log("main controller loading");

	$scope.user = UsersFactory;

    var updateScores = function() {
        GamesFactory.index(function(data) {
            $scope.games = data;
        })
    }
    updateScores();

	$scope.logoutUser = UsersFactory.logout

})