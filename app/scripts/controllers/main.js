'use strict';

/**
 * @ngdoc function
 * @name collablabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collablabApp
 */
angular.module('collablabApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
