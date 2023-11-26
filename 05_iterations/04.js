const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     if (myObject.hasOwnProperty.call(myObject, key)) {
//         const element = myObject[key];
//         console.log(element);
//     }
// }

for (const key in myObject) {
    // console.log(`the key is ${key} and value is ${myObject[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
