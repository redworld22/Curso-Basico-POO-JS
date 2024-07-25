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

/* const private = {
    "_name": name,
    "_courses": courses,
   };
   
   const public = {
    get name(){
        return private["_name"];
    },

    set name(newName){
        if(newName.length != 0){
            private["_name"] = newName;
        } else{
            console.warn("Tu nombre debe tener al menos 1 caracter");
        }
    },

    get courses(){
        return private["_courses"];
    }
   };

   return public;  */
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

    if(isArray(learningPaths)){
        this.learningPaths = []

        for(let learningPathIndex in learningPaths){
            if(learningPaths[learningPathIndex] instanceof LearningPath){
                this.learningPaths.push(learningPaths[learningPathIndex])
            }
        }
    }

/*  const private = {
        "_name": name,
        "_learningPaths": learningPaths
    };

    const public = {
        email,
        age,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },
        approvedCourses,

        get name(){
            return private["_name"];
        },

        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName;
            } else{
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
        },

        get learningPaths(){
            return private["_learningPaths"];
        },

        set learningPaths(newLP){
            if(!newLP.name){
                console.warn("Tu LP no tiene la propiedad name");
                return;
            }

            if(!newLP.courses){
                console.warn("Tu LP no tiene la propiedad courses");
                return;
            }

            if(!isArray(newLP.courses)){
                console.warn("Tu LP no es una lista (de cursos)");
                return;
            }

            private["_learningPaths"].push(newLP);
        }
    }
    
    return public;  */
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
        {
            name: "Escuela Impostora",
            courses: ["Curso para ir al espacio", "Curso para trabajar en Tecnología"]
        }
    ]
}); // {}

const estudianteImpostor = {
    name: "Joe",
    email: 'imperialismototal@stablishment.com'
}

console.log(juan instanceof Student);
console.log(estudianteImpostor instanceof Student);
console.log(juan);