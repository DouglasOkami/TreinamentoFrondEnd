console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`, `Rio de Janeiro`, `São Paulo`
);

const idade = 18;
const estaAcompanhada = false;
const temPassagem = true;

console.log("Possiveis destinos :");
console.log(listaDeDestinos);

if (idade >= 18 || (estaAcompanhada == true)) {
    console.log("Boa Viagem");
    listaDeDestinos.splice(2, 1);
}
else {
    console.log("Comprador menor de idade não posso vender");
}

console.log("Embarque: \n");
if (idade >= 18 && temPassagem ) {
    console.log("Boa viagem")
}else{
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);

