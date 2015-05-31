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
    'beersModule',
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

var beersModule = angular.module('beersModule', []);

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
  description: "Piwo jasne, pełne, pasteryzowane; Skład: woda, słód jęczmienny, chmiel. Zawartość alkoholu: 6,5% obj, Ekstrakt: 14,5% wag.",
  comments: [{
    text: "Moje ulubioneee!",
    author: "kaziu",
    createdOn: 1291490980837
  }, {
    text: "Najlepsze jakie pilem, polecam!",
    author: "smakosz",
    createdOn: 1397420980837
  }]
}, {
  name: 'Żywiec',
  description: "Piwo jasne, 12,5% wag., alk. 5,6% obj., składniki: woda, słód jęczmienny, chmiel. Pasteryzowane.",
  comments: [{
    text: "Bardzo smaczne!",
    author: "waldek",
    createdOn: 1337490980837
  }, {
    text: "Moim zdaniem ostatnio nie jest za dobry :(",
    author: "rysiu132",
    createdOn: 1394490980837
  }]
}, {
  name: 'Kozel',
  description: "Piwo jasne, alk. 4,6% obj., pasteryzowane. Składniki: woda, słody jęczmienne, chmiel i wyciąg z szyszek chmielowych.",
  comments: []
}]


