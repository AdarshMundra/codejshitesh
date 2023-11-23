// console.log("A");
// console.log("D");
// console.log("A");
// console.log("R");
// console.log("S");
// console.log("H");


function sayMyName() {
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");

}

sayMyName();


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers("3",4)
// addTwoNumbers(3,null)

function addTwoNumbers(number1, number2){
    const result = number1 + number2;
    return result;
}

console.log( addTwoNumbers(3,4))

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Adarsh",
    prices: 1999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


