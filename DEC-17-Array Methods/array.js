/*
=> Data Types
=> Varibales and typeof
=> Date
=> Loops
=> Conditions
=> OP
=> Indexing
=> Math
=> Objecy and  Array
*/

// Array In Depth and For of loop
// Array Methods
// let names=['manish','gaurav','aman','akash','anurudh']
// console.log(names);
// console.log(names.length); // Length of Array

// console.log(names[3]);
// console.log(names[names.length - 1]); //to printlast value of array

// names[4] = 'Vinay';
// console.log(names);           //to change the index value
// if you want to change the 4th element of the array then.


// let namess = new Array('Name 1', 'Names 2'); // A way to Decalre a Array // we wont use this but its a option to create a array
// console.log(namess);

// Push => Insert New Values inside the Array ( at the end )
// names.push('VYOM');
// console.log(names);

// Slice----------------------------------------------------------------------
// let names = ['Hitesh Sir', 'Anurag', 'Surya', 'Anirudh', 'Bipul'];
// console.log(names.slice(4,6)); //ek se 5th index thk print ho jayaga


// Splice   ---------------------------------------------------------------

// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// fruit.splice(2, 1, 'Kharab Apple', 'Acha Apple');
// console.log(fruit);
///////// in fruit index 2 se he  kharabApple and AchaApple insert krna start kar do ek index 2 ke dab he ek value ke delete bhe kar dena





// Concatenation   --------------------------------------------------------

// let arr1 = [1, 2, 3, 4];
// let arr2 = [4, 5, 6, 7];
// let arr3 = [6, 7, 6, 7,7,7,7,7,7,7,7,7];

// console.log(arr1.concat(arr2)); // concat 2 array
// console.log(arr1.concat(arr2, arr3));   // concat 3 array



// fill -----------------------------------------------------------------

// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr4); 
// arr4.fill('Anurag', 2, 7);   // index 2 se 6 thk Anurag print krr di
// console.log("after the applying fill method in array arr4"); 
// console.log(arr4); 





// // include-----------TRUE OF FALSE ->> 7 , 7TH  INDEX PE HAI KE NHI -----------------------------------------
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(num.includes(7, 7));



//indexof  --------------------------------------------------------------

// let num = [1, 2, 3, 'Anurag', 4, 5, 6, 7, 8, 'Anurag', 'Anurag'];
// console.log(num.indexOf('Anurag'));




// isArray()  -------------------------------------------------------------
// let num = [1, 2, 3, 'Anurag', 4, 5, 6, 7, 8, 'Anurag', 'Anurag'];
// let num1 = 'Anurag';
// console.log(Array.isArray(num1));
// console.log(Array.isArray('Anurag'));
/////////  If a value 3,4 times in the array then the 1st coming index will print only



// Join  ----------------------------------------------------------
// let Arr1 = [1, 2, 3, 4, 5, 6, 7];
// let var1 = Arr1.join(' 1 ');     /// array ke harEK elements ke bitch 1 aa jayaga ex  "[1 1 2 1 3 1 4 1 5 1 6 1 7]"
// console.log(var1);
// console.log(typeof var1);   // it will print string like any thing not came in [] are string only

// keys
// For of

//lastindexof

// let num = [1, 2, 3, 'Anurag', 4, 5, 6, 7, 8, 'Anurag', 'Anurag'];
// console.log(num.lastIndexOf('Anurag'));

// Map  ------------------------   what ever we pass in the map that apply to all values of the array.   ----------------------------------
// let maths = [1, 4, 9, 16, 25];
// console.log(maths.map(Math.sqrt));


//Pop----------------------------------------------------------
// let maths = [1, 4, 9, 16, 25];

// console.log(maths.pop());
// console.log(maths);

// reverse
// let maths = [1, 4, 9, 16, 25];
// console.log(maths.reverse());




// Shift()   ///it takes the first item and remove it.
// let maths = ['Anurag', 1, 4, 9, 16, 25];
// console.log(maths.shift());
// console.log(maths);


// Sort      ///a,b,c,d ke form me arrange ho jeyaga 
// let names = ['Hitesh Sir', 'Anurag', 'Surya', 'Anirudh', 'Bipul'];
// console.log(names.reverse(names.sort()));



// unShift // age wale index pr add kar dega $adding at the first-------------------------------------
// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];

// fruit.unshift('Apple 1', 'Grapes 2');
// console.log(fruit);

// Converting to Array  ---------------------------------------------------------

// let name = 'Anurag';
// let array1 = name.split('a');
// console.log(array1);
// console.log(typeof(array1));


// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// fruit.splice(2, 1, 'Kharab Apple', 'Acha Apple');
// console.log(fruit);

// output: [ 25, 16, 9, 4, 1 ]



// for of   ---------------------------------------------------------
let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
let Upperfruit = []; // empty Array

for (let i of fruit) {
    Upperfruit.push(i.toUpperCase());
}

console.log(Upperfruit);








// Break and Continue  -------------------------------------------------------
// c
// Contin
// for (let i = 0; i <= 5; i++) {
//     if (i == 3) {
//         continue; // Skip, omit
//     }
//     console.log(i);
// }

// Array Method in JavaScript and Write a Blog on it => (compulsory)


// https://codemanishh.hashnode.dev/array-methods-in-depth-js    
// the article link 😀😀ARRAY SLICE
