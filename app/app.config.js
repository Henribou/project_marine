(function () {
    'use strict';

    angular
        .module('app')
        .config(['$locationProvider', '$routeProvider',
            function conffig($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('');
                // Set default view of our app to home

                $routeProvider.
                when('/contes/:conteUrl', {
                    template: '<conte-detail></conte-detail>'
                }).
                when('home/about', {
                    redirectTo: '/about'
                }).
                otherwise({
                    redirectTo: '/home'
                });

            }
        ])
})();