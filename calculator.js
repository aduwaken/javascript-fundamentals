function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please provide numbers only");
        return;
    }
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please provide numbers only");
        return;
    }
    return a - b;
}
function multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please provide numbers only");
        return;
    }
    return a * b;
}
function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please provide numbers only");
        return;
    }
    if (b === 0) {
        console.log("Cannot divide by zero");
        return;
    }
    return a / b;
}
function power(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please provide numbers only");
        return;
    }
    return a ** b;
}
function calculate(a, operation, b) {
if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please provide numbers only");
        return;
    }

    if (operation === "+") {
        return(`${a} + ${b} = ${a+b}`);
    }
    else if (operation === "-") {
        return(`${a} - ${b} = ${a-b}`);
    }
    else if (operation === "*") {
        return(`${a} * ${b} = ${a*b}`);
    }
    else if(operation === "/") {
        if (b === 0) return("Cannot divide by zero");
        return(`${a} / ${b} = ${a/b}`);
    }
    else if(operation === "power") {
        return(`${a} ** ${b} = ${a**b}`);
    }
    else {
        console.log("Invalid operation");
    }
}

console.log(calculate(10, "+", 5));
console.log(calculate(20, "-", 8));
console.log(calculate(6, "*", 7));
console.log(calculate(15, "/", 3));
console.log(calculate(10, "/", 0));
console.log(calculate("Kennedy", "+", 5));
console.log(calculate(9, "power", 7));