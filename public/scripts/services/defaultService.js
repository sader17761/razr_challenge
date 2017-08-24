angular.module('myApp');

myApp.service('DefaultService', function($http){
  var sv = this;

  // stores the rotation of the squares on generate.html
  var degrees = 0;

  // regenerates circles and squares twice every second, and rotates the squares 10 degrees each regen.
  sv.interval = setInterval(function() {
    $('.randCircle').remove();
    $('.randSquare').remove();
    sv.randomGenerator();
    sv.rotate();
  }, 500);

  // sort function array that will hold random # and size of circle/square objects
  sv.sortAreaArray = [];
  // generate function array that will hold 50 random sized circle/square objects
  sv.objectsArray = [];

/* CIRCLE FUNCTIONALITY */
  sv.checkCircleInputs = function(radius){
    console.log('In defaultService with: ', radius);
    if(radius === '' || radius === null || radius === undefined){
      alert('Please enter a radius.');
    } else if(radius <= 0){
      alert('Please enter a radius greater than 0.');
      sv.clearInputs();
    } else {
      sv.clearDiv();
      return sv.createCircle(radius);
    } // end of if/else
  };

  // creates a instance of the circle object and display's it on the DOM (depending on the view).
  sv.createCircle = function(radius){
    sv.newCircle = new Circle('Circle', radius);
    sv.newCircle.toString = sv.newCircle.toString();
    sv.newCircle.getArea = sv.newCircle.getArea();
    console.log(sv.newCircle);
    // creates circle object
    var $circle = $('<div class="circle" style="width: ' +
    (radius * 2) + 'px; height: ' + (radius * 2) + 'px";></div>');
    // appends circle object to the '.circleDiv' Div
    $('.circleDiv').append($circle);
    sv.clearInputs();
    return sv.newCircle;
  };

  // circle object constructor
  function Circle(type, radius) {
    this.type = type;
    this.radius = radius;
    this.getArea = function () {
      // calculates the area of a circle (pi * radius squared)
      var area = Math.PI * this.radius * this.radius;
      var roundedArea = area.toFixed(2);
      return roundedArea;
    };
    this.toString = function () {
      // returns a string
      return this.type + ': Radius = ' + this.radius + ', Area = ' + this.getArea();
    };
  } // end of circle constructor

/* SQUARE FUNCTIONALITY */
  // verifies the square inputs
  sv.checkSquareInputs = function(length){
    if(length === '' || length === null || length === undefined){
      alert('Please enter a length.');
    } else if(length <= 0){
      alert('Please enter a value greater than 0.');
      sv.clearInputs();
    } else {
      sv.clearDiv();
      return sv.createSquare(length);
    } // end of if/else
  }; // end of checkSquareInputs function

  // creates a instance of the square object and display's it on the DOM (depending on the view).
  sv.createSquare = function(length){
    sv.newSquare = new Square('Square', length);
    sv.newSquare.toString = sv.newSquare.toString();
    sv.newSquare.getArea = sv.newSquare.getArea();
    var $square = $('<div class="square" style="width: ' +
    length + 'px; height: ' + length + 'px";></div>');
    // appends div(square) to the DOM
    $('.squareDiv').append($square);
    sv.clearInputs();
    return sv.newSquare;
  }; // end of createSquare function

  // square object constructor
  function Square(type, length) {
    this.type = type;
    this.length = length;
    this.getArea = function () {
      // returns the area of the square
      return this.length * this.length;
    };
    this.toString = function () {
      // returns a string
      return 'Square: Size = ' + this.length + ' x ' + this.length + ', Area = ' + this.getArea();
    };
  } // end of square constructor

/* SORTING FUNCTIONALITY */
    // verifies sort inputs
    sv.checkSortInputs = function(numCircles, numSquares){
      if(numCircles === '' || numCircles === null || numCircles === undefined || numSquares === '' || numSquares === null || numSquares === undefined) {
        alert('Please enter a value in both fields.');
      } else if(numCircles <= 0 || numSquares <= 0){
        alert('Please enter values greater than 0.');
        sv.clearInputs();
      } else {
        sv.clearDiv();
        sv.sortAreaArray = [];
        sv.createObjArray(numCircles, numSquares);
        return sv.sortAreaArray;
      } // end of if/else
    }; // end of checkSortInputs function

    // takes in inputs from user and creates random sized circles and squares and adds them to an array which gets displayed and sorted by area in descending order.
    sv.createObjArray = function(numCircles, numSquares){
      // for loop that randomly generates circles
      for (var i = 1; i <= numCircles; i++) {
        var ranRadius = Math.floor((Math.random() * 100) + 1);
        sv.sortAreaArray.push(sv.createCircle(ranRadius));
      } // end of circle for loop
      // for loop that randomly generates squares
      for (var y = 1; y <= numSquares; y++) {
        var ranLength = Math.floor((Math.random() * 100) + 1);
        sv.sortAreaArray.push(sv.createSquare(ranLength));
      } // end of square for loop
        // sorts objects and orders them from large to small based on area.
      sv.sortAreaArray.sort(function(a, b) {
        return parseFloat(b.getArea) - parseFloat(a.getArea);
      });
      // loop through array and displays objects to the DOM
      for (var z = 0; z < sv.sortAreaArray.length; z++) {
        if(sv.sortAreaArray[z].type === 'Circle'){
          var $sortCircle = $('<div class="sortCircle" style="width: ' +
          (sv.sortAreaArray[z].radius * 2) + 'px; height: ' + (sv.sortAreaArray[z].radius * 2) + 'px";></div>');
          // appends div(circle) to the DOM
          $('.sortingDiv').append($sortCircle);
        } else {
          var $sortSquare = $('<div class="sortSquare" style="width: ' +
          sv.sortAreaArray[z].length + 'px; height: ' + sv.sortAreaArray[z].length + 'px";></div>');
          // appends div(square) to the DOM
          $('.sortingDiv').append($sortSquare);
        } // end if/else
      } // end for loop
    }; //end of createObjArray function

/* GENERATE FUNCTIONALITY */
    // generates 50 random sized squares and circles and displays them to the DOM
    sv.randomGenerator = function(){
      for (var i = 1; i <= 100; i++) {
        var ranOrder = Math.floor((Math.random() * 100) + 1);
        if(ranOrder <= 50){
          var ranRadius = Math.floor((Math.random() * 100) + 1);
          var $circle = $('<div class="randCircle" style="width: ' +
          (ranRadius * 2) + 'px; height: ' + (ranRadius * 2) + 'px";></div>');
          // appends div(circle) to the DOM
          $('.generateDiv').append($circle);
        } else {
          var ranLength = Math.floor((Math.random() * 100) + 1);
          var $square = $('<div class="randSquare" style="width: ' +
          ranLength + 'px; height: ' + ranLength + 'px";></div>');
          // appends div(square) to the DOM
          $('.generateDiv').append($square);
        } // end of if/else
      } // end of for loop
    }; // end of randomGenerator function

    // rotates the squares 10 degrees each time it's called.
    sv.rotate = function(){
      $(".randSquare").css({'transform': 'rotate(' + degrees + 'deg)'});
      degrees += 10;
    };

/* CLEAR FUNCTIONALITY */
    // clears all display divs
    sv.clearDiv = function(){
      $('.circle').remove();
      $('.square').remove();
      $('.sortCircle').remove();
      $('.sortSquare').remove();
    };

    // clears all user inputs
    sv.clearInputs = function(){
      sv.radiusInput = '';
      sv.lengthInput = '';
      sv.numCircles = '';
      sv.numSquares = '';
    };

}); // end of DefaultService
