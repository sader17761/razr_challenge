var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/home.html',
  }).when('/circle', {
    templateUrl: 'views/partials/circle.html',
    controller: 'DefaultController as dc'
  }).when('/square', {
    templateUrl: 'views/partials/square.html',
    controller: 'DefaultController as dc'
  }).when('/sorting', {
    templateUrl: 'views/partials/sorting.html',
    controller: 'DefaultController as dc'
  }).when('/generate', {
    templateUrl: 'views/partials/generate.html',
    controller: 'DefaultController as dc'
  });
});
