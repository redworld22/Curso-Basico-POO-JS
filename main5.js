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

function requiredParam(param){
    throw new Error(param + " es obligatorio");
}

function LearningPath({
    name = requiredParam("name"),
    courses = []
} = {}){

    this.name = name;
    this.courses = courses;

}

function Student({
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}){

    this.name = name;
    this.age = age;
    this.email = email;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook
    }

    const private = {
        "_learningPaths": []
    }

    Object.defineProperty(this, "learningPaths", {
        get(){
            return private["_learningPaths"];
        },
        set(newLp){
            if(newLp instanceof LearningPath){
                private["_learningPaths"].push(newLp)
            } else{
                console.warn("Tu Lp no es una instancia del prototipo LearningPath");
            }
        },
    })

    for(let learningPathIndex in learningPaths){
        this.learningPaths = learningPaths[learningPathIndex];
    }
}

const escuelaWeb = new LearningPath ({
    name: "Escuela de Desarrollo Web",
    courses: ["Curso Definitivo de HTML y CSS", "Curso De CSS Grid Básico", "Curso de Programación Orientada a Objetos (POO)", "Curso de La Terminal y Línea de Comandos"]
})

const escuelaData = new LearningPath ({
    name: "Escuela de Ciencia de Datos e Inteligencia Artificial",
    courses: ["Fundamento de Python", "Curso de Fundamentos de Matemáticas", "Curso de Principios de Visualización de Datos", "Curso de Fundamentos de Base de Datos"]
})

const juan = new Student({
    name: "juanito",
    age: 18,
    email: "juanito@trucupey.com",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
}); // {}

const estudianteImpostor = {
    name: "Joe",
    email: 'imperialismototal@stablishment.com'
}

console.log(juan instanceof Student);
console.log(estudianteImpostor instanceof Student);
console.log(juan);