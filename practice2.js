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

function isObject(subject){
    return typeof subject == "object"
}

function isArray(subject){
    return Array.isArray(subject)
}

function deepCopy(subject){
    let copySubject;

    const copySubjectObject = isObject(subject);
    const copySubjectArray = isArray(subject)

    if(copySubjectObject){
        copySubject = {};
    } else if (copySubjectArray){
        copySubject = [];
    } else{
        copySubject = subject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key])
        } else{
            if(copySubjectArray){
                copySubject.push(subject[key])
            } else{
                copySubject[key] = subject[key]
            }
        }
    }
    return copySubject;
}