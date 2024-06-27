const prompt = require("prompt-sync")();
const arr = [];

for (let i = 0; i < 5; i++) {
  const nome = prompt("Digite seu nome: ");
  const obj = {
    id: 1 + i,
    nome: nome,
  };
  arr.push(obj);
}

console.log(arr);
