var myApp = angular.module('myApp');

myApp.controller('DefaultController', function(DefaultService){
  var vm = this;
  vm.newArray = [];
  
  // verifies the circle inputs
  vm.createCircle = function(radius){
    if(radius === '' || radius === null || radius === undefined){
      alert('Please enter a radius.');
    } else if(radius <= 0){
      alert('Please enter a value greater than 0.');
      vm.clearInputs();
    } else {
      vm.clearDiv();
      vm.clearInputs();
      vm.newCircle = DefaultService.createCircle(radius);
    } // end of if/else
  }; // end of createCircle function

  // verifies the square inputs
  vm.createSquare = function(length){
    if(length === '' || length === null || length === undefined){
      alert('Please enter a length.');
    } else if(length <= 0){
      alert('Please enter a value greater than 0.');
      vm.clearInputs();
    } else {
      vm.clearDiv();
      vm.clearInputs();
      vm.newSquare = DefaultService.createSquare(length);
    } // end of if/else
  }; // end of createSquare function

  // verifies the sort inputs
  vm.createSortObjects = function(numCircles, numSquares){
    if(numCircles === '' || numCircles === null || numCircles === undefined || numSquares === '' || numSquares === null || numSquares === undefined) {
      alert('Please enter a value in both fields.');
    } else if(numCircles <= 0 || numSquares <= 0){
      alert('Please enter values greater than 0.');
      vm.clearInputs();
    } else {
      vm.clearDiv();
      vm.clearInputs();
      vm.newArray = DefaultService.createObjArray(numCircles, numSquares);
    } // end of if/else
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
