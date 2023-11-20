const name1  = "Adarsh ";
const repo_count = 20;

console.log(name1 + repo_count);

console.log(`my name is ${name1} and repo count is ${repo_count}`);


const gameName = new String("Adarsh-AM-Mundra");
console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   adarsh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://adarsh.com/adarsh%mundra"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));