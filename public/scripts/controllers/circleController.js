var myApp = angular.module('myApp');

myApp.controller('CircleController', function($location){
  console.log('in CircleController');

  $(onReady);

  function onReady(){
    // click events
    $('#circleBtn').on('click', function(){
      $('.circle').remove();
      // if/else checks to see if user input is empty and if input is less than 0
      if($("#radiusInput").val() === null || $("#radiusInput").val() === undefined || $("#radiusInput").val() === '') {
        alert('Please enter a radius.');
      } else if($("#radiusInput").val() <= 0){
        // alerts user to enter a value greater than 0
        alert('Please enter a radius greater than 0.');
        // clears the radius input
        $("#radiusInput").val('');
      } else {
        // takes in user input (radius)
        var userInput = $("#radiusInput").val();
        // creates an instance of our circle constructor based on user input
        var newCircle = new circle(userInput);
        // logs all of the current circles relevant information
        console.log('Radius = ', newCircle.radius);
        console.log('Area = ', newCircle.getArea());
        console.log(newCircle.toString());
        document.getElementById("results").innerHTML = newCircle.toString();
        // creates a div(circle) based on user input
        var $circle = $('<div class="circle" style="width: ' +
        newCircle.radius + 'px; height: ' + newCircle.radius + 'px";></div>');
        // appends div(circle) to the DOM
        $('.circleDiv').append($circle);
        $("#radiusInput").val('');
      } // end if/else
    }); // end click function
  } // end 'onReady' function

  // circle object constructor
  function circle(radius) {
      this.radius = radius;
      this.getArea = function () {
        // pi times radius squared
          return Math.PI * this.radius * this.radius;
      };
      this.toString = function () {
        // returns a string
          return 'Circle: Radius = ' + this.radius + ', Area = ' + this.getArea();
      };
  } // end of circle function

}); // end CircleController
