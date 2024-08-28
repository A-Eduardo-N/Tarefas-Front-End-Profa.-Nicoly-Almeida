// Função para calcular a operação escolhida pelo usuário
function calcular() {
   
    // Seleciona a operação desejada
    let operacao = prompt("Escolha a operação: soma, subtracao, multiplicacao ou divisao").toLowerCase();
    
     // Solicita ao usuário a entrada dos dois números
     let numero1 = parseFloat(prompt("Digite o primeiro número:"));
     let numero2 = parseFloat(prompt("Digite o segundo número:"));

    // Variáveis para armazenar os resultados
    let resultadoSoma, resultadoSubtracao, resultadoMultiplicacao, resultadoDivisao;

    // Calcula as operações e armazena os resultados
    resultadoSoma = numero1 + numero2;
    resultadoSubtracao = numero1 - numero2;
    resultadoMultiplicacao = numero1 * numero2;
    
    if (numero2 !== 0) {
        resultadoDivisao = numero1 / numero2;
    } else {
        resultadoDivisao = "Erro: Não é possível dividir por zero.";
    }

    // Exibe os resultados de acordo com a operação escolhida
    switch (operacao) {
        case "soma":
            console.log("Resultado da Soma: " + resultadoSoma);
            break;
        case "subtracao":
            console.log("Resultado da Subtração: " + resultadoSubtracao);
            break;
        case "multiplicacao":
            console.log("Resultado da Multiplicação: " + resultadoMultiplicacao);
            break;
        case "divisao":
            console.log("Resultado da Divisão: " + resultadoDivisao);
            break;
        default:
            console.log("Operação inválida. Escolha entre soma, subtracao, multiplicacao ou divisao.");
    }
}

// Chama a função para executar a calculadora
calcular();
