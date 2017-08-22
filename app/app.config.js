(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider',
            function config($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/home');

                $stateProvider

                // HOME state
                    .state('home', {
                        url: '/home',
                        templateUrl: 'pages/home/home.tmpl.html',
                        controller: 'homeCtrl'
                    })

                    .state('about', {
                        url:'/about',
                        templateUrl: 'pages/about/about.tmpl.html',
                        controller: 'aboutCtrl'
                    })

                    .state('contes', {
                        url:'/contes',
                        templateUrl: 'pages/contes/contes-list.tmpl.html',
                        controller: 'contesCtrl'
                    })

                    .state('conte', {
                        url: '/contes/:url',
                        template: '<conte-detail></conte-detail>',
                    })
            }
        ])
})();