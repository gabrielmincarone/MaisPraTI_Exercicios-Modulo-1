// EXERCÍCIO 09
// Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

const prompt = require('prompt-sync') ()                                                                                                    // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal 

while (true) {

let regressiva                                                                                                                              // Declara a variável que armanezará o número onde a contagem deve iniciar

do {                                                                                                                                        // Inicia um loop 'do-while' para verificar se a entrada do usuário é válida
    regressiva = Number(prompt('Digite um número para realizar a contagem regressiva: '))                                                   // Inicializa, solicita ao usuário uma entrada, converte em 'number' e armazena a entrada na variável 'regressiva'
    if(isNaN(regressiva) || regressiva === null) {                                                                                          // Verifica se o valor armazenado em 'regressiva' é válido (não é número ou vazio)
        console.error('Entrada inválida! Digite um novo número.')                                                                           // Exibe no terminal a mensagem de erro, indicando ao usuário que a entrada é inválida
    }
} while (isNaN(regressiva) || regressiva === null)                                                                                          // Encerra o loop 'do-while' quando validado o valor em 'regressiva'

for (let i = regressiva; i >= regressiva - 9; i--) {                                                                                        // Executa o loop 'for' iniciando no valor da variável 'regressiva' e encerra quando percorrer o indice da variável 'regressiva' - 9   
    console.log(i)                                                                                                                          // Exibe no terminal a contagem regressiva a partir da variável 'regressiva'
}

reiniciaSistema = Number(prompt('Digite 0 (zero) para sair, ou qualquer número para realizar uma nova contagem regressiva: '))              // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 0) {                                                                                                                 // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('\nAté mais!')                                                                                                              // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                                      // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                      // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                                // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                                   // Encerra o loop 'while' e finaliza o programa
} else {                                                                                                                                    // Verifica se o valor armazenado em 'reiniciaSistema' é 1 (zero)
    console.log('\nBora recontar então, mas não me cansa muito!!!')                                                                         // Exibe no terminar a mensagem indicando que o sistema será reiniciado                                                                    
    continue                                                                                                                                // Reinicia o loop 'while'
}

}