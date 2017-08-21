var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/home.html',
  }).when('/circle', {
    templateUrl: 'views/partials/circle.html',
    controller: 'CircleController as cc'
  }).when('/square', {
    templateUrl: 'views/partials/square.html',
    controller: 'SquareController as sc'
  }).when('/sorting', {
    templateUrl: 'views/partials/sorting.html',
    controller: 'SortingController as sqc'
  });
});
