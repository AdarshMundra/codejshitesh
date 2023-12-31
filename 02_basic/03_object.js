
// Object.create
// singleton
// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Adarsh",
    "full name": "Adarsh Mundra",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Adarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "adarsh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "adarsh@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
