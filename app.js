let listaDeNumerosSorteados = [];
let limiteMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function TextoNaTela() {
exibirTextoNaTela('h1','Game NumberSecret');
exibirTextoNaTela('p','Escolha um número de 1 a 10!');
}

TextoNaTela();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativas = tentativas > 1 ?' tentativas' : 'tentativa';
        let tentativasTexto = `Você acertou em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', tentativasTexto);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteMaximo + 1);
   let tamanhoLista = listaDeNumerosSorteados.length;
   if (tamanhoLista == limiteMaximo) {
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
   }

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
    
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    TextoNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}