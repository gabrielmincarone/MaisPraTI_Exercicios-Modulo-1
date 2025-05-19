// EXERCÍCIO 11
// Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync') ()                                                                                                    // Importa o módulo prompt-sync e inicializa sua função, permitindo a entrada de dados pelo usuário no terminal. O () no final executa a função retornada pelo require.

while(true) {

const numeros = []                                                                                                                          // Cria um array vazio chamado numeros que será usado para armazenar os números digitados pelo usuário.
let soma = 0                                                                                                                                // Inicializa a variável soma com valor 0, que acumulará o resultado da soma dos números inseridos.

for (let i = 1; i <=5; i++) {                                                                                                               // Executa o bloco de código 5 vezes para coletar os 5 números
    let numero = Number(prompt(`Digite o ${i}º número: `))                                                                                  // Inicializa a variável que armazena o valor informado pelo usuário e converte em número

    if(isNaN(numero)) {                                                                                                                     // Verifica se o valor informado é um número
        console.error('O valor digitado é inválido')                                                                                        // Exibe no terminal a mensagem de erro pois o valor informado não é um número
        i--                                                                                                                                 // Decrementa 1 em i, para que a próxima iteração seja no mesmo indice 
       continue                                                                                                                             // Interrompe a execusão do i atual e volta para o início do loop no mesmo indice (sem ele, o valor não validado seria incluído no array numeros)
    }
     numeros.push(numero)                                                                                                                   // Armaze o valor validado no array numeros                                                                     
}

for (let i = 0; i < numeros.length; i++) {                                                                                                  // Percorre cada elemento do array 'numeros'
    soma += numeros[i]                                                                                                                      // Acumula o valor do elemento atual do array em soma
}                                                                                                                                   
 
console.log(`A soma de (${numeros.join(' + ')}) é ${soma}!`)                                                                                // Exibe no terminal a soma formatada, mostrando todos os números digitados e o resultado final.

reiniciaSistema = Number(prompt('Digite 0 (zero) para sair, ou qualquer valor para cansar de ver seus números sendo repetidos: '))          // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 0) {                                                                                                                 // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('\nObrigado por utilizar nossa calculadora de soma!')                                                                        // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                                      // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                      // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                                // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                                   // Encerra o loop 'while' e finaliza o programa
} else {                                                                                                                                    // Verifica se o valor armazenado em 'reiniciaSistema' é 1 (zero)
    console.log('\nVamos somar novos números então!!!')                                                                                     // Exibe no terminar a mensagem indicando que o sistema será reiniciado                                                                    
    continue                                                                                                                                // Reinicia o loop 'while'
}

}
