function setUsername(Username) {
    this.Username = Username;
    console.log("Called");

}

function createUser(Username,email,password) {
    // setUsername(Username)
    setUsername.call(this,Username)
    this.email = email
    this.password = password
}

const name1 = new createUser ("adarsh",'am@am.com','123');
console.log(name1);