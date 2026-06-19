let prices = [100, 250, 75, 500, 30, 800];

let affordable = prices.filter(function(price) {
    return price < 200;
});
console.log("Affordable:", affordable);

let withTax =prices.map(function(price) {
    return (price * 1.16).toFixed(2);
});
console.log("Withtax:", withTax);
