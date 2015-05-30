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
  var getComments = function(){
    var comments = [];

    beers.forEach(function(beer) {
      beer.comments.forEach(function(comment) {
        comment.bearName = beer.name;
        comments.push(comment);
      });
    });
    return comments;
  }

  return {
    getBeers: getBeers(),
    getComments: getComments()
  }
});

var beers = [{
  name: 'Johannes',
  description: "Dobre piwko!",
  images: [
    "images/johannes1.gif",
    "images/johannes2.gif",
    "images/johannes3.gif"
  ],
  comments: [{
    text: "Moje ulubioneee!",
    author: "kaziu",
    createdOn: 1291490980837
  }, {
    text: "Nie smakuje mi",
    author: "smakosz",
    createdOn: 1397420980837
  }]
}, {
  name: 'Tyskie',
  description: "Tyskie piwo.",
  images: [
    "images/tyskie1.gif",
    "images/tyskie2.gif",
    "images/tyskie3.gif",
  ],
  comments: [{
    text: "Bardzo smaczne!",
    author: "waldek",
    createdOn: 1337490980837
  }, {
    text: "Polecam!",
    author: "rysiu132",
    createdOn: 1394490980837
  }]
}];

