// object destructing

const course = {
    coursename: "js learning",
    price: "999",
    courseInstructor: "Sahil Ansari"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// json
// {
//     "name": "Sahil Ansari",
//     "coursename": "js learning",
//     "price": "muft"
// }

[
    {},
    {},
    {}
]