const red = {
    name: 'Red',
    age: 41,
    cursosAprobados: ['Curso Definitivo de HTML y CSS', 'Curso Práctico de HTML y CSS'],

    aprobarCursos(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
};

red.cursosAprobados.push('Curso Básico de JavaScript');


function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    // this.aprobarCurso = function(nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito)
}

const robin = new Student('Robin Robles', 40, ['Derecho Civil I']);

robin.aprobarCurso('Derecho Penal I')

robin.aprobarCurso('Derecho Romano')

const ariel = new Student('Ariel Robles', 44, ['Mercadeo I'])

ariel.aprobarCurso('Sociología')

ariel.puesto = 'Gerente General';

delete ariel.puesto


// Prototipos con la sintaxis de Clases

class Student2 {
    constructor({name, age, cursosAprobados = []}){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso = function(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
}

const allen = new Student2({
    name: 'Allen Robles',
    age: 14,
    cursosAprobados: ['Matemáticas', 'Lengua Española', 'Ciencias Sociales']
})

allen.aprobarCurso('Naturales')

allen.aprobarCurso('Formación Humana')

console.log(allen);