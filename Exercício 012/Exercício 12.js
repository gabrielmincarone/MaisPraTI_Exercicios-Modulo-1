// EXERCÍCIO 12
// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync') ()                                                                                                // Importa o módulo prompt-sync e incializa a sua função, permintindo a entrada de dados pelo usuário no terminal.

while(true) {                                                                                                                           // inicia um loop 'while' infinito que será encerrado quando digitado 0 (zero)

let numero                                                                                                                              // Declaração da variável que armazenará o valor informado pelo usuário

do {                                                                                                                                    // Inicia um loop 'do-while' que executa pelo menos uma vez, para validar a entrada do usuário
    numero = Number(prompt(`Digite um número para verificar a sua tabuada: `))                                                          // Inicializa a variável 'numero' e solicita ao usuário um valor para ela via prompt e converte o valor para 'number'
        if(isNaN(numero)) {                                                                                                             // Verifica se o valor em 'número' é válido
            console.error('O valor informado não é um número')                                                                          // Exibe no terminal a mensagem de erro, indicando entrada inválida
        }
} while (isNaN(numero))                                                                                                                 // Repete o loop enquanto 'numero' for inválido (isNaN(numero) === true)


for (let i = 1; i <= 10; i++) {                                                                                                         // Executa o bloco de código 10 vezes (de 1 a 10) para calcular a tabuada com o número informado
   console.log(`${numero} x ${[i]} = ${numero*[i]} `)                                                                                   // Exibe no terminal a tabuada no formato 'numero x i = resultado'
   }

reiniciaSistema = Number(prompt('Digite 0 (zero) para sair, ou qualquer valor para verificar uma nova tabuada: '))                      // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 0) {                                                                                                             // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('\nObrigado por utilizar nosso sistema de tabuada!')                                                                    // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                                  // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                  // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                            // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                               // Encerra o loop 'while' e finaliza o programa
} else {                                                                                                                                // Verifica se o valor armazenado em 'reiniciaSistema' é 1 (zero)
    console.log('\nVamos calcular mais uma tabuada então!!!')                                                                           // Exibe no terminar a mensagem indicando que o sistema será reiniciado                                                                    
    continue                                                                                                                            // Reinicia o loop 'while'
}

}