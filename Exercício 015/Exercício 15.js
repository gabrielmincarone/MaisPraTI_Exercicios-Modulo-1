// EXERCÍCIO 15
// Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')()                                                                                                                 // Importa o módulo prompt-sync e inicializa a sua função, permitindo que o usuário entre com dados no terminal

while(true) {                                                                                                                                           // inicia um loop 'while' infinito que será encerrado quando digitado 'sair'

let fibonacci = 1                                                                                                                                       // Declara e inicia a variável 'fibonacci' com o valor de 1 para iniciar o calculo de Fibonacci 
let arrFibonacci = [1]                                                                                                                                  // Declara e inicia o array 'arrFibonacci' com o valor de 1 para iniciar o calculo de Fibonacci
let sumFib = 1                                                                                                                                          // Declara e inicia a variável 'sumFib' com o valor de 1 para iniciar o calculo de Fibonacci
let arrSumFib = [0]                                                                                                                                     // Declara e inicia o array 'arrSumFib' com o valor de 0 para iniciar o calculo de Fibonacci

let linhasFibonacci = Number(prompt('Digite a quantidade de linhas da sequecia Fibonacci você deseja visualizar: '))                                    // Declara, inicializa, solicita ao usuário uma entrada, converte em 'number' e armazena na variável 'linhasFibonacci'

for (let i = 1; i <= linhasFibonacci; i++) {                                                                                                            // Executa o loop 'for' que irá calcular e imprimir a quantidade de linhas da sequencia de fibonacci conforme armazenado em 'linhasFibonacci' 
    fibonacci = fibonacci + (sumFib = arrSumFib[arrSumFib.length - 1])                                                                                  // Executa o cálculo de fibonacci, onde, atualiza 'fibonacci' somando o seu valor atual ao última valor em 'arrSumFib'
    arrFibonacci.push(fibonacci)                                                                                                                        // Armazena no array 'arrFibonacci' o valor calculado em 'fibonacci'
    sumFib = fibonacci - sumFib                                                                                                                         // Executa o novo valor de 'sumFib' que será utilizado para calcular 'fibonacci' no próximo loop
    arrSumFib.push(sumFib)                                                                                                                              // Armazena no array 'arrSumFib' o valor calculado em 'sumFib'

    console.log(`n[${String(i).padStart(2, '0')}] ${arrFibonacci[arrFibonacci.length-2]} + ${arrSumFib[arrSumFib.length - 2]} = ${fibonacci}`)          // Exibe na tela do terminal o cálculo e o resultado de fibonacci linha a linha
}

reiniciaSistema = prompt('Digite "sair" para encerra o programa, ou qualquer valor para verificar mais linhas da sequencia Fibonacci: ')                // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 'sair') {                                                                                                                        // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('\nAté a próxima! Espero que nosso reencontro seja exponencial!!!')                                                                    // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                                                  // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                                  // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                                            // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                                               // Encerra o loop 'while' e finaliza o programa
} else {                                                                                                                                                // Verifica se o valor armazenado em 'reiniciaSistema' é 1 (zero)
    console.log('\nVamos seguir em frente com mais um cálculo de Fibonacci ')                                                                           // Exibe no terminar a mensagem indicando que o sistema será reiniciado                                                                    
    continue                                                                                                                                            // Reinicia o loop 'while'
}

}