var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/main'
    })
    .when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl'
    })
    .when('/lets_play', {
        templateUrl: 'partials/play.html',
        controller: 'gamesCtrl'
    })
    .when('/new_question', {
        templateUrl: 'partials/newquestion.html',
        controller: 'questionsCtrl'
    })
    .otherwise({
        redirectTo: '/'
    })
})