// EXERCÍCIO 04
// Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync') ()                                                                            // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal

while (true) {                                                                                                      // inicia um loop 'while' infinito que será encerrado quando digitado 0 (zero)

let saborSorvete                                                                                                    // Declara a variável que irã armazenar o valor digitado pelo usuário

do {                                                                                                                // Inicia o loop 'do-while' para verificar se a entrada é válida (apenas '0', '1', '2' ou '3')
    console.log('Digite 1 para Chocolate')                                                                          // Opção 1 (chocolate) do menu - menu criado fora do 'saborSorvete' para não ficar duplicando no while
    console.log('Digite 2 para Morango')                                                                            // Opção 2 (morango) do menu - menu criado fora do 'saborSorvete' para não ficar duplicando no while
    console.log('Digite 3 para Creme')                                                                              // Opção 3 (creme) do menu - menu criado fora do 'saborSorvete' para não ficar duplicando no while
    console.log('Digite 0 (zero) para encerrar a sessão')                                                           // Opção 4 (sair) do menu - menu criado fora do 'saborSorvete' para não ficar duplicando no while
    
    saborSorvete = Number(prompt('Qual a sua opção? '))                                                             // Inicializa, solicita e armazena a entrada do usuário na variável 'saborSorvete'
    
if(isNaN(saborSorvete)) {                                                                                           // Verifica se a entrada do usuário na variável 'saborSorvete' é um 'number'
        console.error('Por favor, digite um número válido')                                                         // Exibe no terminal uma mensagem de erro, indicando que a entrada é inválida
    } else if(saborSorvete < 0 || saborSorvete > 3) {                                                               // Verifica se a entrada do usuário é uma das opções do menu (0, 1, 2 ou 3)
        console.error('Você digitou um sabor inexistente =(')                                                       // Exibe no terminal uma mensagem de erro, indicando que a entrada é de um sabor inexistente
    }

} while (saborSorvete != 0 && saborSorvete != 1 && saborSorvete != 2 && saborSorvete != 3)                          // Encerra o loop 'do-while' quando a entrada é validada



switch(saborSorvete) {                                                                                              // Switch case para a interagir com o usuário conforme a opção selecionada no menu
    case 0:                                                                                                         // Case 0 - Sair
        console.log('Que pena que desistiu do seu pedido =(\nTe aguardamos em breve =)')                            // Resposta ao usuário que escolhe a opção sair
        break                                                                                                       // Encerra o 'switch' quando opção 0 (zero) encontrada
    case 1:                                                                                                         // Case 1 - Chocolate
        console.log('Uhuuuu! O seu sorvete sabor de chocolate estará pronto em até 10 minutos')                     // Resposta ao usuário que escolhe a opção chocolate
        break                                                                                                       // Encerra o 'switch' quando opção 1 encontrada
    case 2:                                                                                                         // Case 2 - Morango
        console.log('Uhuuuu! O seu sorvete sabor de morango estará pronto em até 10 minutos')                       // Resposta ao usuário que escolhe a opção morango
        break                                                                                                       // Encerra o 'switch' quando opção 2 encontrada
    case 3:                                                                                                         // Case 3 - Creme
        console.log('Infelizmente estamos com o sorvete de creme em falta =(')                                      // Resposta ao usuário que escolhe a opção creme
        break                                                                                                       // Encerra o 'switch' quando opção 3 encontrada
}

setTimeout(() => {                                                                                                  // Agenda função para encerrar o programa em 3 segundos
    process.exit()                                                                                                  // Encerra o processo o processo e finaliza o programa
}, 3000)                                                                                                            // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
break                                                                                                               // Encerra o loop 'while' e finaliza o programa

}
