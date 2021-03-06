app.controller('mainCtrl', function($scope, UsersFactory, BidsFactory, $routeParams, $location) {
    console.log("main controller loading");

	$scope.user = UsersFactory;

    if ($scope.user.userLoggedIn) {
        $location.url('/bids');
    }

    $scope.enter = function() {
        console.log($scope.username)
        $scope.user.userLoggedIn = $scope.username
        $location.url('/bids');
    }

	$scope.logoutUser = UsersFactory.logout

})