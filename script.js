let minhasCartas=[];
let cartasEmJogo = ['carta1','carta2','carta3','carta4','carta5','carta6','carta7',];


// Layout da página: Desktop e Mobile Ok
// Prompt: Quantas cartas terá o jogo? Ok

// Armazenar quantidade de cartas escolhida
// Adicionar quantidade de cartas na mesa
// Adicionar cartas em pares 
// Rotacionar cartas e aparecer imagem (onclick)
// Cartas iguais permanecem viradas e diferentes desviram
// Identificação de cartas iguais
// Armazenar cartas igual e subtrai-las do jogo
// Todas as cartas deram match = fim de jogo


/*window.onload evita que as funções iniciem antes da página carregar*/

window.onload = () => {

    let minhasCartas = [];
    let condicaoCartas = false;

    function escolherNumeroCartas(){
        let numeroCartas = parseInt(prompt("Escolhar e digite um número par de cartas entre 4 e 14"));
    //Condições para o número de cartas
        while((numeroCartas % 2 !== 0) || (numeroCartas < 4) || (numeroCartas > 14)){
            numeroCartas = parseInt(prompt("Escolha um número par de cartas entre 4 e 14."));
        }
    }
    let cartasFinal;

    function iniciarJogo(numeroEscolhido) {

        let par = numeroEscolhido / 2;
        // 
        let identificaCartas = ["carta1", "carta2", "carta3", "carta4", "carta5", "carta6", "carta7"];
        
        for (let index = 0; index < parseFloat; index++) {
            
            // Como temos 7 tipos de cartas diferentes, temos que dar push em 2 cartas de cada
            minhasCartas.push(`
            <div class="dadosCarta" data-carta="${identificador[i]}">
            <img class="front-face" src="img/${identificador[i]}.png"/>
            <img class="back-face" src="img/frente.png"/> 
            </div>  `)
            
            minhasCartas.push(`
            <div class="dadosCarta" data-carta="${identificador[i]}">
            <img class="front-face" src="img/${identificador[i]}.png"/>
            <img class="back-face" src="img/frente.png"/> 
            </div>  `)
            
            console.log("Entrou cartas")
        }
        // Dar as cartas
        let mesa = document.querySelector("section")

        for (let index=0; index < numeroEscolhido; index++) {
            mesa.innerHTML += minhasCartas[i];
        }

        // Chamar a função para ativar as cartas
        ativarCartas();

    }

    // Deixar as cartas viradas até que sejam chamadas
    let cartaVirada = false;
    let naoVirar = false;
    let primeiraCarta, segundaCarta;

    function ativarCartas() {
        console.log("HABILITAR CARTAS CHAMADO")
        const cartas = document.querySelectorAll('.dadosCarta');
        cartas.forEach(card => card.addEventListener('click', virarCarta));

        // Embaralhar cartas 
        cartas.forEach( cartas => {
            cartas.getElementsByClassName.order = Math.floor(Math.random());
        })

        if(naoVirar===true) return;
        if(this === primeiraCarta) return;
        
        this.classList.add('virar');
        if (cartaVirada === false) {
            cartaVirada === true;
            primeiraCarta = this;
            return;
        }
    }

    // Revisar aula de função como parêmetro

}

