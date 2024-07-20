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
    return {
        name,
        email,
        age,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },
        approvedCourses,
        learningPaths
    }
}

const juan = createStudent({
    name: "juanito",
    age: 18,
    email: "juanito@trucupey.com"
}); // {}