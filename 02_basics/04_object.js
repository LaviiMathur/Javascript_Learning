// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="Maxwell"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "virat",
            lastname: "kohli"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={
    1: "a",
    2: "b",
    3: "c"
}
const obj2={
    4: "d",
    5: "e",
    6: "f"
}
// const obj3 ={obj1 , obj2}
// console.log(obj3);

// const obj3 =Object.assign({},obj1 , obj2)
// console.log(obj3);

// spread method
const obj3 ={...obj1 , ...obj2}
console.log(obj3);

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

