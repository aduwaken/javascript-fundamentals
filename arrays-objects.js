let user = {
    name: "kennedy",
    skills: ["JavaScript", "Git", "HTML"],
    address: {
        city: "Nairobi",
        country: "Kenya",
    }
};

console.log(user.name);
console.log(user.skills);
console.log(user.skills[0]);
console.log(user.address.city);
console.log(user.address.country);

let users = [
    { name: "Kennedy", age: 25 },
    { name: "Brian", age: 30 },
    { name: "Alice", age: 28 }
];

console.log(users[0].name);
console.log(users[1].age);
console.log(users[2].name);

users.forEach(function(user) {
    console.log(`${user.name} is ${user.age} years old`)
});

