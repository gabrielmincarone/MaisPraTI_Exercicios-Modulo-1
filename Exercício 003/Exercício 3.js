// EXERCÍCIO 03
// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync') ()                                                                            // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal
while(true) {                                                                                                       // inicia um loop 'while' infinito que será encerrado quando digitado 0 (zero)


let informarNota                                                                                                    // Declara a variável 'informarNota' que irá armazenar o valor digitado pelo usuário
let nomeAluno = prompt('Informar o nome do aluno, ou digite "sair" para encerrar o programa: ')                     // Declara, inicializa e armazena o valor digitado pelo usuãrio na variável 'nomeAluno'

if(nomeAluno === 'sair') {                                                                                          // Verifica se o valor digitado é 'sair' para encerrar o loop 'while' e sair do programa
    console.log('Obrigado por utilizar nosso sistema de verificação de notas!')                                     // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                              // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                              // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                        // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                           // Encerra o loop 'while' e finaliza o programa
}

do {                                                                                                                // Inicia o loop 'do-while' para verificar se a entrada do usuário é válida
    informarNota = Number(prompt('Digite a nota do(a) aluno(a): '))                                                 // Inicializa a variável 'informarNota' e armazena o valor digitado pelo usuário
    if(isNaN(informarNota))                                                                                         // Verifica se o valor armazenado em 'informarNota' é um 'number'
        console.error('Nota inválida')                                                                              // Exibe no terminal uma mensagem de erro, indicando ao usuário que a entrada é inválida
} while (isNaN(informarNota))                                                                                       // Encerra o loop 'do-while' quando a entrada do usuário é validada

if(informarNota < 30) {                                                                                             // Verifica se o valor armazenado em 'informarNota' é menor que 30 para classifica-lo como reprovado
    console.log(`O(a) aluno(a) ${nomeAluno} está REPROVADO(A)`)                                                     // Exibe no terminal uma mensagem indicando que o aluno está reprovado
} else if (informarNota < 60) {                                                                                     // Verifica se o valor armazenado em 'informarNota' é menor que 60 para classifica-lo como em recuperação
    console.log(`O(a) aluno(a) ${nomeAluno} está em RECUPERAÇÃO`)                                                   // Exibe no terminal uma mensagem indicando que o aluno está em recuperação
} else {                                                                                                            // Verifica se o valor armazenado em 'informarNota' é maior que 60 para classifica-lo como aprovado
    console.log(`O(a) aluno(a) ${nomeAluno} está APROVADO(A)`)                                                      // Exibe no terminal uma mensagem indicando que o aluno está aprovado
}

}
