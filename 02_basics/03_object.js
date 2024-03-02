//singleton----made from constructor
// Object.create  // this is constructor method


// to add symbol datatype as a key in object 
const mySym = Symbol("key1")

// object literals
const JsUser ={
    name: "Sahil",
    "fullName": "Sahil Ansari",
    age: 19,
    location: "Delhi",
    email: "sahil920ansari@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym] : "mykey1"

}
// access method
console.log(JsUser.email);
// it is not possible to access full name with dot 
// there is another method to acess
console.log(JsUser["fullName"]);

console.log(JsUser[mySym])

JsUser.isLoggedIn = true
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Smile and the world smile with you!!!!!");
}
console.log(JsUser.greeting())


JsUser.greetingTwo = function(){
    console.log(`Smile ${this.fullName}`);
}
console.log(JsUser.greetingTwo())
