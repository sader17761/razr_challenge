var myApp = angular.module('myApp');

myApp.controller('DefaultController', function(DefaultService){
  var vm = this;

  // verifies the circle inputs
  vm.createCircle = function(radius){
    vm.newCircle = DefaultService.checkCircleInputs(radius);
  }; // end of createCircle function

  // verifies the square inputs
  vm.createSquare = function(length){
    vm.newSquare = DefaultService.checkSquareInputs(length);
  }; // end of createSquare function

  // verifies the sort inputs
  vm.createSortObjects = function(numCircles, numSquares){
    vm.newArray = DefaultService.checkSortInputs(numCircles, numSquares);
  }; // end of createSortObjects function

/* CLEAR FUNCTIONALITY */
  // clears all display divs
  vm.clearDiv = function(){
    $('.circle').remove();
    $('.square').remove();
    $('.sortCircle').remove();
    $('.sortSquare').remove();
  };

  // clears all user inputs
  vm.clearInputs = function(){
    vm.radiusInput = '';
    vm.lengthInput = '';
    vm.numCircles = '';
    vm.numSquares = '';
  };

}); // end DefaultController
