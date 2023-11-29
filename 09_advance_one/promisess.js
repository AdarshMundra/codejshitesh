const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async Task");
        resolve()
    }, 250);
})

promiseOne.then(() =>{
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 500)
}).then(()=>{console.log("Promised two complete");})

const promiseThree =  new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({"username":"Adarsh","email":"Adarsh@example.com"})
    }, 1000)
})
promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false;
        if(!error){
        resolve({"username":"Adarsh","email":"Adarsh@example.com"})}
        else{
            reject("Error")
        }
    }, 2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Done");
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true;
        if(!error){
        resolve({"username":"Adarsh","password":"Adarsh"})}
        else{
            reject("Error")
        }
    }, 4000)
})

// async function promiseFiveConsumed() {
//     const response = await promiseFive
//     console.log(response)
// }
async function promiseFiveConsumed() {
    try {
        const response = await promiseFive
        console.log(response)    
    } catch (error) {
        console.log(error);
    }
    
}
promiseFiveConsumed()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

// getAllUsers()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.