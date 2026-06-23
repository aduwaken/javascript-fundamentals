let products = [
    { name: "Laptop", price: 800, inStock: true, category: "Electronics" },
    { name: "Phone Case", price: 15, inStock: true, category: "Accessories" },
    { name: "Headphones", price: 50, inStock: false, category: "Electronics" },
    { name: "Desk Chair", price: 120, inStock: true, category: "Furniture" },
    { name: "Notebook", price: 5, inStock: true, category: "Stationery" },
    { name: "Monitor", price: 300, inStock: false, category: "Electronics" }
];

let available = products.filter(function(product) {
    return product.inStock;
});
console.log("Available products:", available);

let expensiveItems = products.filter(function(prices) {
    return prices.price > 100;
});
console.log("Expensive Items:", expensiveItems);

let productNames = products.map(function(names) {
    return names.name;
});
console.log("Product names:", productNames);

let totalValue = products.reduce(function(total, value) {
    return total + value.price;
},0);
console.log("Total Value:", totalValue);

function applyDiscount(product, percentage) {
    return product.price-(product.price * percentage/100);
}
let discountedProducts = products.map(function(product) {
    return {
        name: product.name,
        price: applyDiscount(product, 10),
        inStock: product.inStock,
        category: product.category,
    }
});
console.log(discountedProducts);

products.forEach(function(product) {
    if (product.category === "Electronics") {
        let stockStatus = product.inStock ? "In stock" : "Out of stock";
        console.log(`${product.name} - $${product.price} - ${stockStatus}`);
    };
});

let mostExpensive = products[0];
products.forEach(function(product) {
    if (product.price > mostExpensive.price) {
        mostExpensive = product;
    }
});
console.log(`Most expensive product: ${mostExpensive.name} - $${mostExpensive.price}`);