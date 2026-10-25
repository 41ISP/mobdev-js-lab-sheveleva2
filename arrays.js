const grades = [4, 5, 3, 5, 2, 4, 5, 3];
console.log((grades.reduce((a,b)=>a+b)/grades.length).toFixed(2));

const above3 = grades.filter(g => g > 3);
console.log(above3);
const label = above3.map(g => `Оценка: ${g}`);
console.log(label);

const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"];
const sort = fruits.sort().join(", ");
console.log(sort);

const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
];

const cheap = products.filter(p => p.price < 10000);
console.log(cheap);

const names = products.map(p => p.name);
console.log(names);

const total = products.reduce((acc, p) => acc + p.price, 0);
console.log(total);

const numbers = [12, 45, 7, 33, 18];
console.log(numbers.some(n => n > 40));
console.log(numbers.every(n => n > 5));