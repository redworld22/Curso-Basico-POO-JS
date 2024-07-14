class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ") ");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

function videoPlay(id){
    const urlSecreta = "https://platziclasssecreta.com" + id;
    console.log("Se está reproduciendo la url " + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://platziclasssecreta.com" + id;
    console.log("Se pausó la url " + urlSecreta);
}

class PlatziClass{
    constructor({
        name,
        videoID, 
        comment,
        resource
    }){
        this.name = name;
        this.videoID = videoID;
        this.comment = comment;
        this.resource = resource;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
}



class Student {
    constructor({
        name, age, email, username, twitter = undefined, instagram = undefined, facebook = undefined, courses, comments, approvedCourses = [], learningPaths = []
    }){
        this._name = name;
        this._age = age;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.courses = courses;
        this.comments = comments;
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    get name(){
        return this._name;
    }
    
    set name(nuevoNombre){
        this._name = nuevoNombre;
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar()
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");;
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");;
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        });
        comment.publicar()
    }
}

class Teacher {
    constructor({
        name, courses = [], comments, twitter = undefined, instagram = undefined, facebook = undefined
    }){
        this._name = name;
        this.courses = courses;
        this.comments = comments;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        this._name = nuevoNombre;
    }
}

class LearningPath{
    constructor({
        name, 
        courses = []
    }){
        this._name = name;
        this.courses = courses;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        this._name = nuevoNombre;
    }
}

class Course{
    constructor({
        name, 
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        if(nuevoNombre === 'Basura de Curso de Programación Básica'){
            console.error('Weyyyy.....No te pases!');
        } else {
            this._name = nuevoNombre;
        }
    }
}

// ***Instancias de la clase Course***

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programación Básica',
    isFree: true
})

const cursoHTMLyCSS = new Course({
    name: 'Curso Definitivo de HTML y CSS',
})

const cursoBasicoJS = new Course({
    name: 'Curso Básico de JavaScript',
})

const cursoCssGrid = new Course({
    name: 'Curso de CSS Grid Básico',
})

const cursoPracticoHTMLyCSS = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english"
})

// ***Instancias de la clase LearninPath***

const escuelaWeb = new LearningPath({
    name: 'Escuela de Desarrollo Web',
    courses: [cursoProgBasica, cursoBasicoJS, cursoHTMLyCSS, cursoCssGrid]
})

const escuelaData = new LearningPath({
    name: 'Escuela de Data Science',
    courses: ['Curso DataBusiness', 'Curso Dataviz', 'Curso de Estadísticas']
})

const escuelaVgs = new LearningPath({
    name: 'Escuela de Videojuegos',
    courses: ['Curso de Unity', 'Curso de Unreal', 'Curso de Canvas3d']
})

// ***Instancias de la clase Student***

const juan = new FreeStudent({
    name: 'JuanDC',
    age: 29,
    username: 'juandc',
    email: 'juanito88@platzi.com',
    twitter: 'fjuandc',
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ]
})

const miguelito = new BasicStudent({
    name: 'Miguelito',
    age: 36,
    username: 'miguelitofeliz',
    email: 'miguel16@platzi.com',
    instagram: 'miguelito_feliz',
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
})

const freddy = new TeacherStudent({
    name: 'Freddy Vega',
    age: 38,
    username: 'fredieer',
    email: 'f@gep.com',
    instagram: 'freddiervega',
})
