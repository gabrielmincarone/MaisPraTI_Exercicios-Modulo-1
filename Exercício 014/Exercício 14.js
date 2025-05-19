// EXERCÍCIO 14
// Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync') ()                                                                                    // Importa o módulo prompt-sync e inicializa a sua função, permitindo que o usuário entre com dados no terminal

while(true) {

let resultado = 1                                                                                                           // Inicializa a variavel 'resultado' com o valor de 1 para não zerar o cálculo do fatorial 
let numero                                                                                                                  // Declara a variável 'numero' sem valor, onde posteriormente armazenará o valor validado digitado pelo usuário

while (true) {                                                                                                              // Inicia um loop infinito até que se valide o valor digitado em numero
    numero = Number(prompt('Digite um número inteiro e positivo para verificar o seu fatorial: '))                          // Inicializa a variável 'numero' solicitando ao usuário um numero inteiro e positivo e o converte para 'number'

        if(isNaN(numero)) {                                                                                                 // Verifica se a conversão em 'numero' para number ocorreu corretamente 
            console.error('O valor digitado é INVÁLIDO')                                                                    // Exibe no terminal a mensagem de erro, indicando que o valor é inválido
            continue                                                                                                        // Interrompe a execução do bloco de código e retorna para o início
        } else if(!Number.isInteger(numero)) {                                                                              // Verifica se o valor digitado em 'numero' não é inteiro
            console.error('O número digitado NÃO É INTEIRO')                                                                // Exibe no terminal a mensagem de erro, indicando que o número não é inteiro 
            continue                                                                                                        // Interrompe a execução do bloco de código e retorna para o início
        } else if(numero < 0) {                                                                                             // Verifica se o valor digitado em 'numero' é menor que zero
            console.error('O número digitado é NEGATIVO')                                                                   // Exibe no terminal a mensagem de erro, indicando que o número é negativo
            continue                                                                                                        // Interrompe a execução do bloco de código e retorna para o início
        }
    
    break                                                                                                                   // Encerra o loop em 'while' se o valor em 'numero' for um número inteiro e positivo (igual ou maior que zero) 
}

for (let i = 1; i <= numero; i++) {                                                                                         // Executa o loop 'for' iniciando em 1 e encerra quando percorrer o indice igual ou menor que o valor digitado em 'numero' 
    resultado *= i                                                                                                          // Executa o cálculo fatorial onde resultado x o indice atual 
}

console.log(`O fatorial de ${numero} é ${resultado}.`)                                                                      // Exibe no terminal o valor validado em 'numero' e o seu fatorial em 'resultado'

reiniciaSistema = Number(prompt('Digite 0 (zero) para sair, ou qualquer valor para verificar um nova fatorial: '))           // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 0) {                                                                                                             // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('\nObrigado por utilizar nosso sistema de fatorial!')                                                                    // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                                  // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                  // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                            // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                               // Encerra o loop 'while' e finaliza o programa
} else {                                                                                                                                // Verifica se o valor armazenado em 'reiniciaSistema' é 1 (zero)
    console.log('\nCombinado! Vamos fatorar mais alguns números')                                                                           // Exibe no terminar a mensagem indicando que o sistema será reiniciado                                                                    
    continue                                                                                                                            // Reinicia o loop 'while'
}

}