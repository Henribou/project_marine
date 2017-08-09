'use strict';

angular.module('app')
    // Home controller
    .controller('homeCtrl', function($scope, $mdSidenav, $firebaseObject) {
        console.warn('HOP')

        var ref = firebase.database().ref().child("contes");
        $scope.contes = $firebaseObject(ref);
    });