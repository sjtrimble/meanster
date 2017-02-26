app.controller('bidsCtrl', function($scope, UsersFactory, BidsFactory, $routeParams, $location) {
    console.log("bids controller loading");

    $scope.user = UsersFactory
    $scope.bids = {};
    $scope.newBid = {};
    $scope.errorMessages = []

    $scope.product1 = {name: 'Unicorn', imageUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-rainbow-unicorn.png', bids:[]}
    $scope.product2 = {name: 'Burger', imageUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-big-burger.png', bids: []}
    $scope.product3 = {name: 'Dog', imageUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-nerd-pug.png', bids: []}
    $scope.products = [$scope.product1, $scope.product2, $scope.product3]

    var loginUser = function() {
		UsersFactory.login(function(user) {
			$scope.user.userLoggedIn = user;
		});
	};
    loginUser();

    $scope.user = UsersFactory

    var updateBids = function () {
        BidsFactory.index(function(data) {
            $scope.bids = data;
            // console.log($scope.bids);

            for (let x in $scope.products) {
                for (z in $scope.bids) {
                    if ($scope.products[x].name == $scope.bids[z].product) {
                        $scope.products[x].bids.push($scope.bids[z])
                        // console.log("pushed the following bid: ", $scope.bids[z])
                    }
                }
            };
        });
        
    };
    updateBids();

    $scope.makeBid = function(product, newBid) {
        // console.log("just product: ", product)
        // console.log("just newBid: ", newBid)

        if (product.bidAmount < $scope.product.bids[bids.length-1]) {
            console.log("bid is smaller than last bid");
        }

        $scope.newBid.product = product.name
        $scope.newBid.bidder = $scope.user.userLoggedIn;
        $scope.newBid.amount = product.bidAmount

        // console.log("updated newbid with info: ", newBid)

        BidsFactory.makeBid($scope.newBid, function(data) {
            console.log("returned data from factory using bid creation: ", data);
            $scope.newBid = data
        });

        product.bids.push($scope.newBid);
        console.log("updated product bids to: ", product.bids)

        product.bidAmount = undefined;
        updateBids();
    };

    $scope.endBid = function() {
        console.log("bid ended");
        $location.url('/result')
    }

    $scope.startBid = function() {
        Bids.Factory.destroyBids(function(data) {
            console.log("bids gone")
            $scope.bids = {}
        });
        $location.url('/bids');
    };

});