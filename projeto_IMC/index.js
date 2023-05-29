'use strict'
/* 1° criar os comandos de id de cada campo do html ex:nome,altura... */

const calcular = document.getElementById('calcular');


/*alert(varianel) = usado para identificar os itens no html ,confirma que eles existem */
/*variavel.value = */

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso  !== ''){
        const valorIMC =(peso / (altura * altura )).toFixed(1);
        let classificaçao = '';
        if (valorIMC < 18.5){
            classificaçao = 'Abaixo do peso .';
        }else if (valorIMC < 25){
            classificaçao = 'Peso ideal , PARABENS continue assim!';
        }else if (valorIMC < 30){
            classificaçao = 'Levemente assima do peso .';
        }else if (valorIMC < 35){
            classificaçao = 'Obsidade grau 1.';
        }else if (valorIMC < 40){
            classificaçao = 'Obsidade grau 2.';
        }else{
            classificaçao = 'Obsidade grau 3 , CUIDADO !!';
        }

       


        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificaçao}`;
    }else{
        resultado.textContent = 'preencha todos os campos'
    }
}
calcular.addEventListener('click', imc);