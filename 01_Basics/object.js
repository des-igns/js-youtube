//Object Literals

//Defining a symbol
// const score = Symbol("key1");

// Using the symbol as a key
// const abc = {
//     name: "dev",
//     [score]: "Happy",
//     id: "1234",
//     email: "devesh@gmail.com"

// }

//console.log(abc.name);
// console.log(abc["email"]);
//console.log(abc[score])

//Using functions in objects
// abc.greeting = function(){
//     console.log(`Hello user, ${this.name}`)
// }
// console.log(abc.greeting())

// This is a Singleton object
// const tinderUser = new Object()

// This is a Object Literals
// const tinderUser = {}
// tinderUser.name = "Dev"
// tinderUser.id = "123"
// tinderUser.loggedIn = false
// console.log(tinderUser);

//Nested objects
// const profile = {
//     names: {
//         fullname:{
//             first: "Devesh",
//             last: "Mathur"
//         }
//     }
// }
// console.log(profile.names.fullname.first);


//Combining 2 objects
const obj1 = { 1:"abc", 2:"qwe" }
const obj2 = { 5:"hjk", 4:"tyu" }

// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3)
