// EXERCÍCIO 02
// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync') ()
let idadeCategoria                                                                                                  // Declaração da variável fora do bloco do-while para ser visível fora do escopo do código

do {                                                                                                                // Inicia o loop para verificar se a entrada do usuário é um número
    idadeCategoria = Number(prompt('Digite uma idade para verificar a categoria desta pessoa: '))                   // Solicita uma entrada do usuário, armazena e converte a entrada de string para número, deve ser float
    if(isNaN(idadeCategoria)) {                                                                                     // Verifica se a entrada é um número
        console.error(`Entrada inválida =(`)                                                                        // Informa ao usuário que a entrada está incorreta
    }
} while (isNaN(idadeCategoria))                                                                                     // Faz com que o loop não se encerre até que a entrada seja de um número

if(idadeCategoria < 13) {                                                                                           // Verifica se a entrada do usuário é menor que 13 para classifica-la como criança
    console.log(`Uma pessoa com ${idadeCategoria} é considerada criança`)                                           // Informa que a idade informada é categorizada como criança
} else if(idadeCategoria < 18) {                                                                                    // Verifica se a entrada do usuário é menor que 18 para classifica-la como adolescente
    console.log(`Uma pessoa com ${idadeCategoria} é considerada adolescente`)                                       // Informa que a idade informada é categorizada como adolescente
} else if(idadeCategoria < 60) {                                                                                    // Verifica se a entrada do usuário é menor que 60 para classifica-la como adulto
    console.log(`Uma pessoa com ${idadeCategoria} é considerada adulta`)                                            // Informa que a idade informada é categorizada como adulta
} else {                                                                                                            // Verifica se a entrada do usuário não é menor que 60 para classifica-la como idoso
    console.log(`Uma pessoa com ${idadeCategoria} é considerada idosa`)                                             // Informa que a idade informada é categorizada como idosa
}