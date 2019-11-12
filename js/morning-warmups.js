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

//function to return hello there something
var stranger = "stranger";
function helloStranger(stranger = "stranger"){
    return "Hello there " + stranger;
}

// function to return length of an array
function lengthArray(array){
    return array.length;
}

// function that takes float number and returns rounded down
function roundDown(num) {
    if (isNaN(parseFloat(num))) {
        return false
    }
    return Math.floor(num);
}

// function to return quotient of two numbers, return false if not two numbers
function quotient(num1, num2){
    if(typeof num1 == "number" && typeof num2 == "number"){
        return num1 / num2;
    }
    return false;
}

// function to return true if input is string and 8 characters
function stringEight(input){
    return typeof input == 'string' && input.length === 8;
}

// function to count from 1 up to number user passes in
function countUp(num){
    for(var i = 1; i <= num; i++){
        console.log(i);
    }
}

//function that takes in name and age and returns object of name and age
function createPersonObject(name, age){
    return {
        name: name,
        age: age
    };
}

//function that writes FizzBuzz
function fizzBuzz(){
    for(var i = 1; i < 101; i++){
        if (i % 3 === 0 && i % 5 !== 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0 && i % 3 !== 0){
            console.log("Buzz");
        }
        else if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else {
            console.log(i);
        }
    }
}

function shoppingOranges(obj){
    var highest;
    var oranges = 0;
    for (var i = 1; i < obj.length; i++){
        if (obj[i].oranges > oranges){
            highest = obj[i];
        }
    }
    return highest;
}

// var shopping = [
//     {
//         apples: 3,
//         oranges: 1
//     }
//     ,
//     {
//         apples: 3,
//         oranges: 7
//     },
//     {
//         apples: 3,
//         oranges: 5
//     }
// ];
//
// console.log(shoppingOranges(shopping));

// function that accepts array of student objects and returns array of student that are not registered
function notRegistered(array){
    var unregistered = [];
    for(var i = 0; i < array.length; i++){
        if (array[i].register === false){
            unregistered.push(array[i]);
        }
    }
    return unregistered;
}
//
// var students = [
//     {
//         name: "bob",
//         age: 20,
//         register: true
//     },
//     {
//         name: "frank",
//         age: 34,
//         register: false
//     },
//     {
//         name: "sarah",
//         age: 27,
//         register: true
//     },
//     {
//         name: "alex",
//         age: 90,
//         register: false
//     },
//     {
//         name: "bro",
//         age: 5,
//         register: true
//     }
// ];
//
// console.log(notRegistered(students));

// function that will return an array of hamster objects sorted by height
// function hamsterSort(hamsters){
//     function sortNumber(a, b) {
//         return a.heightInMM - b.heightInMM;
//     }
//     hamsters.sort(sortNumber);
//     return hamsters;
//
// }

// function that will take in a whole number from 1-10, and return number spelled out as string
// var randomNum = Math.floor(Math.random() * 10) + 1;
// console.log(returnNumberName(randomNum));
// function returnNumberName(num){
//     switch(num){
//         case 1:
//             return "one";
//         case 2:
//             return "two";
//         case 3:
//             return "three";
//         case 4:
//             return "four";
//         case 5:
//             return "five";
//         case 6:
//             return "six";
//         case 7:
//             return "seven";
//         case 8:
//             return "eight";
//         case 9:
//             return "nine";
//         case 10:
//             return "ten";
//         default:
//             return "not number between 1-10"
//     }
//
// }

//function that returns youre welcome but when only passed object with property gratitude of thank you
// function welcome(obj){
//     if (obj.gratitude === "Thank you"){
//         return "You're Welcome";
//     }
//     return false;
// }
// var thanks = {
//     gratitude: "Thank you"
// };
// var thank = "Thank you";
// console.log(welcome(thanks));
// console.log(welcome(thank));

// write a loop that returns array of even
function evenArray(array){
    let even = [];
    array.forEach(function(num){
        if (num % 2 === 0){
            even.push(num);
        }
    });
    return even;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(evenArray(array));

// var hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "Spetember 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
// alert(helloStranger(stranger));
// stranger = prompt("Please input string");
// alert(helloStranger(stranger));

// console.log(areaTriangle(5, 6, 7));
// var theArray = [4,2,3];
// console.log(returnFirst(theArray));
// console.log(areaTriangle(20, 20, 20));
// console.log(equilateralArea(20));
// console.log(conStrings("ab", "cd", "ef"));
// console.log(areaCircle(4));
// var thing = true;
// console.log(returnType(thing));
// console.log(isPositiveEven(4));
// console.log(isPositiveEven(5));
// console.log(isPositiveEven(-2));
// console.log(promptGreaterFive());
// var array = [3,4,5,6,7];
// console.log(lengthArray(array));
// console.log(roundDown(23.3));
// console.log(quotient(4,2));
// console.log(quotient(6, true));
// console.log(quotient(5));
// countUp(20);
// fizzBuzz();
