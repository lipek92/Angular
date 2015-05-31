var app = angular.module('beersModule');

app.controller('BeersCtrl', function ($scope, beerService) {
    $scope.beers = beerService.getBeers;
  });

app.directive('beerMenu', function()
{
  return {
    restrict: 'E',
    templateUrl: '../../templates/beer-menu.html',
    controller: function(){
      this.menu = 1;

      this.setMenu = function(menu){
        this.menu = menu;
      };

      this.isSet = function(menu){
        return (this.menu === menu);
      };
    },
    controllerAs: "beerMenu"
  }
});

app.directive('beerComments', function(){
  return {
    restrict: 'E',
    templateUrl: '../../templates/beer-comments.html',
    controller: function(){
      this.comment = {};

      this.addComment = function(beer){
        this.comment.createdOn = Date.now();
        beer.comments.push(this.comment);
        this.comment = {};
      };
    },
    controllerAs: 'commentCtrl'
  };
});

app.directive('beerDescription', function()
{
  return {
    restrict: 'E',
    templateUrl: 'templates/beer-description.html'
  };
});

app.directive('lastComments', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/last-comments.html'
  };
});
