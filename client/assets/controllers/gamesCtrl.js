app.controller('gamesCtrl', function($scope, QuestionsFactory, UsersFactory, GamesFactory, $routeParams, $location) {
    console.log("games controller loading");

    $scope.user = UsersFactory

    $scope.questions = [];
    $scope.newGame = {};

    var loginUser = function() {
		UsersFactory.login(function(user) {
			$scope.user.userLoggedIn = user;
		});
	};
    loginUser();

    console.log($scope.userLoggedIn)

    var updateGames = function () {
        GamesFactory.index(function(data) {
            $scope.games = data;
        });
    };

    var loadQuestions = function() {
        QuestionsFactory.index(function(data) {
            console.log("data in load questions: ", data);

        // shuffle questions
		for(var i = 0; i<data.length; i++) {
		var random = Math.floor(Math.random()*data.length);
			var temp = data[i];
			data[i] = data[random];
			data[random] = temp;
		}
        // take only first three questions
        if (data.length >= 3) {
            $scope.questions = [data[0], data[1], data[2]];
        }
        if (data.length < 3) {
            $scope.messages = "Not enough questions"
        }
		return $scope.questions
        });
    };

    loadQuestions();

    $scope.scoreGame = function() {
        $scope.newGame.player = $scope.user.userLoggedIn;

        console.log($scope.newGame);

        let score = 0;

        for(let question of $scope.questions) {
            if(question.response == question.correctAnswer) {
                score++;
            };
        };

        $scope.newGame.score = score;
        $scope.newGame.percentage = Math.round(score / $scope.questions.length * 100);

        GamesFactory.scoreGame($scope.newGame, function(data) {
            console.log(data);
            $scope.messages = ["That was great, " + $scope.userLoggedIn + "! Your score is "  + data.scare + "."]
        });
        updateGames();
        $location.url('/main');

    };

    // $scope.test = function() {
    //     console.log("test successful", $scope.newtest.name)
    // }
});