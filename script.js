window.onload = () => {

    let condicaoCartas = false;
    let minhasCartas = []

    function numeroCartas() {

        while (condicaoCartas == false) {

            let numeroCartas = prompt("Insira um número par de cartas entre 4 e 14: ")

            if (numeroCartas >= 4 && numeroCartas <= 14 && numeroCartas % 2 === 0) {
                iniciarJogo(numeroCartas)
                condicaoCartas = true;
            }
        }
    }

    let contaCartas;


    function iniciarJogo(numeroCartas) {

        let parCartas = numeroCartas / 2
        
        let identificador = ['carta1', 'carta2', 'carta3', 'carta4', 'carta5', 'carta6', 'carta7']


        contaCartas = numeroCartas


        for (let index = 0; index < parCartas; index++) {


            minhasCartas.push(`
            <div class="cartasModelo" data-carta="${identificador[index]}">
              <img class="front-face" src="images/${identificador[index]}.png"/>
              <img class="back-face" src="images/front.png"/> 
            </div>  `)

            minhasCartas.push(`
            <div class="cartasModelo" data-carta="${identificador[index]}">
              <img class="front-face" src="images/${identificador[index]}.png"/>
              <img class="back-face" src="images/front.png"/>
            </div>  `)
        }

        let partida = document.querySelector('section')

        for (let index = 0; index < numeroCartas; index++) {


            partida.innerHTML += minhasCartas[index]
        }


        ativarCartas();
    }

    let naoVirar = false;
    let cartaVirada = false;
    let primeiraCarta, segundaCarta;

    let intervalo = null;

    function ativarCartas() {

        const cartas = document.querySelectorAll('.cartasModelo');
        cartas.forEach(card => card.addEventListener('click', virarCarta));

        intervalo = setInterval(AtualizarCronometro, 1000)

        cartas.forEach(cartas => {
            cartas.style.order = Math.floor(Math.random() * 12);
        })
    }

 
    function virarCarta() {


        if (naoVirar) return;

        if (this === primeiraCarta) return;

        this.classList.add('virar');

        if (!cartaVirada) {

            cartaVirada = true;

            primeiraCarta = this;
            return;
        }

        segundaCarta = this;
        VerificarCartasIguais();
    }

    let totalJogadas = 0;

    function VerificarCartasIguais() {

        let igual = primeiraCarta.dataset.carta === segundaCarta.dataset.carta;

        if (igual) {
            contaCartas -= 2;
            DesabilitarCartas();

            setTimeout(() => {
                VerificarFimDoJogo();
            }, 1000);
        }
        else {
            desvirarCarta();
        }
        totalJogadas++
    }

    function DesabilitarCartas() {

        primeiraCarta.removeEventListener('click', virarCarta);
        segundaCarta.removeEventListener('click', virarCarta);
        ResetarCartas();
    }

    function ResetarCartas() {

        [cartaVirada, naoVirar] = [false, false];
        [primeiraCarta, segundaCarta] = [null, null];
    }

    function desvirarCarta() {

        naoVirar = true;

        setTimeout(() => {
            primeiraCarta.classList.remove('virar');
            segundaCarta.classList.remove('virar');
            ResetarCartas();
        }, 1000);

    }

    let tempoTotal = 0;

    function VerificarFimDoJogo() {

        if (contaCartas === 0) {

            clearInterval(intervalo)

            alert(`Você ganhou em ${totalJogadas} jogadas!`)
            let resposta = prompt(`Fim do jogo ! Você terminou em ${tempoTotal} segundos ! Deseja jogar novamente ? digite [sim ou nao]`).toUpperCase();
            let respondeu = false;

            while (respondeu == false) {
                if (resposta == 'SIM') {
                    respondeu = true;
                    return document.location.reload(true);
                } else if (resposta == 'NAO') {
                    return undefined
                }
                resposta = prompt(`Deseja jogar novamente ? responda [sim ou nao]`).toUpperCase();
            }
        }
    }

    function AtualizarCronometro() {
        let cronometro = document.querySelector('.cronometro')
        cronometro.innerHTML = parseInt(cronometro.innerHTML) + 1
        tempoTotal++;
    }




    numeroCartas();

}