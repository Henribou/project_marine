(function() {
    'use strict';

    // Define the conte-detail module
    angular.module('app', [
        'ngRoute',
        'firebase',
        'ngRoute',
        'ngMaterial',
        'conteDetail'
    ]);
})();

(function () {
    'use strict';

    // Define the conte-detail module
    angular.module('conteDetail', [
        'ngRoute',
        'firebase'
    ]);
})();
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
/**
 * Created by riton on 30/07/17.
 */
(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBeLEOVi3WaFf8zk8rf95Xv9I5OTFQ8834",
        authDomain: "project-marine.firebaseapp.com",
        databaseURL: "https://project-marine.firebaseio.com",
        projectId: "project-marine",
        storageBucket: "project-marine.appspot.com",
        messagingSenderId: "933980389289"
    };
    firebase.initializeApp(config);

}());
(function() {
    'use strict';

    // Define the conte-detail module
    angular.module('app', [
        'ngRoute',
        'firebase',
        'ngRoute',
        'ngMaterial',
        'conteDetail'
    ]);
})();

(function () {
    'use strict';

    // Define the conte-detail module
    angular.module('conteDetail', [
        'ngRoute',
        'firebase'
    ]);
})();
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
/**
 * Created by riton on 30/07/17.
 */
(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBeLEOVi3WaFf8zk8rf95Xv9I5OTFQ8834",
        authDomain: "project-marine.firebaseapp.com",
        databaseURL: "https://project-marine.firebaseio.com",
        projectId: "project-marine",
        storageBucket: "project-marine.appspot.com",
        messagingSenderId: "933980389289"
    };
    firebase.initializeApp(config);

}());
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
/**
 * Created by riton on 30/07/17.
 */
(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBeLEOVi3WaFf8zk8rf95Xv9I5OTFQ8834",
        authDomain: "project-marine.firebaseapp.com",
        databaseURL: "https://project-marine.firebaseio.com",
        projectId: "project-marine",
        storageBucket: "project-marine.appspot.com",
        messagingSenderId: "933980389289"
    };
    firebase.initializeApp(config);

}());
(function() {
    'use strict';

    // Define the conte-detail module
    angular.module('app', [
        'ngRoute',
        'firebase',
        'ngRoute',
        'ngMaterial',
        'conteDetail'
    ]);
})();

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
/**
 * Created by riton on 30/07/17.
 */
(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBeLEOVi3WaFf8zk8rf95Xv9I5OTFQ8834",
        authDomain: "project-marine.firebaseapp.com",
        databaseURL: "https://project-marine.firebaseio.com",
        projectId: "project-marine",
        storageBucket: "project-marine.appspot.com",
        messagingSenderId: "933980389289"
    };
    firebase.initializeApp(config);

}());
(function() {
    'use strict';

    // Define the conte-detail module
    angular.module('app', [
        'ngRoute',
        'firebase',
        'ngRoute',
        'ngMaterial',
        'conteDetail'
    ]);
})();

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

(function () {
    'use strict';

    // Define the conte-detail module
    angular.module('conteDetail', [
        'ngRoute',
        'firebase'
    ]);
})();
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

(function () {
    'use strict';

    // Define the conte-detail module
    angular.module('conteDetail', [
        'ngRoute',
        'firebase'
    ]);
})();
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