
const result = document.querySelector('.backBack');
const parcentual = 100
let pointAdd = false
const botaoPorcentagem = document.querySelector('.procen');
const botaoMaisMenos = document.querySelector('.maisMenos');


function insert(value){
    result.innerHTML +=value;
    pointAdd = false
}

function clean (){
    result.innerHTML = ''
}

function confirm(){
    result.textContent = result.innerHTML = eval(result.innerHTML)
}

function backNum(){
    const resultado = document.getElementById('resultado').innerHTML
    result.innerHTML = resultado.substring(0, resultado.length -1);
}

function botoesEspeciais(valor){
    if(!pointAdd && result.textContent !== ""){
        result.innerHTML +=valor;
        pointAdd = true
    }
}

botaoPorcentagem.addEventListener('click', function(){
    if(result.textContent != ""){
        let valorNumerico = result.textContent;
        valorNumerico /= 100;
        result.textContent = valorNumerico;
    }

})

botaoMaisMenos.addEventListener('click',function(){
    if(result.textContent != ""){
        let valorNumerico = result.textContent;
        valorNumerico *= -1;
        result.textContent = valorNumerico;
    }
})