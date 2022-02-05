let minhasCartas=[];
let cartasEmJogo = ['devNinja','devNinja','devNinja','devNinja','devNinja','devNinja','devNinja',];

/*Escolher o numero de cartas do jogo*/
function iniciarJogo(){
    let numeroCartas = parseInt(prompt("Escolhar e digite um número par de cartas entre 4 e 14"));

    while((numeroCartas % 2 !== 0) || (numeroCartas < 4) || (numeroCartas > 14)){
        numeroCartas = parseInt(prompt("Escolha um número par de cartas entre 4 e 14."));
    }
    for(i=0; (i<numeroCartas/2); i++) {

        minhasCartas.push(cartasEmJogo[i]);
        minhasCartas += minhasCartas.push(cartasEmJogo[i])
    }
}
iniciarJogo(); 