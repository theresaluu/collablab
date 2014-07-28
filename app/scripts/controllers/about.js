'use strict';

/**
 * @ngdoc function
 * @name collablabApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the collablabApp
 */
angular.module('collablabApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
