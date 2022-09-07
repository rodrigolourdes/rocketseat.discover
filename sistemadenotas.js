/* 
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C
* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   E
*/



function getScore(score) {
    let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreE = score < 59 && score >= 0

let scoreFinal;


if (scoreA) {
    scoreFinal = 'A'
} else if (scoreB) {
    scoreFinal= 'B'
} else if (scoreC) {
    scoreFinal= 'C'
} else if (scoreD) {
    scoreFinal= 'D'
} else if (scoreE) {
    scoreFinal= 'E'
} 

console.log (scoreFinal)

return scoreFinal

}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(61))
console.log(getScore(71))
console.log(getScore(85))
console.log(getScore(95))
console.log(getScore(45))