// Variable
// Datatype
// Primitve  => Single Value
// Number, String, Boolean, null , undefined

// Non-primitive => Multiple Values
// Array and Object
// Everything in Javascript is OBject
// "use strict";

// typeof

// template LIteral(Template String)
// Javascript Interpolation
// let nameofvaribale = [1, 2, 3, 4];
// console.log(` Anurag ${nameofvaribale}`);

// console.log(typeof null);
// OPerators
// =>

// Conditions

// if else
// switch case
// Ternary Con
// let Bankaccount = 500000000;
// if (Bankaccount == 500000000) {
//   console.log("Material thingss");
// } else if (Bankaccount){
//     console.log("Alto");
// }
//  else {
//   console.log("I am Happy");
// }
// if else

// Switch Case
let user = "Human";

// switch (user) {
//   case "Human":
//     console.log("Hello World");
//     break;
//   case "insaan":
//     console.log("Hey World");
//
// }

// Ternay Operators and Few Call it as Ternay Conditon

// ? True : False

var hello = "he";

hello == "hey" ? console.log("FSJS") : console.log("Anurag");

// Array
// index and Values (Fixed Index)
// Object
// Key and value (Key Can Changed)

let names = [
  "Anurag",
  "Anirudh",
  "VYOM",
  "Varun",
  "NIshand",
  "Jaswant",
  "Pradip",
];
// console.log(names);
// let namesss = new Array(
//   "Anurag",
//   "Anirudh",
//   "VYOM",
//   "Varun",
//   "NIshand",
//   "Jaswant",
//   "Pradip"
// );
// console.log(namesss);
// length
// console.log(names.length);
// Push
// Pop
// Slice
//Splice
// shift
// unshift
// fill
// includes
// indexof
// join
// Keys
// lastindexof
// reverse
// concat
// sort
// trim and split

// Math
// Date

// loops
// while, do while, for loop
// for of and for in

// const number = { 1: "1", 2: 2, 3: 3, 4: 4, 5: 5 };
// for (const num in number) {
//   console.log(number.num);
// }

// Function
// Normal Function
// function with Return type and Parameter
// Anonymouse Function\
// Expresssion Function
// Self Invoking Function

let userDDetails = {
  firstName: "Anurag",
  lastName: "Tiwari",
  courseList: [],
  website: "anuragtiwari.me",
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in ${this.courseList.length}`;
  },
};

// console.log(userDDetails);
userDDetails.buyCourse("FSJS");
console.log(userDDetails.getCourseCount());
