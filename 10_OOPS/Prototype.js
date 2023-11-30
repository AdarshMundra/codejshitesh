// let myName = "hitesh     "
// let myCannel = "chai     "

// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"]


let heroSuperPower={
    thor: "Hammer",
    spiderman: "Sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    },
    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`);
    }
}


// heroSuperPower.getSpiderPower()


// Everyone Get Access
Object.prototype.Adarsh = function () {
    console.log("Adarsh is present in all object");
}

heroSuperPower.Adarsh()
myHeros.Adarsh()

// Only Array get Access
Array.prototype.heyAdarsh = function(){
    console.log("Hello Adarsh" );
}
myHeros.heyAdarsh()
// heroSuperPower.heyAdarsh()

// inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
console.log(TASupport.isAvailable);
Teacher.__proto__ = User
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Adarsh   ".trueLength()
"iceTea".trueLength()