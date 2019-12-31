// Function to Calaculate Students Grades

// Method 1
// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (studentScore, totalScore) {

    let scoreOutOf_100 = (studentScore/ totalScore) * 100

    if (scoreOutOf_100 >= 0 && scoreOutOf_100 <= 59) {
        return `${studentScore}/${totalScore} -> You got an F ${scoreOutOf_100}%`
    }
    else if (scoreOutOf_100 >= 60 && scoreOutOf_100 <= 69 ){
        return `${studentScore}/${totalScore} -> You got a D ${scoreOutOf_100}%`
    }
    else if (scoreOutOf_100 >= 70 && scoreOutOf_100 <= 79) {
        return `${studentScore}/${totalScore} -> You got a C ${scoreOutOf_100}%`
    }
    else if (scoreOutOf_100 >= 80 && scoreOutOf_100 <= 89) {
        return `${studentScore}/${totalScore} -> You got a B ${scoreOutOf_100}%`
    }
    else {
        return `${studentScore}/${totalScore} -> You got an A ${scoreOutOf_100}%`
    }
    
}

let Student1 = gradeCalc(3, 20)
console.log(Student1)

let Student2 = gradeCalc(13, 20)
console.log(Student2)

let Student3 = gradeCalc(15, 20)
console.log(Student3)

let Student4 = gradeCalc(17, 20)
console.log(Student4)

let Student5 = gradeCalc(19, 20)
console.log(Student5)

// Method 2

let gradeCalc2 = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

let result = gradeCalc2(9, 20)
console.log(result)





