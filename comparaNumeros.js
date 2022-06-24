function comparaNumeros(num1, num2){
    const primeiraFrase = criaPimeiraFrase(num1, num2);
    const segundaFrase = criaSegudaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}
function criaPimeiraFrase(num1, num2){
    let primeiraFrase =`Os números ${num1} e ${num2}`;
    let simNao ='';

    if (num1 == num2){
        simNao = '';
    }

    return `${primeiraFrase} e ${simNao} são iguais`;
}

function criaSegudaFrase(num1, num2){
    const soma = num1 + num2;
    let comparaDez = 'menor';
    let comparaVinte = 'maior';

    if (soma > 10){
        comparaDez = 'menor';
    }
    if (soma > 20){
        comparaVinte = 'maior';
    }
    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10))