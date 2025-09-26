const listaChutes = [];

const dif1 = document.getElementById("btn1a10");
const dif2 = document.getElementById("btn1a100");
const dif3 = document.getElementById("btn1a1000");
const placarTentativasPlayer1 = document.getElementById("tentativasPlayer1");
const placarTentativasPlayer2 = document.getElementById("tentativasPlayer2");
const placarAcertosPlayer1 = document.getElementById("acertosPlayer1");
const placarAcertosPlayer2 = document.getElementById("acertosPlayer2");
const chutePlayer1 = document.getElementById("inputPlayer1");
const chutePlayer2 = document.getElementById("inputPlayer2");
const btnChutePlayer1 = document.getElementById("btnChutePlayer1");
const btnChutePlayer2 = document.getElementById("btnChutePlayer2");
const txtResultado = document.getElementById("txtResultado");
let tentativasPlayer1 = 0;
let tentativasPlayer2 = 0;
let acertosPlayer1 = 0;
let acertosPlayer2 = 0;

const listaChutesHtml = document.querySelector('.div-chutes');

btnChutePlayer1.addEventListener("click", function () {
    validarChuteP1();
});
btnChutePlayer2.addEventListener("click", function () {
    validarChuteP2();
});

let numeroSecreto;
console.log('NUMERO SECRETO: ' +numeroSecreto)
let nivelAtual = null;
dif1.addEventListener("click", function () {
    nivelAtual = 1;
    dif1.style.background = 'linear-gradient(135deg, #200f81ff, #ff6600)';
    dif2.style.background = '';
    dif3.style.background = '';
    numeroSecreto = Math.floor(Math.random() * 10) + 1
    console.log("Novo número (1-10):", numeroSecreto);
});
dif2.addEventListener("click", function () {
    nivelAtual = 2;
    dif1.style.background = '';
    dif2.style.background = 'linear-gradient(135deg, #200f81ff, #ff6600)';
    dif3.style.background = '';
    numeroSecreto = Math.floor(Math.random() * 100) + 1
    console.log("Novo número (1-100):", numeroSecreto);
});
dif3.addEventListener("click", function () {
    nivelAtual = 3;
    dif1.style.background = '';
    dif2.style.background = ''
    dif3.style.background = 'linear-gradient(135deg, #200f81ff, #ff6600)';
    numeroSecreto = Math.floor(Math.random() * 1000) + 1
    console.log("Novo número (1-1000):", numeroSecreto);
});

let chutesTentativa;

function validarChuteP1(){
    const valorChuteP1 = parseInt(chutePlayer1.value);
    if (isNaN(valorChuteP1) || valorChuteP1<1) {
        txtResultado.classList.add('resultadoErrado');
        txtResultado.textContent = 'DIGITE UM NÚMERO VÁLIDO'
        return
    }
    if (!nivelAtual || !numeroSecreto){
        txtResultado.classList.add('resultadoErrado');
        txtResultado.textContent = 'ESCOLHA AO MENOS UMA DIFICULDADE'
        return
    }

    if (valorChuteP1 === numeroSecreto) {
        acertosPlayer1++;
        tentativasPlayer1++;
        listaChutes.splice(0, listaChutes.length)
        chutesTentativa = null;
        txtResultado.classList.add('resultadoCorreto');
        placarAcertosPlayer1.textContent = acertosPlayer1;
        placarTentativasPlayer1.textContent = tentativasPlayer1;
        txtResultado.textContent = 'PLAYER 1 ACERTOU O NUMERO SECRETO: '+numeroSecreto+' | NOVO NÚMERO GERADO!';
        if (nivelAtual === 1) numeroSecreto = Math.floor(Math.random() * 10) + 1;
        if (nivelAtual === 2) numeroSecreto = Math.floor(Math.random() * 100) + 1;
        if (nivelAtual === 3) numeroSecreto = Math.floor(Math.random() * 1000) + 1;
        console.log('NUMERO NOVO: ' +numeroSecreto)
        txtResultado.classList.remove('resultadoErrado')
    } else {
        tentativasPlayer1++;
        placarTentativasPlayer1.textContent = tentativasPlayer1;
        txtResultado.classList.add('resultadoErrado');
            if(valorChuteP1<numeroSecreto){
                txtResultado.textContent = 'O número secreto é maior';
                txtResultado.classList.remove('resultadoCorreto')
            }else{ 
                txtResultado.textContent = 'O número secreto é menor';
                txtResultado.classList.remove('resultadoCorreto')
            }
        listaChutes.push('    '+valorChuteP1)
        chutesTentativa = listaChutes
        listaChutesHtml.textContent = chutesTentativa
    }
    chutePlayer1.value = "";
    chutePlayer2.focus();
}

function validarChuteP2(){
    const valorChuteP2 = parseInt(chutePlayer2.value);
    if (isNaN(valorChuteP2) || valorChuteP2<1) {
        txtResultado.classList.add('resultadoErrado');
        txtResultado.textContent = 'DIGITE UM NÚMERO VÁLIDO'
        return
    }
    if (!nivelAtual || !numeroSecreto){
        txtResultado.classList.add('resultadoErrado');
        txtResultado.textContent = 'ESCOLHA AO MENOS UMA DIFICULDADE'
        return
    }

    if (valorChuteP2 === numeroSecreto) {
        acertosPlayer2++;
        tentativasPlayer2++;
        listaChutes.splice(0, listaChutes.length)
        chutesTentativa = null;
        txtResultado.classList.add('resultadoCorreto');
        placarAcertosPlayer2.textContent = acertosPlayer2;
        placarTentativasPlayer2.textContent = tentativasPlayer2;
        txtResultado.textContent = 'PLAYER 2 ACERTOU O NUMERO SECRETO: '+numeroSecreto+' | NOVO NÚMERO GERADO!';
        if (nivelAtual === 1) numeroSecreto = Math.floor(Math.random() * 10) + 1;
        if (nivelAtual === 2) numeroSecreto = Math.floor(Math.random() * 100) + 1;
        if (nivelAtual === 3) numeroSecreto = Math.floor(Math.random() * 1000) + 1;
        console.log('NUMERO NOVO: ' +numeroSecreto)
        txtResultado.classList.remove('resultadoErrado')
    } else {
        tentativasPlayer2++;
        placarTentativasPlayer2.textContent = tentativasPlayer1;
        txtResultado.classList.add('resultadoErrado');
            if(valorChuteP2<numeroSecreto){
                txtResultado.textContent = 'O número secreto é maior';
                txtResultado.classList.remove('resultadoCorreto')
            }else{ 
                txtResultado.textContent = 'O número secreto é menor';
                txtResultado.classList.remove('resultadoCorreto')
            }
        listaChutes.push('    '+valorChuteP2)
        chutesTentativa = listaChutes
        listaChutesHtml.textContent = chutesTentativa
    }
    chutePlayer2.value = "";
    chutePlayer1.focus();
}

