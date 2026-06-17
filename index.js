function multiplicationTable(number) {
    if (typeof number !== "number") {
        console.log("Please provide a number!");
        return;
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

multiplicationTable(7);
