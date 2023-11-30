function Multiply(nums) {
    return nums * 5;
}
// console.log(Multiply(5));
// console.log(typeof Multiply);
// console.log(Multiply.power =2);
// console.log(Multiply.prototype);
// console.log(Multiply(5));

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.printMe = function(){console.log(` the score is ${this.score}`)};

createUser.prototype.increment = function(){this.score++}

const chai = new createUser("chai", 25)

chai.printMe()
chai.increment()
chai.printMe()

