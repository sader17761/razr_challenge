var myApp = angular.module('myApp');

myApp.controller('SortingController', function($location){
  console.log('in SortingController');
  vm = this;

  // empty array to store circles and squares
  vm.array = [];

  $(onReady);

  function onReady(){
    $('#sortBtn').on('click', function(){
      // takes in user inputs (# of Circles and Squares)
      var numCircles = $("#numCirclesInput").val();
      var numSquares = $("#numSquaresInput").val();
      console.log(numCircles);
      console.log(numSquares);
      createCircles(numCircles, nu);
      // creates an instance of our circle constructor based on user input
      //var newSquare = new square(userWidth, userHeight);
      // displays square information to the DOM
      //document.getElementById("results").innerHTML = newSquare.toString();
      // creates a div(square) based on user input
      //var $square = $('<div class="square" style="width: ' +
      //newSquare.width + 'px; height: ' + newSquare.height + 'px";></div>');
      // appends div(square) to the DOM
      //$('.squareDiv').append($square);
    });
  }

  function createCircles(num){
    for (var i = 1; i < num.length; i++) {

    }
  }

  function square(width, height) {
      this.width = width;
      this.height = height;
      this.getArea = function () {
        // pi times radius squared
          return this.width * this.height;
      };
      this.toString = function () {
        // returns a string
          return 'Square: Size = ' + this.width + ' x ' + this.height + ', Area = ' + this.getArea();
      };
  } // end of square function


}); // end SortingController
