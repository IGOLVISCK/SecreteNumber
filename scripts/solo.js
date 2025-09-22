let btn1a10 = document.getElementById("btn1a10");
let btn1a100 = document.getElementById("btn1a100");
let btn1a1000 = document.getElementById("btn1a1000");

const chute = document.getElementById("inputSolo");
const btnChute = document.getElementById("btnChuteSolo")
let valorChute = '';
btnChute.addEventListener("click", function(){
    valorChute = chute.value;
    console.log(valorChute, "FUNCtION");
    alert(valorChute)
})
console.log(valorChute)

