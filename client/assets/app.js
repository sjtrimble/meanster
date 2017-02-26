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
    .when('/bids', {
        templateUrl: 'partials/bids.html',
        controller: 'bidsCtrl'
    })
    .when('/result', {
        templateUrl: 'partials/result.html',
        controller: 'bidsCtrl'
    })
    .otherwise({
        redirectTo: '/'
    })
})