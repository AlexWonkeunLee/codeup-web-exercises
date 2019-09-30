"use strict"
console.log("Hello from external JavaScript.")
alert("Welcome to my Website!");
var color = prompt("What is your favorite color?");
alert("Great! My favorite color is also " + color);
var price = prompt("How much does each day cost?");
var movie1 = prompt("How long will you rent Little Mermaid?");
var movie2 = prompt("How long will you rent Brother Bear?");
var movie3 = prompt("How long will you rent Hercules?");
var total = (movie1 * price) + (movie2 * price) + (movie3 * price);
alert("Total price for renting is " + total);
var googleWork = prompt("How long did you work in Google?");
var googlePay = prompt("How much did they pay per hour?");
var amazonWork = prompt("How long did you work in Amazon?");
var amazonPay = prompt("How much did they pay per hour?");
var facebookWork = prompt("How long did you work in Facebook?");
var facebookPay = prompt("How much did they pay per hour?");
var paycheck = (googlePay * googleWork) + (amazonPay * amazonWork) + (facebookPay * facebookWork);
alert("Total pay you get is: " + paycheck);

var classFull = prompt("Is the class full? Enter 1 for yes and 0 for no");
var classConflict = prompt("Does it conflict with your current schedule? Enter 1 for yes and 0 for no");
var canTake = false;
if (classFull == false && classConflict == false){
    var canTake = true;
}
if (canTake == true) {
    alert("You can enroll in this class.");
}
else {
    alert("You cannot enroll in this class.");
}

var isExpired = prompt("Is the product expired? Enter 1 for yes and 0 for no");
if (isExpired == false) {
    var isPremium = prompt("Are you a premium member? Enter 1 for yes and 0 for no");
    var items = prompt("How many items will you buy");
    if(isPremium == true || items > 2){
        alert("You can get this limited offer!");
    }
    else {
        alert("You cannot get this limited offer unless you buy 2 or more or are a premium member");
    }
}
else {
    alert("Sorry this offer is expired.");
}
