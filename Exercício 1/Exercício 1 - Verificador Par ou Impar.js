// EXERCÍCIO 01
// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync') ()                                                                                        // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal

while (true) {                                                                                                                  // inicia um loop 'while' infinito que será encerrado quando digitado 0 (zero)

let verficaParImpar                                                                                                             // Declara a variável 'verificaParImpar' onde armazenará os números digitados pelo usuário 

do {                                                                                                                            // Inicia um loop 'do-while' para verificar se a entrada do usuário é válida 
    verficaParImpar = Number(prompt('Digite um NÚMERO INTEIRO para verificar se par ou impar, ou 0 (zero) para sair: '))        // Inicializa a variável 'verificaParImpar', solita uma entrada ao usuário, converte o valor para 'number' e armazena o valor na variável

    if (Number.isNaN(verficaParImpar)) {                                                                                        // Verifica se o valor armazenado em 'verificaParImpar' é um número    
        console.error(`Digite um número válido`)                                                                                // Exibe no terminal a mensagem de erro, indicando que a entrada é inválida
    } else if(!Number.isInteger(verficaParImpar)) {                                                                             // Verificar se o valor armazenado em 'verificaParImpar' é um número inteiro
        console.error(`O número ${verficaParImpar} não é valido, digite um número inteiro (sem decimais)!`)                     // Exibe no terminal a mensagem de erro, indicando que a entrada não é um número inteiro
    }    
} while (!Number.isInteger(verficaParImpar))                                                                                    // Encerra o loop 'do-while' quando verificado que a entrada do usuário é válida

if(verficaParImpar === 0) {                                                                                                     // Verica se o valor digitado é 0 (zero) para encerrar o loop 'while' e sair do programa
    console.log('Obrigado por brincar de par ou impar! \nAté mais!')                                                            // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                          // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                          // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                    // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                       // Encerra o loop 'while' e finaliza o programa
}

if(verficaParImpar % 2 == 0) {                                                                                                  // Faz a divisão por 2 e verifica se o resto é 0, sendo 0, é par.                                      
    console.log(`O número ${verficaParImpar} é PAR!`)                                                                           // Exibe no terminal a mensagem informando que o número é par
} else {
    console.log(`O número ${verficaParImpar} é IMPAR!`)                                                                         // Exibe no terminal a mensagem informando que o número é impar
}
}
