const dados = [
  {
    id: 1,
    nome: "Carlão Pedregulho",
  },
  {
    id: 2,
    nome: "Zezin Pão de forma",
  },
  {
    id: 3,
    nome: "Taccafaka Nopesh",
  },
];

for (let i = 0; i < dados; i++) {
  if (dados.id == 1) {
    console.log("minerador");
  } else if (dados.id == 2) {
    console.log("padeiro");
  } else if (dados.id == 3) {
    console.log("peixeiro");
  }
}
