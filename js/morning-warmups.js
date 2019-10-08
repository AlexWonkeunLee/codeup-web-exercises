"use strict";

// function to add two numbers
function addValues(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log(addValues(2,3));

// function to calculate area of triangle by taking 3 sides as parameters
function areaTriangle(num1, num2, num3) {
    var perimeter = num1 + num2 + num3;
    var p = perimeter / 2;
    var area = Math.sqrt(p * (p - num1) * (p - num2) * (p - num3));
    return area;
}

//function to that returns the first element of an array
function returnFirst(array) {
    return array[0];
}

// function to return equilateral triangle area
function equilateralArea (num) {
    return (Math.sqrt(3) / 4) * (num * num);
}

//function that concatenates three strings together
function conStrings(string1, string2, string3){
    return string1 + string2 + string3;
}

//function that calculates the area of a circle when given diameter
function areaCircle(diameter){
    return .25 * Math.PI * diameter * diameter;
}
//function that returns perimeter of quadrilateral
function perimeterQuad(side1, side2, side3, side4){
    return side1 + side2 + side3 + side4;
}

//function to return type of element
function returnType(thing){
    return typeof(thing);
}

//function to return true only when given positive even number
function isPositiveEven(num){
    return num > 0 && num % 2 == 0;
}

//function that prompts user for number and returns true if greater than five
function promptGreaterFive(){
    var num = prompt("Give a number please: ");
    return num > 5;
}

console.log(areaTriangle(5, 6, 7));
var theArray = [4,2,3];
console.log(returnFirst(theArray));
console.log(areaTriangle(20, 20, 20));
console.log(equilateralArea(20));
console.log(conStrings("ab", "cd", "ef"));
console.log(areaCircle(4));
var thing = true;
console.log(returnType(thing));
console.log(isPositiveEven(4));
console.log(isPositiveEven(5));
console.log(isPositiveEven(-2));
console.log(promptGreaterFive());