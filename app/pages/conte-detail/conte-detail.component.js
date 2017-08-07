'use strict';

// Register `conteDetail` component, along with its associated controller and template
angular.
module('conteDetail').
component('conteDetail', {
    templateUrl: 'pages/conte-detail/conte-detail.tmpl.html',
    controller: ['$scope', '$routeParams', '$firebaseObject',
        function conteDetailController($scope, $routeParams, $firebaseObject) {

            this.conteUrl = $routeParams.conteUrl;

            var ref = firebase.database().ref().child("contes").child(this.conteUrl);
            $scope.conte = $firebaseObject(ref);
        }
    ]
});
