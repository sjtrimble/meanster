app.factory('UsersFactory', ['$http', '$location', function($http, $location) {

    var factory = {};
    factory.userLoggedIn = false;
	console.log('Building our users service. this should only happen ONCE.');


    factory.login = function(){
		while(factory.userLoggedIn === false) {
			factory.userLoggedIn = prompt("Please enter your username","username");
			// console.log(factory.userLoggedIn)
		}
		// return callback(factory.userLoggedIn);
	}


	factory.logout = function(){
		factory.userLoggedIn = false;
		$location.url('/main');
	}

    return factory;

}]);
