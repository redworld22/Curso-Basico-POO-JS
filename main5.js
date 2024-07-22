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

function createLearningPath({
    name = requiredParam("name"),
    courses = []
} = {}){
   const private = {
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

   return public;
}

function createStudent({
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}){

    const private = {
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
    
    return public;
}

const juan = createStudent({
    name: "juanito",
    age: 18,
    email: "juanito@trucupey.com"
}); // {}

juan.learningPaths = { 
    name: "Escuela de Desarrollo Web",
    courses: ["Curso Básico de POO"]
}

console.log(juan.learningPaths);