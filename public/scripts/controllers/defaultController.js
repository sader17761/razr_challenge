var myApp = angular.module('myApp');

myApp.controller('DefaultController', function($interval){
  vm = this;

  var degrees = 0;

  var intervalID = setInterval(function() {
    vm.clearDiv();
    vm.randomGenerator();
    vm.rotate();
  }, 500);

  // array that will hold random sized circle/square objects
  vm.sortAreaArray = [];
  vm.objectsArray = [];

  // circle object constructor
  function circle(radius) {
      this.getArea = function () {
        // pi times radius squared
        var area = Math.PI * radius * radius;
        var roundedArea = area.toFixed(2);
        return roundedArea;
      };
      this.toString = function () {
        // returns a string
        return 'Circle: Radius = ' + radius + ', Area = ' + this.getArea();
      };
  } // end of circle constructor

  // square object constructor
  function square(length) {
      this.getArea = function () {
        // returns the area of the square
        return length * length;
      };
      this.toString = function () {
        // returns a string
        return 'Square: Size = ' + length + ' x ' + length + ', Area = ' + this.getArea();
      };
  } // end of square constructor

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
    var newCircle = new circle(radius);
    vm.circleObject = {
      type: 'Circle',
      radius: radius,
      area: newCircle.getArea(),
      string: newCircle.toString()
    };
    var $circle = $('<div class="circle" style="width: ' +
    radius + 'px; height: ' + radius + 'px";></div>');
    // appends div(circle) to the DOM
    $('.circleDiv').append($circle);
    vm.clearInputs();
    return vm.circleObject;
  };

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
    var newSquare = new square(length);
    vm.squareObject = {
      type: 'Square',
      length: length,
      area: newSquare.getArea(),
      string: newSquare.toString()
    };
    var $square = $('<div class="square" style="width: ' +
    length + 'px; height: ' + length + 'px";></div>');
    // appends div(square) to the DOM
    $('.squareDiv').append($square);
    vm.clearInputs();
    return vm.squareObject;
  }; // end of createSquare function

  // verifies sort inputs
  vm.checkSortInputs = function(numCircles, numSquares){
    if(numCircles === '' || numCircles === null || numCircles === undefined || numSquares === '' || numSquares === null || numSquares === undefined) {
      alert('Please enter a value in both fields.');
    } else if(numCircles <= 0 || numSquares <= 0){
      alert('Please enter values greater than 0.');
      vm.clearInputs();
    } else {
      vm.createObjArray(numCircles, numSquares);
    } // end of if/else
  }; // end of checkSortInputs function

  // takes in inputs from user and creates random sized circles and squares and adds them to an array which gets displayed and sorted by area in descending order.
  vm.createObjArray = function(numCircles, numSquares){
    for (var i = 1; i <= numCircles; i++) {
      var ranRadius = Math.floor((Math.random() * 100) + 1);
      vm.sortAreaArray.push(vm.createCircle(ranRadius));
    } // end of circle for loop
    for (var y = 1; y <= numSquares; y++) {
      var ranLength = Math.floor((Math.random() * 100) + 1);
      vm.sortAreaArray.push(vm.createSquare(ranLength));
    } // end of square for loop
    vm.sortAreaArray.sort(function(a, b) {
      return parseFloat(b.area) - parseFloat(a.area);
    });
  }; //end of createObjArray function

  vm.randomGenerator = function(){
    for (var i = 1; i <= 100; i++) {
      var ranOrder = Math.floor((Math.random() * 100) + 1);
      if(ranOrder <= 50){
        var ranRadius = Math.floor((Math.random() * 100) + 1);
        // vm.objectsArray.push(vm.createCircle(ranRadius));
        var $circle = $('<div class="randCircle" style="width: ' +
        ranRadius + 'px; height: ' + ranRadius + 'px";></div>');
        // appends div(circle) to the DOM
        $('.generateDiv').append($circle);
      } else {
        var ranLength = Math.floor((Math.random() * 100) + 1);
        // vm.objectsArray.push(vm.createSquare(ranLength));
        var $square = $('<div class="randSquare" style="width: ' +
        ranLength + 'px; height: ' + ranLength + 'px";></div>');
        // appends div(square) to the DOM
        $('.generateDiv').append($square);
      } // end of if/else
    } // end of for loop
  }; // end of randomGenerator function

  vm.rotate = function(){
    $(".randSquare").css({'transform': 'rotate(' + degrees + 'deg)'});
    degrees += 10;
  };

  // clears all display divs
  vm.clearDiv = function(){
    $('.circle').remove();
    $('.square').remove();
    $('.randCircle').remove();
    $('.randSquare').remove();
  };

  // clears all user inputs
  vm.clearInputs = function(){
    vm.radiusInput = '';
    vm.lengthInput = '';
    vm.numCircles = '';
    vm.numSquares = '';
  };

}); // end DefaultController
