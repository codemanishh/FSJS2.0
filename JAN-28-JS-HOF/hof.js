// HOF => Higher Order Function
// CALLBACK
// function is calling  a function
// Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// function a() {
//   console.log("I was called by a function");
// }

// function b() {
//   a();
// }

// b();

// mini Program
// const callback = (n) => {
//   return n ** 2;
// };

// function cube(callback, n) {
//   return callback(n) * n;
// }

// console.log(cube(callback, 2));

// For Each
// forEach() is HOF, the () => {} inside it is callback

// const arr = ["hey", "hi", "hello", "hola", "Namaste"];
// arr.forEach((ani) => {
//   console.log(ani);
// });

// arr.forEach(myfunc);
// function myfunc(val) {
//   console.log(val);
// }

// SetTimeOut

// setTimeout(() => {
//   console.log("Hello FSJS 2");
// }, 3000);

// setInterval(() => {
//   console.log("`😇`");
// }, 1000);

// ForEACH
// map
// filter
// reduce
// find
// every
// some
// sort

// map

// const numbers = [1, 2, 3, 4, 5, 6];
// const numSqu = numbers.map((num) => num * num);
// console.log(numSqu);

// Filter

// const count = [
//   "India",
//   "Pakistan",
//   "Canada",
//   "Ireland",
//   "Japan",
//   "Kenya",
//   "Finland",
//   "Germany",
//   "Srilanka",
//   "Bharat",
// ];

// const store = count.filter((val) => val.includes("land"));
// console.log(store);

// Reduce
// Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// const num = [1, 2, 3, 4, 5, 6, 7];
// const sum = num.reduce((acc, curr) => acc + curr, 1);
// console.log(sum);

// Sort
/* 
- Anurag 
- Anirudh
- Hitesh sir 
- Vyom
- Bishal
- Mayur
- snehal
- momin
- Surya
*/

// const names = [
//   "Anurag",
//   "Anirudh",
//   "Hitesh sir ",
//   "Vyom",
//   "Bishal",
//   "Mayur",
//   "snehal",
//   "momin",
//   "Surya",
// ];

// console.log(names.sort());
// console.log(names.reverse());

// destructuring and Spread and Rest

// const sci = [2.72, 3.14, 9.81, 37, 100];
// let [e, pi, grav, bodytemp, boiltemp] = sci;

// console.log(e, pi, grav, bodytemp, boiltemp);

// const arr1 = [1, 2, 3];
// let [var1, , var2] = arr1;
// console.log(var1, var2);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let [num1, num2, ...rest] = arr2;
console.log(num1, num2);
console.log(rest);
