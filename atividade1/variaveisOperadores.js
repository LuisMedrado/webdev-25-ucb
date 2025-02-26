// Declaração de variáveis

let operacoes = [
    { nome: "Adição", num1: 5, num2: 10 },
    { nome: "Subtração", num1: 10, num2: 7.5 },
    { nome: "Multiplicação", num1: 3.75, num2: 5 },
    { nome: "Divisão", num1: 36, num2: 12 }
  ];

// Iterar sobre variáveis e suas operações
  
  for (let operacao of operacoes) {
    if (operacao.nome == "Adição") {
        let resultado = operacao.num1 + operacao.num2;
        console.log(`Resultado da ${operacao.nome} entre ${operacao.num1} e ${operacao.num2} é ${resultado}`);
    }
    
    else if (operacao.nome == "Subtração") {
        let resultado = operacao.num1 - operacao.num2;
        console.log(`Resultado da ${operacao.nome} entre ${operacao.num1} e ${operacao.num2} é ${resultado}`);
    }

    else if (operacao.nome == "Multiplicação") {
        let resultado = operacao.num1 * operacao.num2;
        console.log(`Resultado da ${operacao.nome} entre ${operacao.num1} e ${operacao.num2} é ${resultado}`);
    }
    else if (operacao.nome == "Divisão") {
        let resultado = operacao.num1 / operacao.num2;
        console.log(`Resultado da ${operacao.nome} entre ${operacao.num1} e ${operacao.num2} é ${resultado}`);
    }
  }
  