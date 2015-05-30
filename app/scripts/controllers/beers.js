var app = angular.module('angularApp')
  .controller('BeersCtrl', function ($scope, beerService) {
    $scope.beers = beerService.getBeers;
  });
