// alert("hallow manish")   //to check js is connected
let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "black adam", "superman"]
//🌟⭐🌟🌟bowser open karne pe you see the prototype option jo ke nhi hona chhahiye the if you write myHeros in the consol.
//to basically whats happens here is arrys are inheriting some properties form the objects and there properties are being injected by the prototype

// 👿👿 class moto is -----> how we can add our costomise properties in these protoypes  😁😀😁😁😁



let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){  //classic method,function,object;
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is peresent in all objects`);
}

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

myHeros.hitesh()

// //inheritance 

// const User = {
//     name: "top name",
//     email: "topuser@gmail.com"
// }

// const Teacher = {
//     makeVideos: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TSAssistant = {
//     makeAssignment: 'JS assigment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// //modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)


// // Goal: get truelength of string

// let yourname = "pooja"

// String.prototype.truelength = function(){
//     console.log(`${this.name}`);
//     console.log(`true length is: ${this.trim().length}`);
// }

// let myname = "hitesh   "
