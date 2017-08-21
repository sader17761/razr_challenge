var myApp = angular.module('myApp');

myApp.controller('SquareController', function($location){
  console.log('in SquareController');

  $(onReady);

  function onReady(){
    // click events
    $('#squareBtn').on('click', function(){
      $('.square').remove();
      // if/else checks to see if user input is empty and if input is less than 0
      if($("#widthInput").val() === null || $("#widthInput").val() === undefined || $("#widthInput").val() === '' || $("#heightInput").val() === null || $("#heightInput").val() === undefined || $("#heightInput").val() === '') {
        alert('Please enter a width and height.');
      } else if($("#widthInput").val() <= 0 || $("#heightInput").val() <= 0){
        // alerts user to enter a value greater than 0
        alert('Please enter values greater than 0.');
        // clears the width and height input
        $("#widthInput").val('');
        $("#heightInput").val('');
      } else {
        // takes in user inputs (width and height)
        var userWidth = $("#widthInput").val();
        var userHeight = $("#heightInput").val();
        // creates an instance of our circle constructor based on user input
        var newSquare = new square(userWidth, userHeight);
        // displays square information to the DOM
        document.getElementById("results").innerHTML = newSquare.toString();
        // creates a div(square) based on user input
        var $square = $('<div class="square" style="width: ' +
        newSquare.width + 'px; height: ' + newSquare.height + 'px";></div>');
        // appends div(square) to the DOM
        $('.squareDiv').append($square);
        // clears the inputs
        $("#widthInput").val('');
        $("#heightInput").val('');
      } // end if/else
    }); // end click function
  } // end 'onReady' function

  // square object constructor
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


}); // end SquareController
