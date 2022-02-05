let minhasCartas=[];
let cartasEmJogo = ['carta1','carta2','carta3','carta4','carta5','carta6','carta7',];


// Layout da página: Desktop e Mobile Ok
// Prompt: Quantas cartas terá o jogo? Ok

// Armazenar quantidade de cartas escolhida
// Adicionar quantidade de cartas na mesa
// Rotacionar cartas e aparecer imagem
// Cartas iguais permanecem viradas e diferentes desviram
// Armazenar cartas igual e subtrai-las do jogo
// Todas as cartas deram match = fim de jogo 


function iniciarJogo(){
    let numeroCartas = parseInt(prompt("Escolhar e digite um número par de cartas entre 4 e 14"));

    while((numeroCartas % 2 !== 0) || (numeroCartas < 4) || (numeroCartas > 14)){
        numeroCartas = parseInt(prompt("Escolha um número par de cartas entre 4 e 14."));
    }
}
iniciarJogo(); 