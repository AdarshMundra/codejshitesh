// const user = {
//     username: "Adarsh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Adarsh"
//     console.log(this.username);
// }

function chai1(){
    let username = "Adarsh"
    console.log(this);
}
chai1()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "Adarsh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()