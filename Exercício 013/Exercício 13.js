// EXERCÍCIO 13
// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync') ()                                                                                        // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal  

while(true) {                                                                                                                   // inicia um loop 'while' infinito que será encerrado quando digitado 'sair'

const numero = []                                                                                                               // Declara o array 'numero' onde armazenará os números validados digitados pelo usuário
let num                                                                                                                         // Declara a variável 'num' que armazenará temporariamente cada valor digitado pelo usuário  
let acumulado = 0                                                                                                               // Inicializa a variável 'acumulado' em 0 (zero) e que armazenará a soma dos valores validados digitados pelo usuário  

while (true) {                                                                                                                  // Inicia um loop infinito, onde será encerrado apenas quando for digitado 0 (zero) 
    num = Number(prompt(`Informe um número ou digite 0 (zero) para calcular a média aritmética deles: `))                                                    // Inicializa a variável 'num', solicita ao usuário um valor, converte o valor para 'number' e armazena temporariamente em 'num'
    
    if(isNaN(num)) {                                                                                                            // Verifica se o valor em 'num' é invalido (não é um numero)
        console.error('Você não digitou valor inválido! Use apenas número.')                                                    // Exibe no terminal a mensagem de erro, indicando que a entrada é inválida
        continue                                                                                                                // Interrompe a execução do bloco de códigos e reinicia o 'while'
    }

    if(num === 0) {                                                                                                             // Verifica se o valor informado em 'num' é 0 (zero)
        break                                                                                                                   // Encerra o loop 'while' se o valor de 'num' é zero
    }

    numero.push(num)                                                                                                            // Armazena o valor validade de 'num' no array 'numero'
}

for (let i = 0; i < numero.length; i++) {                                                                                       // Executa o bloco de códigos até que percorra todos os indices do array 'numero' 
    acumulado += numero[i]                                                                                                      // Acumula o valor do indice de 'numero' em 'acumulado' 
}

console.log(`A média dos números digitados (${numero.join(', ')}) é ${(acumulado/numero.length).toFixed(2)}!`)                   // Exibe no terminal todos os numeros dentro do array 'numero' e a calcula a média dos valores dentro de 'acumulado' fixando os decimais em duas casas 

reiniciaSistema = prompt('Digite "sair" para encerrar o programa, ou qualquer valor para verificar uma nova média: ')           // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 'sair') {                                                                                                             // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('\nObrigado por utilizar nosso sistema de média aritmética!')                                                                    // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                                  // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                  // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                            // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                               // Encerra o loop 'while' e finaliza o programa
} else {                                                                                                                                // Verifica se o valor armazenado em 'reiniciaSistema' é 1 (zero)
    console.log('\nOk, bora calcular mais uma média aritmética!!!')                                                                           // Exibe no terminar a mensagem indicando que o sistema será reiniciado                                                                    
    continue                                                                                                                            // Reinicia o loop 'while'
}

}
