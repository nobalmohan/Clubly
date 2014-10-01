'use strict';

/**
 * @ngdoc function
 * @name clublyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clublyApp
 */
angular.module('clublyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
