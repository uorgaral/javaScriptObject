const pessoa = {
  nome: "Lara",
  idade: 16,
  profissao: "integrante do caps",
  pais: "Brasil",
};

console.log(pessoa.nome, pessoa.idade);

pessoa.profissao = "vendedor da shopee";
//console.log(pessoa.profissão);

pessoa.email = "uorgaral@gmail.com";
delete pessoa.pais;

console.log(pessoa);
