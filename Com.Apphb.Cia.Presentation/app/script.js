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
        // rules page route
        .when('/classification', {
            templateUrl: 'app/pages/classification.html',
            controller: 'classificationController'
        })
        // users page route
        .when('/calendar', {
            templateUrl: 'app/pages/calendar.html',
            controller: 'calendarController'
        })
        // users page route
        .when('/contact', {
            templateUrl: 'app/pages/contact.html',
            controller: 'contactController'
        })
        // users page route
        .when('/info', {
            templateUrl: 'app/pages/info.html',
            controller: 'infoController'
        })
        // users page route
        .when('/recipes', {
            templateUrl: 'app/pages/recipes.html',
            controller: 'recipesController'
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
ciaApp.controller('classificationController', function ($scope) {
    // message to display in views
    $scope.message = 'Classifica';
});

// create the controller and inject Angular's $scope
ciaApp.controller('calendarController', function ($scope, $location, $anchorScroll) {

    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    };
    // message to display in views
    $scope.message = 'Calendar here!!';
});

// create the controller and inject Angular's $scope
ciaApp.controller('contactController', function ($scope) {
    // message to display in views
    $scope.message = 'Contact here!!';
});

// create the controller and inject Angular's $scope
ciaApp.controller('infoController', function ($scope) {
    // message to display in views
    $scope.message = 'Info here!!';
});

// create the controller and inject Angular's $scope
ciaApp.controller('recipesController', function ($scope) {
    // message to display in views
    $scope.message = 'Recipes here!!';
});

// create the controller and inject Angular's $scope
ciaApp.controller('usersController', function ($scope) {
    // message to display in views
    $scope.message = 'Users here!!';
});

ciaApp.run(function ($rootScope, $location, $anchorScroll, $routeParams) {
    //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();
    });
});