console.log("Hello World")
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
 console.log(fruit);
}


const person = { name: "Alice", age: 25 };

for (const key in person) {
  console.log(key, person[key]);
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

const names = users.map(user => user.name);
console.log(names); 


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 


