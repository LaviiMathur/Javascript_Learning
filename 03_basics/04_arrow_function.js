const user = {
    username: "sahil",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // this refer to current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sunny"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "sahil"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "sahil"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "sahil"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "sahil"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()