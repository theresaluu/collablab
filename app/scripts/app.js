'use strict';

/**
 * @ngdoc overview
 * @name collablabApp
 * @description
 * # collablabApp
 *
 * Main module of the application.
 */
angular
  .module('collablabApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/lab', {
        templateUrl: 'views/lab.html',
        controller: 'LabCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
