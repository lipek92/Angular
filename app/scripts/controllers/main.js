'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
var app = angular.module('angularApp');
  app.controller('MainCtrl', function ($scope, beerService) {

    $scope.beers = beerService.getBeers;
    $scope.comments = [];

      $scope.beers.forEach(function(beer) {
        beer.comments.forEach(function(comment) {
          comment.bearName = beer.name;
          $scope.comments.push(comment);
        });
      });


  });


