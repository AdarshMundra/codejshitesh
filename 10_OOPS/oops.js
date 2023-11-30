const user = {
  username: "Adarsh",
  loginCount: 10,
  singIn: true,
  getUserDetails: function () {
    console.log(`the details are as follows ${this}`);
  }
};


console.log(user);
console.log(user.username);


function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
      console.log(`Welcome ${this.username}`);

  }

  return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);