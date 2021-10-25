console.log("Trabalhando com while");

const listaDeDestinos = new Array(
    `Salvador`, `Rio de Janeiro`, `São Paulo`
);

const idade = 18;
const estaAcompanhada = false;
let temPassagem = false;
const destino = "São Paulo";

console.log("\n Possiveis destinos :");
console.log(listaDeDestinos);

const podeComprar = idade >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("Destino existe:", destinoExiste);
