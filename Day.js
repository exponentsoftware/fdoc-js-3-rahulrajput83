/* 1. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable. */

const studentArr = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let name = studentArr[0];
let skills = studentArr[1];
let scores = studentArr[2];
let jsScore = studentArr[2][2];
let reactScore = studentArr[2][3];
console.log(name, skills, scores)
console.log(jsScore, reactScore)

/* Write a function called convertArrayToObject which can convert the array to a structured object. */

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = students => {
    const arr = []
    for(let i = 0; i < students.length; i++) {
        let obj = {
            name: students[i][0],
            skills: students[i][1],
            scores: students[i][2]
        }
        arr.push(obj)
    }
    return arr
}

console.log(convertArrayToObject(students))

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

const newStudent = {...student}

/* Use the student object to solve the following questions:
   a. Find the length of student object keys
   b. Find the length of the student object values
   c. Find the length of skills object keys
   d. check if the student object has graphicDesign property
   e. Iterate the keys of the student object */

console.log(Object.keys(newStudent).length);
console.log(Object.values(newStudent).length);
console.log(Object.keys(newStudent.skills).length);
console.log(newStudent.hasOwnProperty('graphicDesign'))
Object.keys(newStudent).forEach((e) => console.log(e))