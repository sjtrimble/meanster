app.controller('questionsCtrl', function($scope, QuestionsFactory, $routeParams, $location) {
    console.log("questions controller loading");
    $scope.messages = [];

    $scope.create = function() {
        QuestionsFactory.create($scope.newQuestion, function(data) {
            console.log("Data back from server: ", data);
            let newMessage = "Question added successfully!"
            $scope.messages.push(newMessage);
            // $scope.questions = data;
        });
        $location.url('/main');
    }

});