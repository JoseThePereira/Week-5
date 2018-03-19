$(document).ready(function(){
    

// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);

var wins=0;
var loses=0;
var right;
var right1;
var right2;
var right3;

$("#1").on("click", function () {
    console.log("ok");
    right = wins + 1;
    $("#result").html(right);
});
$("#6").on("click", function () {
    console.log("ok");
    right1 = right + 1;
    $("#result").html(right1);
});
$("#11").on("click", function () {
    console.log("ok");
    right2 = right1 + 1;
    $("#result").html(right2);
});
$("#14").on("click", function () {
    console.log("ok");
    right3 = right2 + 1;
    $("#result").html(right3);
});

})
