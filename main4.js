// const numeritos = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,655,688,14,57,15,18]

/* let numero = 0

for (let index = 0; index < numeritos.length; index++) {
    const numero = numeritos[index];
    console.log({index, numero});
}  */

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
        },
    editA(){
        this.a = "AAA"
    }
} 

/* function recursiva (numbersArray){
    if(numbersArray.length !== 0){
        let firstNumber = numbersArray[0];
        console.log(firstNumber);
        numbersArray.shift();
        console.log(numbersArray);
        recursiva(numbersArray);
    }
}  */
function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject)
}

function deepCopy(subject){
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
    
    if(subjectIsArray){
        copySubject = [];
    } else if (subjectIsObject){
        copySubject = {};
    } else{
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key])

        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
        } else{
            if(subjectIsArray){
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

// 1. Vamos a crear una función recursiva (la cual llamamos deepCopy en este caso)para copiar una variable.
// 2. Al final vamos a tener que devolver una copia de la variable, que muy probablemente será un objeto.
// 3. Creamos esa variable sin aún asignarle un valor(let copySubject), y también será esta variable la que retornaremos al final.
// 4. Recibimos como parámetro (subject) la variable original a la cual le vamos a generar una copia.
// 5. Lo primero que debemos hacer es validar si esta variable recibida es un objeto, array o es de tipo primitiva.
// 6. Para validar si es un objeto o array , creamos dos funciones externas (isObject e isArray).
// 7. Luego creamos dos constantes (variableisObject y variableIsArray) dentro de nuestra función principal (deepCopy) para recibir los resultados de las funciones externas (por tanto, lo que hacen es llamar a dichas funciones).
// 8. Luego hacemos una validación a través de un if...else usando el resultado de las constantes, para de acuerdo a cual tipo de variable es nuestra variable pasada por parámetro, para asignarle ese mismo tipo de variable a nuestra variable creada dentro de la función para ahí guardar la copia que terminaremos realizando, de ambas constantes ser falsas, devolveremos la variable pasada por parámetro al cual.
// 9. Ahora toca iterar dentro de las llaves (keys) de la variable subject pasada por parámetro, para eso usamos un for... in.
// 10. Creamos otra nueva constante dentro del ciclo for ...in para de esta llamar a la función isObject para preguntarle si la llave(key) que estamos iterando en ese preciso momento es un objeto o no.
// 11. Entonces hacemos una nueva validación con un if... else para de acuerdo al resultado guardado en nuestra nueva constante, preguntando esta vez si la llaves(keys) dentro de la variable pasada por parámetros es tipo objeto, array o una variable primitiva.
// 12. Si no es de tipo objeto, pues debemos entrar en una validación if... else, preguntando en esta nueva validación si la variable pasada por parámetro es de tipo array.
// 13. De ser True, se le deben empujar los elementos (keys)dentro del array usando el método .push(subject[key]).
// 14. Pero si no era un array tampoco, entonces era un elemento de tipo primitivo.
// 15. Entonces debemos de decir que ;a propiedad o llave de nuestra variable copia (copySubject[key]) es igual a la propiedad o llave de la variable que se recibió por parámetro (subject[key]).
// 16. Al final de todo esto hacemos un return de nuestra copia.