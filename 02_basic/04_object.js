// singleton
const tinderUser = new Object()
// nonsingleton
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const user ={
    email: "adarsh@yopmail.com",
    userFullname:{
        fullname:{
            firstName:"Adarsh",
            lastName:"Mundra"
        }
    }
}
// console.log(user);
// console.log(user.userFullname);
// console.log(user.userFullname.fullname);
// console.log(user.userFullname.fullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

let obj3 = { obj1, obj2 }

// console.log(obj3);

const obj5 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj5);

const obj6 = {...obj1, ...obj2}
// console.log(obj6);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]
console.log(users);

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Adarsh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);




