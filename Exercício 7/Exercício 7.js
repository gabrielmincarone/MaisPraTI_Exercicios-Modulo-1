// EXERCÍCIO 07
// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync') ()                                                                                                                                                                    // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal
while(true) {

let qtdMaca                                                                                                                                                                                                 // Declara a variável 'qtdMaca' que irá armazenar a quantidade digitada pelo usuário
let compras = []                                                                                                                                                                                            // Declara o array 'compras' como vazia que irá armazenar os dados da compra

do {                                                                                                                                                                                                        // Inicializa um loop 'do-while' para verificar se a entrada do usuário é valida
    qtdMaca = Number(prompt('Digite a quantidade de maças compradas: '))                                                                                                                                    // Inicializa, solicita ao usuário uma entrada, converte a entrada para 'number' e armazena na variável 'qtdMaca'
    if(isNaN(qtdMaca) || qtdMaca === null || qtdMaca <= 0)                                                                                                                                                  // Verifica se o valor armazenado em 'qtdMaca' é válida (não é número, é nulo ou menos, igual a zero)
        console.error('Verifique a quantidade digitada')                                                                                                                                                    // Exibe no terminal a mensagem de erro, indicando que a entrada é inválida
} while (isNaN(qtdMaca) || qtdMaca === null || qtdMaca <= 0)                                                                                                                                                // Encerrado o loop 'do-while' quando o valor armazenado em 'qtdMaca' está validada

if(qtdMaca >= 12) {                                                                                                                                                                                         // Verifica se o valor armazenado em 'qtdMaca' é maior ou igual a 12 para aplicar desconto de 5%
    compras = [
        {Código: 10000001, Descrição: 'Maça', Qtde: qtdMaca, Un: 'UN', Vl_Unit: 0.30, Vl_Total: (qtdMaca*0.30).toFixed(2), Desconto: (qtdMaca*0.05).toFixed(2), Vl_Pago: (qtdMaca*0.25).toFixed(2)}         // Armazena os dados da compra no array 'compras' para consolidar os dados da venda com desconto
    ]
} else {
    compras = [                                                                                                                                                                                             // Verifica se o valor armazenado em 'qtdMaca' menor que 12 para não aplicar desconto
        {Código: 10000001, Descrição: 'Maça', Qtde: qtdMaca, Un: 'UN', Vl_Unit: 0.30, Vl_Total: (qtdMaca*0.30).toFixed(2), Desconto: 0.00, Vl_Pago: (qtdMaca*0.30).toFixed(2)}                              // Armazena os dados da compra no array 'compras' para consolidar os dados da venda sem desconto
    ]
}    

console.table(compras)                                                                                                                                                                                      // Exibe os dados armazenados no array 'compras' em formato de tabela (simulando uma nota fiscal)

reiniciaSistema = Number(prompt('Digite 0 (zero) para sair, ou qualquer valor para realizar uma nova compra: '))                                                                                            // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 0) {                                                                                                                                                                                 // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('Obrigado comprar conosco!')                                                                                                                                                                // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                                                                                                      // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                                                                                                      // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                                                                                                // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                                                                                                   // Encerra o loop 'while' e finaliza o programa
} else {                                                                                                                                                                                                    // Verifica se o valor armazenado em 'reiniciaSistema' diferente de 0 (zero)
    console.log('Certo! Vamos comprar mais maças!')                                                                                                                                                         // Exibe no terminal a mensagem indicando que o sistema será reiniciado                                                                    
    continue                                                                                                                                                                                                // Reinicia o loop 'while'
}

}