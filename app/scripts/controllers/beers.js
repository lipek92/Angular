var app = angular.module('angularApp');

app.controller('BeersCtrl', function ($scope, beerService) {
    $scope.beers = beerService.getBeers;
  });

app.controller('BeerMenuController', function() {
  this.menu = 1;

  this.setMenu = function(menu){
    this.menu = menu;
  };

  this.isSet = function(menu){
    return (this.menu === menu);
  };
});
