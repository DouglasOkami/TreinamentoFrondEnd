console.log("Trabalhando com listas");
//const salvador = `salvador`;
//const rioDeJaneiro = `Rio de Janeiro`;
//const saoPaulo = `São Paulo`;

const listaDeDestinos = new Array(
    `Salvador`, `Rio de Janeiro` ,`São Paulo`
);

listaDeDestinos.push(`Curitiba`);
console.log("Possiveis destinos :");
//console.log(salvador, rioDeJaneiro , saoPaulo);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);