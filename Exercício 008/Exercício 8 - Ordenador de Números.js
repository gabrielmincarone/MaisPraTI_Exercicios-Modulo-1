// EXERCÍCIO 08
// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync') ()                                                                                                // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal

while (true) {

let valorA                                                                                                                              // Declara a variável 'valorA' que irá armazenar o valor digitado pelo usuário
let valorB                                                                                                                              // Declara a variável 'valorB' que irá armazenar o valor digitado pelo usuário

do {                                                                                                                                    // Inicializa um loop 'do-while' para validar a entrada da variável 'valorA'
    valorA = Number(prompt('Digite um valor para A: '))                                                                                 // Inicializa, solicita um valor ao usuário, converte para 'number' e armazena o valor na variável 'valorA'
    
    if(isNaN(valorA) || valorA === null) {                                                                                              // Verifica se o valor armazenado em 'valorA' não é um número ou se não é vazio       
        console.error('O valor informado em A é inválido')                                                                              // Exibe no terminal a mensagem de erro, indicando que a entrada é inválida
    } 
} while (isNaN(valorA) || valorA === null)                                                                                              // Encerra o loop se a entrada em 'valorA' é validada

do {                                                                                                                                    // Inicializa um loop 'do-while' para validar a entrada da variável 'valorB'
    valorB = Number(prompt('Digite um valor para B: '))                                                                                 // Inicializa, solicita um valor ao usuário, converte para 'number' e armazena o valor na variável 'valorB'

    if(isNaN(valorB) || valorB === null) {                                                                                              // Verifica se o valor armazenado em 'valorA' não é um número ou se não é vazio
        console.error('O valor informado em B é inválido')                                                                              // Exibe no terminal a mensagem de erro, indicando que a entrada é inválida
    } else if(valorA === valorB) {                                                                                                      // Verifica se o valor armazenado na variável 'valorB' é igual ao armazenado na variável 'valorA' (não deve ser)
        console.error('O valor de A é igual a B, informe um novo valor para B')                                                         // Exibe no terminal a mensagem de erro, indicando que a entrada é inválida
    }
} while (isNaN(valorB) || valorB === null || valorA === valorB)                                                                         // Encerra o loop se a entrada em 'valorB' é validada


console.log(`Esta é a ordem crescente dos número informados: ${Math.min(valorA, valorB)} - ${Math.max(valorA, valorB)}`)                // Informa ao usuário a ordem crescente dos números informados

reiniciaSistema = Number(prompt('Digite 0 (zero) para sair, ou qualquer número para verificar a ordem novamento: '))                    // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 0) {                                                                                                             // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('Obrigado usar nosso ordenador de números!')                                                                             // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                                  // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                  // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                            // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                               // Encerra o loop 'while' e finaliza o programa
} else {                                                                                                                                // Verifica se o valor armazenado em 'reiniciaSistema' é 1 (zero)
    console.log('Vamos lá então!!!')                                                                                                    // Exibe no terminar a mensagem indicando que o sistema será reiniciado                                                                    
    continue                                                                                                                            // Reinicia o loop 'while'
}

}
