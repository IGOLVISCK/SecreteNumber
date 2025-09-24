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

// numeroSecreto está no escopo exterior (global do módulo) — acessível por validarChute
let numeroSecreto = gerarNumero(); 
console.log("Número secreto (inicial):", numeroSecreto);

btnChute.addEventListener("click", function () {
    validarChute();
    
});

function gerarNumero() {
    // forma simples e correta de gerar 1..10
    return Math.floor(Math.random() * 10) + 1;
}

function validarChute(){
    const valorChute = parseInt(chute.value, 10);
    if (isNaN(valorChute)) {
        alert("Digite um número válido!");
        return;
    }

    if (valorChute === numeroSecreto) {
        acertos++;
        tentativas++;
        txtResultado.classList.add('resultadoCorreto');
        placarAcertos.textContent = acertos;
        placarTentativas.textContent = tentativas;
        txtResultado.textContent = 'ACERTOU O NUMERO SECRETO: '+numeroSecreto;
        numeroSecreto = gerarNumero();
        txtResultado.classList.remove('resultadoErrado')
        console.log("Novo número secreto:", numeroSecreto);
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

    }       

    chute.value = "";
    chute.focus();
}

