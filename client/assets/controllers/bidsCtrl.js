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
                $scope.products[x].bids = []
                $scope.products[x].error = []
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

        if (product.bids.length == 0 || product.bidAmount > product.bids[product.bids.length-1].amount) {

            $scope.newBid.product = product.name
            $scope.newBid.bidder = $scope.user.userLoggedIn;
            $scope.newBid.amount = product.bidAmount

            BidsFactory.makeBid($scope.newBid, function(data) {
                $scope.newBid = data
            });

            product.bids.push($scope.newBid);
            product.bidAmount = undefined;
            updateBids();
        } else {
            product.error = "Bid amount should be higher than the previous bid."
            // $scope.product.error.push();
            // console.log($scope.errorMessages);
        };
    };

    $scope.endBid = function() {
        let missingBids = false;
        for (let x in $scope.products) {
            if ($scope.products[x].bids.length == 0) {
                missingBids = true;
                alert("Cannot end the bid. One product does not have any bids yet.");
                break;
            }
        };
        
        if (!missingBids) {
            $location.url('/result')
        };
    }

    $scope.startBid = function() {
        BidsFactory.destroyBids(function(data) {
            console.log("bids gone")
            $scope.bids = {};
        });
        $location.url('/bids');
    };

});