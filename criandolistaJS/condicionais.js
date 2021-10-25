console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`, `Rio de Janeiro` ,`São Paulo`
);

const idade = 15;
console.log("Possiveis destinos :");
console.log(listaDeDestinos);

if(idade >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
}else{
    console.log("Comprador menor de idade não posso vender");
}

console.log(listaDeDestinos);

