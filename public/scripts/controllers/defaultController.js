var myApp = angular.module('myApp');

myApp.controller('DefaultController', function($interval){
  vm = this;

  // stores the rotation of the squares on generate.html
  var degrees = 0;

  // regenerates circles and squares twice every second, and rotates the squares 10 degrees each regen.
  vm.interval = setInterval(function() {
    $('.randCircle').remove();
    $('.randSquare').remove();
    vm.randomGenerator();
    vm.rotate();
  }, 500);

  // sort function array that will hold random # and size of circle/square objects
  vm.sortAreaArray = [];
  // generate function array that will hold 50 random sized circle/square objects
  vm.objectsArray = [];

/*  CIRCLE FUNCTIONALITY  */
  // circle object constructor
  function Circle(type, radius) {
    this.type = type;
    this.radius = radius;
    this.getArea = function () {
      // pi times radius squared
      var area = Math.PI * this.radius * this.radius;
      var roundedArea = area.toFixed(2);
      return roundedArea;
    };
    this.toString = function () {
      // returns a string
      return this.type + ': Radius = ' + this.radius + ', Area = ' + this.getArea();
    };
  } // end of circle constructor

  // verifies the circle inputs
  vm.checkCircleInputs = function(radius){
    if(radius === '' || radius === null || radius === undefined){
      alert('Please enter a radius.');
    } else if(radius <= 0){
      alert('Please enter a radius greater than 0.');
      vm.clearInputs();
    } else {
      vm.clearDiv();
      vm.createCircle(radius);
    } // end of if/else
  }; // end of createCircle function

  // creates a instance of the circle object and display's it on the DOM (depending on the view).
  vm.createCircle = function(radius){
    vm.newCircle = new Circle('Circle', radius);
    vm.newCircle.toString = vm.newCircle.toString();
    vm.newCircle.getArea = vm.newCircle.getArea();
    // creates circle object
    var $circle = $('<div class="circle" style="width: ' +
    (radius * 2) + 'px; height: ' + (radius * 2) + 'px";></div>');
    // appends circle object to the '.circleDiv' Div
    $('.circleDiv').append($circle);
    vm.clearInputs();
    return vm.newCircle;
  };

/*  SQUARE FUNCTIONALITY  */
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

  // verifies the square inputs
  vm.checkSquareInputs = function(length){
    if(length === '' || length === null || length === undefined){
      alert('Please enter a length.');
    } else if(length <= 0){
      alert('Please enter a value greater than 0.');
      vm.clearInputs();
    } else {
      vm.clearDiv();
      vm.createSquare(length);
    } // end of if/else
  };

  // creates a instance of the square object and display's it on the DOM (depending on the view).
  vm.createSquare = function(length){
    vm.newSquare = new Square('Square', length);
    vm.newSquare.toString = vm.newSquare.toString();
    vm.newSquare.getArea = vm.newSquare.getArea();
    var $square = $('<div class="square" style="width: ' +
    length + 'px; height: ' + length + 'px";></div>');
    // appends div(square) to the DOM
    $('.squareDiv').append($square);
    vm.clearInputs();
    return vm.newSquare;
  }; // end of createSquare function

/*  SORTING FUNCTION  */
  // verifies sort inputs
  vm.checkSortInputs = function(numCircles, numSquares){
    if(numCircles === '' || numCircles === null || numCircles === undefined || numSquares === '' || numSquares === null || numSquares === undefined) {
      alert('Please enter a value in both fields.');
    } else if(numCircles <= 0 || numSquares <= 0){
      alert('Please enter values greater than 0.');
      vm.clearInputs();
    } else {
      vm.clearDiv();
      vm.sortAreaArray = [];
      vm.createObjArray(numCircles, numSquares);
    } // end of if/else
  }; // end of checkSortInputs function

  // takes in inputs from user and creates random sized circles and squares and adds them to an array which gets displayed and sorted by area in descending order.
  vm.createObjArray = function(numCircles, numSquares){
    // for loop that randomly generates circles
    for (var i = 1; i <= numCircles; i++) {
      var ranRadius = Math.floor((Math.random() * 100) + 1);
      vm.sortAreaArray.push(vm.createCircle(ranRadius));
    } // end of circle for loop
    // for loop that randomly generates squares
    for (var y = 1; y <= numSquares; y++) {
      var ranLength = Math.floor((Math.random() * 100) + 1);
      vm.sortAreaArray.push(vm.createSquare(ranLength));
    } // end of square for loop
    // sorts objects and orders them from large to small based on area.
    vm.sortAreaArray.sort(function(a, b) {
      return parseFloat(b.getArea) - parseFloat(a.getArea);
    });
    // loop through array and displays objects to the DOM
    for (var z = 0; z < vm.sortAreaArray.length; z++) {
      if(vm.sortAreaArray[z].type === 'Circle'){
        var $sortCircle = $('<div class="sortCircle" style="width: ' +
        (vm.sortAreaArray[z].radius * 2) + 'px; height: ' + (vm.sortAreaArray[z].radius * 2) + 'px";></div>');
        // appends div(circle) to the DOM
        $('.sortingDiv').append($sortCircle);
      } else {
        var $sortSquare = $('<div class="sortSquare" style="width: ' +
        vm.sortAreaArray[z].length + 'px; height: ' + vm.sortAreaArray[z].length + 'px";></div>');
        // appends div(square) to the DOM
        $('.sortingDiv').append($sortSquare);
      }
    }
  }; //end of createObjArray function

/*  GENERATE FUNCTION  */
  // generates 50 random sized squares and circles and displays them to the DOM
  vm.randomGenerator = function(){
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
  vm.rotate = function(){
    $(".randSquare").css({'transform': 'rotate(' + degrees + 'deg)'});
    degrees += 10;
  };

/*  CLEAR FUNCTIONALITY  */
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
