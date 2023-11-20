// Stack (Primitive), Heap (Non-Primitive)
//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// Non primitive
// Array, Objects, Functions


let myFirstStack = "Adarsh";

let mySecondStack = myFirstStack;

console.log(myFirstStack);
console.log(mySecondStack);

mySecondStack = "Mundra"
console.log(myFirstStack);
console.log(mySecondStack);


let userOne ={
    email: "abc@abc.com",
    name: "Adarsh"
}

console.log(userOne);
let userTwo ={
    email: "abc@abc.com",
    name: "Adarsh"
}

userTwo.name = "Ankit"
console.log(userOne);
console.log(userTwo);
