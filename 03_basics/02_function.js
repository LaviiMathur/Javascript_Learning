// ...num1  --> is rest operator

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Rohit Sharma",
    score: 264
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.score}`);
}

// handleObject(user)
handleObject({
    username: "virat Kohli",
    score: 183
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));