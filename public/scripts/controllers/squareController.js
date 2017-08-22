var myApp = angular.module('myApp');

myApp.controller('SquareController', function(){
  console.log('in SquareController');
  vm = this;

  // square object constructor
  vm.square = function(width, height) {
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
  }; // end of square constructor





  vm.createSquare = function(){
    var newSquare = new square(vm.widthInput, vm.heightInput);
    vm.squareObject = {
      type: 'Square',
      width: newSquare.width,
      height: newSquare.height,
      area: newSquare.getArea(),
      string: newSquare.toString()
    };
    console.log('New Square: ', vm.squareObject);
    var $square = $('<div class="square" style="width: ' +
    newSquare.width + 'px; height: ' + newSquare.height + 'px";></div>');
    // appends div(square) to the DOM
    $('.squareDiv').append($square);
  };





}); // end SquareController
