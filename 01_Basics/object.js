//Defining a symbol
const score = Symbol("key1");

//Using the symbol as a key
const abc = {
    name: "dev",
    [score]: "Happy",
    id: "1234",
    email: "devesh@gmail.com"

}

//console.log(abc.name);
// console.log(abc["email"]);
//console.log(abc[score])

//Using functions in objects
abc.greeting = function(){
    console.log(`Hello user, ${this.name}`)
}
console.log(abc.greeting())