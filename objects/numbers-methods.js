let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min


// Challenge area
// 1 - 5 - true if correct - false if not correct

let makeGuess = function (num){

    min = 1;
    max = 5;
    let randNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randNumber === num

}

console.log(makeGuess(1))
console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(4))
console.log(makeGuess(5))