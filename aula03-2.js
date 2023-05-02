"use strict" //var ou let.
/* Declarar uma variavel com let só aceita rodar o que estiver dentro do escopo,
let é uma variavel. */
function teste(){

    let nome="nome"
    if (true){
        
        console.log("dentro do if do teste : " + nome) // não da erro

    }
    console.log("dentro de teste : " + nome) // não da erro
}

teste()

console.log("fora de teste : " + nome) // da erro