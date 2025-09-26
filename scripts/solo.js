const listaChutes = [];

const dif1 = document.getElementById("btn1a10");
const dif2 = document.getElementById("btn1a100");
const dif3 = document.getElementById("btn1a1000");
const placarTentativas = document.getElementById("tentativas");
const placarAcertos = document.getElementById("acertos");
const chute = document.getElementById("inputSolo");
const btnChute = document.getElementById("btnChuteSolo");
const txtResultado = document.getElementById("txtResultado");
let tentativas = 0;
let acertos = 0;

const listaChutesHtml = document.querySelector('.div-chutes');

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  validarChute();
});
btnChute.addEventListener("click", function () {
    validarChute();
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

function validarChute(){
    const valorChute = parseInt(chute.value);
    if (isNaN(valorChute) || valorChute<1) {
        txtResultado.classList.add('resultadoErrado');
        txtResultado.textContent = 'DIGITE UM NÚMERO VÁLIDO'
        return
    }
    if (!nivelAtual || !numeroSecreto){
        txtResultado.classList.add('resultadoErrado');
        txtResultado.textContent = 'ESCOLHA AO MENOS UMA DIFICULDADE'
        return
    }

    if (valorChute === numeroSecreto) {
        acertos++;
        tentativas++;
        listaChutes.splice(0, listaChutes.length)
        chutesTentativa = null;
        txtResultado.classList.add('resultadoCorreto');
        placarAcertos.textContent = acertos;
        placarTentativas.textContent = tentativas;
        txtResultado.textContent = 'ACERTOU O NUMERO SECRETO: '+numeroSecreto+' | NOVO NÚMERO GERADO!';
        if (nivelAtual === 1) numeroSecreto = Math.floor(Math.random() * 10) + 1;
        if (nivelAtual === 2) numeroSecreto = Math.floor(Math.random() * 100) + 1;
        if (nivelAtual === 3) numeroSecreto = Math.floor(Math.random() * 1000) + 1;
        console.log('NUMERO NOVO: ' +numeroSecreto)
        txtResultado.classList.remove('resultadoErrado')
    } else {
        tentativas++;
        placarTentativas.textContent = tentativas;
        txtResultado.classList.add('resultadoErrado');
            if(valorChute<numeroSecreto){
                txtResultado.textContent = 'O número secreto é maior';
                txtResultado.classList.remove('resultadoCorreto')
            }else{ 
                txtResultado.textContent = 'O número secreto é menor';
                txtResultado.classList.remove('resultadoCorreto')
            }
        listaChutes.push('    '+valorChute)
        chutesTentativa = listaChutes
        listaChutesHtml.textContent = chutesTentativa
    }
    chute.value = "";
    chute.focus();
}      






