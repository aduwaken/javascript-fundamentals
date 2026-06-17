function greet() {
    console.log("Hello, Welcome to Javascript!");
}

greet();
greet();
greet();

function greetPerson(name) {
console.log(`Hello, ${name}, welcome to Javascript!`)
}

greetPerson("Kennedy");
greetPerson("Brian");
greetPerson("Alice");

function addNumbers (a, b) {
    return a+b;
}

let result = addNumbers(10, 5);
console.log("Sum:", result);
console.log("Sum:", addNumbers(100, 200));

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
    }
    
    console.log("Grade for 95:", getGrade(95));
    console.log("Grade for 82:", getGrade(82));
    console.log("Grade for 60:", getGrade(60));

    function calculateArea(width, height) {
        return width*height;
    }

    let area = calculateArea(10, 5);
    console.log("Area:", area);
    console.log("Area:", calculateArea(200, 100));



 
