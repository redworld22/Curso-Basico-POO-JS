function requiredParam(param){
    throw new Error(param + " es obligatorio");
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
        "_name": name
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
        learningPaths,
        readName(){
            return private["_name"];
        },
        changeName(newName){
            private["_name"] = newName;
        }
    }

    Object.defineProperty(public, "readName", {
        writable: false,
        configurable: false
    })

    Object.defineProperty(public, "changeName", {
        writable: false,
        configurable: false
    })
    
    return public;
}

const juan = createStudent({
    name: "juanito",
    age: 18,
    email: "juanito@trucupey.com"
}); // {}