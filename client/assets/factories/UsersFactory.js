app.factory('UsersFactory', ['$http', function($http) {

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
	}

    return factory;

}]);
