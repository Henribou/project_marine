'use strict';

angular.module('app')
// Declared route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'pages/home/home.html',
            controller: 'homeCtrl'
        });
    }])

    // Home controller
    .controller('homeCtrl', function($scope, $mdSidenav, $firebaseObject) {
        console.warn('HOP')

        var ref = firebase.database().ref().child("contes");
        $scope.contes = $firebaseObject(ref);
    });