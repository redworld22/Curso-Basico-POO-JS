const numeritos = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,655,688,14,57,15,18]

/* let numero = 0

for (let index = 0; index < numeritos.length; index++) {
    const numero = numeritos[index];
    console.log({index, numero});
}  */

function recursiva (arrayNumbers){
    if(arrayNumbers.length !== 0){
        let firstNumber = arrayNumbers[0];
        console.log(firstNumber);
        arrayNumbers.shift();
        console.log(arrayNumbers);
        recursiva(arrayNumbers);
    }
}