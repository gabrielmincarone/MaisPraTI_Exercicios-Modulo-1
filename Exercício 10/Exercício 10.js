// EXERCÍCIO 10
// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync') ()                                                                                                    // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal 

while(true) {

let numero                                                                                                                                  // Declara a variável 'numero' que irá armazenar o número informado pelo usuário                                                                      

do {                                                                                                                                        // Inicializa um loop 'do-while' para verificar se a entrada do usuário é valida
    numero = Number(prompt('Digite um número inteiro: '))                                                                                   // Inicializa, solicita ao usuário uma entrada, converte em 'number' e armazena o valor na variável 'numero' 
    if(isNaN(numero)) {                                                                                                                     // Verifica se o valor armazenado em 'numero' é inválido (não é um número)
        console.error('O valor digitado é inválido')                                                                                        // Exibe no terminal uma mensagem de erro, indicado que a entrada é inválida
    } else if(!Number.isInteger(numero)) {                                                                                                  // Verifica se o valor armazenado em 'numero' é válido (número inteiro)
        console.log('Você não digitou um número inteiro')                                                                                   // Exibe no terminal uma mensagem de erro, indicado que a entrada é não é um número inteiro
    }

} while (isNaN(numero) || !Number.isInteger(numero))                                                                                        // Encerra o loop 'do-while' quando validado o valor armazenado em 'numero'

for (let i = 0; i < 10; i++) {                                                                                                              // Executa o loop 'for' iniciando no indice 0 (zero) e percorre até o indice 10
    console.log(numero)                                                                                                                     // Exibe no terminal os números repetidos conforme o valor armazenado em 'numero' 
}

reiniciaSistema = Number(prompt('Digite 0 (zero) para sair, ou qualquer valor para cansar de ver seus números sendo repetidos: '))          // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 0) {                                                                                                                 // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('\nObrigado e até mais!')                                                                                                   // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                                      // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                      // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                                // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                                   // Encerra o loop 'while' e finaliza o programa
} else {                                                                                                                                    // Verifica se o valor armazenado em 'reiniciaSistema' é 1 (zero)
    console.log('\nBora cansar de repetir números!!!')                                                                                      // Exibe no terminar a mensagem indicando que o sistema será reiniciado                                                                    
    continue                                                                                                                                // Reinicia o loop 'while'
}

}