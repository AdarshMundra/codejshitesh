// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const iterator of arr) {
    // console.log(`object are ${iterator}`);
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(`object are ${greet}`);
}

// MAP
const map = new Map();
map.set('IN','India');
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(`Key =${key} => Value =${value}`);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
    
}