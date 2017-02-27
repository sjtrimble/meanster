// NOT USING

app.controller('resultsCtrl', function($scope, UsersFactory, BidsFactory, $routeParams, $location) {
    console.log("main controller loading");

	$scope.user = UsersFactory;

    $scope.enter = function() {
        console.log($scope.username)
        $scope.user.userLoggedIn = $scope.username
        $location.url('/bids');
    }

	$scope.logoutUser = UsersFactory.logout

})