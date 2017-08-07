'use strict';

angular.module('app')
// Declared route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'pages/about/about.html',
            controller: 'aboutCtrl'
        });
    }])

    // Home controller
    .controller('aboutCtrl', function($scope) {
        console.warn('About')
    });