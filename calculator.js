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
        console.log(`${a} + ${b} = ${a+b}`);
    }
    else if (operation === "-") {
        console.log(`${a} - ${b} = ${a-b}`);
    }
    else if (operation === "*") {
        console.log(`${a} * ${b} = ${a*b}`);
    }
    else if(operation === "/") {
        if (b === 0) {
            console.log("Cannot divide by zero");
            return;
        }
        console.log(`${a} / ${b} = ${a/b}`);
    }
    else if(operation === "power") {
        console.log(`${a} ** ${b} = ${a**b}`);
    }
    else {
        console.log("Invalid operation");
    }
}

calculate(10, "+", 5);
calculate(20, "-", 8);
calculate(6, "*", 7);
calculate(15, "/", 3);
calculate(10, "/", 0);
calculate("Kennedy", "+", 5);
calculate(9, "power", 7);