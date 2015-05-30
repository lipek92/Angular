'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularApp', [
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
      .when('/beers', {
        templateUrl: 'views/beers.html',
        controller: 'BeersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.service('beerService', function()
{
  var getBeers = function(){
    return beers;
  }

  return {
    getBeers: getBeers()
  }
});

var beers = [{
  name: 'Johannes',
  description: "Dobre piwko!",
  images: [
    "images/gem-02.gif",
    "images/gem-05.gif",
    "images/gem-09.gif"
  ],
  reviews: [{
    stars: 5,
    body: "Moje ulubioneee!",
    author: "kaziu",
    createdOn: 1397490980837
  }, {
    stars: 1,
    body: "Nie smakuje mi",
    author: "smakosz",
    createdOn: 1397490980837
  }]
}, {
  name: 'Tyskie',
  description: "Tyskie piwo.",
  images: [
    "images/gem-01.gif",
    "images/gem-03.gif",
    "images/gem-04.gif",
  ],
  reviews: [{
    stars: 3,
    body: "Bardzo smaczne!",
    author: "waldek",
    createdOn: 1397490980837
  }, {
    stars: 4,
    body: "Polecam!",
    author: "rysiu132",
    createdOn: 1397490980837
  }]
}];

