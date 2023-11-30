// ES6

class user{
    constructor(username, email,password){
        this.username=username,
        this.email = email,
        this.password = password
    }
    encryptPassword(){
        return `${this.password}vdsbkvbadj`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const chai = new user("chai","C@c.in","kjfqwckbj");

console.log(chai);
console.log(chai.changeUsername());
console.log(chai.encryptPassword());

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());