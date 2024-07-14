console.log("Hello, POO en JS intermedio");

const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        console.log('this', this);
        console.log("this.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
}

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// Object.defineProperty(juan, "navigator", {
//     value: "Chrome",
//     enumerable: false, 
//     writable: true, 
//     configurable: true
// })

// Object.defineProperty(juan, "terminal", {
//     value: "cmder",
//     enumerable: true, 
//     writable: false,
//     configurable: true
// })

// Object.defineProperty(juan, "editor", {
//     value: "VScode",
//     enumerable: true,
//     writable: true,
//     configurable: false
// })

// Object.defineProperty(juan, "pruebaNasa", {
//     value: "Extraterrestres",
//     enumerable: false,
//     writable: false,
//     configurable: false
// })

// Object.seal(juan)
Object.freeze(juan)

console.log(Object.getOwnPropertyDescriptors(juan));
