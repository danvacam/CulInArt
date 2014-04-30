// create the module
var ciaApp = angular.module('ciaApp', ['ngRoute']);

ciaApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        // home page route
        .when('/', {
            templateUrl: 'app/pages/home.html',
            controller: 'mainController'
        })
        // rules page route
        .when('/rules', {
            templateUrl: 'app/pages/rules.html',
            controller: 'rulesController'
        })
        // users page route
        .when('/users', {
            templateUrl: 'app/pages/users.html',
            controller: 'usersController'
        });

    $locationProvider.html5Mode(true);
});


// create the controller and inject Angular's $scope
ciaApp.controller('mainController', function ($scope) {
    // message to display in views
    $scope.message = 'Hi there!!';
});

// create the controller and inject Angular's $scope
ciaApp.controller('rulesController', function ($scope) {
    // message to display in views
    $scope.message = 'Dan rulez!!';
});

// create the controller and inject Angular's $scope
ciaApp.controller('usersController', function ($scope) {
    // message to display in views
    $scope.message = 'Users here!!';
});