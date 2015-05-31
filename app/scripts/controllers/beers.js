var app = angular.module('beersModule');

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

app.controller('CommentController', function(){

  this.comment = {};
  this.comment.createdOn = Date.now();

  this.addComment = function(beer){
    beer.comments.push(this.comment);
    this.comment = {};
  };
});
