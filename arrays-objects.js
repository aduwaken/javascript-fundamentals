let students = [
    { name: "Kennedy", score: 85 },
    { name: "Brian", score: 45 },
    { name: "Alice", score: 92 },
    { name: "David", score: 60 },
    { name: "Grace", score: 38 }
];

let passed = students.filter(function(student) {
    return student.score >= 50;
});
console.log("Passed students:", passed);

let studentNames = passed.map(function(pass) {
    return pass.name;
});
console.log("Student Names:", studentNames);

passed.forEach(function(students) {
    console.log(`${students.name} passed with a score of ${students.score}`);
});

function getGrade(score) {
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else {
        return "F";
    }
}
console.log(getGrade(85));
console.log(getGrade(45));
console.log(getGrade(92));
console.log(getGrade(60));
console.log(getGrade(38));

students.forEach(function(grade) {
    console.log(grade.name,":", "Grade", getGrade(grade.score));
});
