

'use strict';

/**
 * @ngdoc overview
 * @name clublyApp
 * @description
 * # clublyApp
 *
 * Main module of the application.
 */
angular
        .module('clublyApp', [
            'ngRoute'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/events', {
                        templateUrl: 'views/events.html',
                        controller: 'EventsCtrl'
                    })
                    .when('/about', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    })
                    .when('/certificate', {
                        templateUrl: 'views/certificate.html',
                        controller: 'CertificateCtrl'
                    })
                    .when('/login', {
                        templateUrl: 'views/login.html',
                        controller: 'LoginCtrl'
                    })
                    .otherwise({redirectTo: '/'});
        });

