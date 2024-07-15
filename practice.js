const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    }
}

const obj2 = {};

for (const props in obj1) {        
    obj2[props] = obj1[props]
}

obj2.a = "AAAA"

console.log(obj2, obj1);

obj1.c.d = "DDD"

obj2.c.e = "EE";


const obj3 = Object.assign({}, obj1);

obj1.c.d = "Esta es la copia de un obj";

console.log(obj1);
console.log(obj2);
console.log(obj3);

const obj4 = Object.create(obj1)

console.log(obj4);
