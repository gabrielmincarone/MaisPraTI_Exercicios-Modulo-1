// EXERCÍCIO 02
// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync') ()                                                                                                // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal

while (true) {                                                                                                                          // inicia um loop 'while' infinito que será encerrado quando digitado 0 (zero)

let idadeCategoria                                                                                                                      // Declara a variável 'idadeCategoria' que irá armazenar o número digitado pelo usuário

do {                                                                                                                                    // Inicia um loop 'do-while' para verificar se a entrada do usuário é válida
    idadeCategoria = Number(prompt('Digite uma idade para verificar a categoria desta pessoa, ou 0 (zero) para sair: '))                // Inicializa a variável 'idadeCategoria', solicita uma entrada do usuário, converte a entrada para 'number' e armazena na variável
    if(isNaN(idadeCategoria)) {                                                                                                         // Verifica se o valor armazenado em 'idadeCategoria' é um número
        console.error(`Entrada inválida =(`)                                                                                            // Exibe no terminal uma mensagem de erro, indicando que a entrada é inválida
    }
} while (isNaN(idadeCategoria))                                                                                                         // Encerra o loop 'do-while' quando a entrada é validada

if(idadeCategoria === 0) {                                                                                                              // Verifica se o valor digitado é 0 (zero) para encerrar o loop 'while' e sair do programa
    console.log('Até mais!')                                                                                                            // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                                  // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                  // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                            // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                               // Encerra o loop 'while' e finaliza o programa

} else if(idadeCategoria < 13) {                                                                                                        // Verifica se a entrada do usuário é menor que 13 para classifica-la como criança
    console.log(`Uma pessoa com ${idadeCategoria} é considerada criança`)                                                               // Exibe no terminal a mensagem informando que a idade digitada é categorizada como criança
} else if(idadeCategoria < 18) {                                                                                                        // Verifica se a entrada do usuário é menor que 18 para classifica-la como adolescente
    console.log(`Uma pessoa com ${idadeCategoria} é considerada adolescente`)                                                           // Exibe no terminal a mensagem informando que a idade digitada é categorizada como adolescente
} else if(idadeCategoria < 60) {                                                                                                        // Verifica se a entrada do usuário é menor que 60 para classifica-la como adulto
    console.log(`Uma pessoa com ${idadeCategoria} é considerada adulta`)                                                                // Exibe no terminal a mensagem informando que a idade digitada é categorizada como  adulta
} else {                                                                                                                                // Verifica se a entrada do usuário não é menor que 60 para classifica-la como idoso
    console.log(`Uma pessoa com ${idadeCategoria} é considerada idosa`)                                                                 // Exibe no terminal a mensagem informando que a idade digitada é categorizada como  idosa
}
}
