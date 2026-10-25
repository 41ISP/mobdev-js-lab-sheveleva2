const sentence = "  javascript — это просто!  ";
const trimmed = sentence.trim();
const cap = trimmed[0].toUpperCase() + trimmed.slice(1);
console.log(cap);

const lastName = "Иванов";
const firstName = "Иван";
const group = "ИСР-21";
const avgScore = 4.75;
console.log(`Студент ${lastName} ${firstName}, группа ${group}, средний балл ${avgScore}`);

const date = "2025-03-15";
const [year, month, day] = date.split("-");
console.log(`${day}.${month}.${year}`);

const role = "Node.js разработчик";
console.log(role.startsWith("Node"));
console.log(role.endsWith("разработчик"));

const account = 42;
console.log(String(account).padStart(8, "0"));