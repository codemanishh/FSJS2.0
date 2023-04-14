// HOF and Callback
// Rest and spread
// try and Catch
// promises and at the end a small MCQs Games

// Spread and rest ...

// function sumone(x, y) {
//   return x + y;
// }

// let vari = [9, 7, 10, 11, 12, 13 ]; // Variable is Array

// console.log(sumone(...vari)); // Spread

// Rest

// function sum(...args) {
//   // Rest Op
//   console.log(args);
//   let sum = 0;
//   for (const x of args) {
//     sum = sum + x;
//   }
//   return sum;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));

// Try and Catch

// Syntax
// try {
//   let firstname = "Anuarg";
//   console.log(firstname);
// } catch (err) {
//   console.log("Variable name missing");
// } finally {
//   console.log("I will run");
// }

// throw => Explore this topic

// Different type of error we have in Javascript
/*
- Reference error 
- syntax error
- TypeError
*/

// promise
// - pending
// - fullfilled
// - rejected

// Event loop = completed

// Task one completed
// const userOne = () => {
//   console.log("hello One");
// };

// task => Depen
// const userTwo = () => {
//   setTimeout(() => { // promise =>Resolve Rejected
//     console.log("Hello i am inside");
//   }, 3000);
//   console.log("hello two");
// };
// const userthree = () => {
//   console.log("hello three");
// };

// userOne();
// userTwo();
// userthree();

// promise

// const one = () => {
//   return "index page";
// };

// const two = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Credential Correct");
//     }, 3000);
//   });
// };

// const three = () => {
//   return "redicret to home page";
// };

// const callMe = async () => {
//   let Valone = one();
//   console.log(Valone);

//   let ValTwo = await two();
//   console.log(ValTwo);

//   let ValThree = three();
//   console.log(ValThree);
// };

// callMe();
