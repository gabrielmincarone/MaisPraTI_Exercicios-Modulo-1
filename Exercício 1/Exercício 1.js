// EXERCÍCIO 01
// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync') ()
let verficaParImpar                                                                                                 // Declaração da variável fora do bloco do-while para ser visivel fora do escopo do código

do {                                                                                                                // Inicia o loop para verificar se a entrada do usuário é válida 
    verficaParImpar = Number(prompt('Digite um NÚMERO INTEIRO para verificar se par ou impar: '))                   // Solita uma entrada do usuário, armazena e converte a entrada de string para número, deve ser inteiro

    if (Number.isNaN(verficaParImpar)) {                                                                            // Verificar se a entrada do usuário é um número    
        console.error(`Digite um número válido`)                                                                    // Mensagem informando o usuário de que a entrada não é um número
    } else if(!Number.isInteger(verficaParImpar)) {                                                                 // Verificar se a entrada do usuário é um número inteiro
        console.error(`O número ${verficaParImpar} não é valido, digite um número inteiro (sem decimais)!`)         // Mensagem informando o usuário de que a entrada não é um número inteiro
    }    
} while (!Number.isInteger(verficaParImpar))                                                                        // Faz com que o loop não encerre até que a entrada do usuário seja um número inteiro

if(verficaParImpar % 2 == 0) {                                                                                      // Faz a divisão por 2 e verifica se o resto é 0, sendo 0, é par.                                      
    console.log(`O número ${verficaParImpar} é PAR!`)                                                               // Exibe mensagem informando que o número é par
} else {
    console.log(`O número ${verficaParImpar} é IMPAR!`)                                                             // Exibe mensagem informando que o número é impar
}