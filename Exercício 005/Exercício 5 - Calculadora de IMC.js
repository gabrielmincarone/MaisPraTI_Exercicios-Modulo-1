// EXERCÍCIO 05
// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync') ()                                                                            // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal

while(true) {                                                                                                       // Inicia loop 'while' que se encerra se o usuário digita 0 (zero)

let peso                                                                                                            // Declara a variável 'peso' que irá armazenar a entrada digitada pelo usuário
let altura                                                                                                          // Declara a variável 'altura' que irá armazenar a entrada digitada pelo usuário
let imc                                                                                                             // Declara a variável 'imc' que será calculada com base na entrada informada nas variáveis 'peso' e 'altura'

do {                                                                                                                // Início do do-while que solita ao usuário os dados e verifica se o peso e altura informados estão corretas
    peso = Number(prompt('Qual o seu peso? '))                                                                      // Inicializa, armazena e converte para número a entrada digitada pelo usuário na variável 'peso'
    altura = Number(prompt('Qual a sua altura em centímetros (ex.: 180cm)? ')) / 100                                // Inicializa, armazena e converte para número a entrada digitada pelo usuário na variável 'altura'
    imc = (peso / (altura*altura)).toFixed(2)                                                                       // Inicializa a variável 'imc' realizando o cálculo do IMC (peso / (altura * altura)) e fixa para duas casas decimais

    if(isNaN(peso) || isNaN(altura) || peso < 0 || altura < 0) {                                                    // Valida se o valor armazenado em 'peso' e 'altura' são do tipo 'number' e se são maior que 0 (zeros)
        console.error('Digite uma entrada válida')                                                                  // Exibe no terminal a mensagem de erro, indicando que que a entrada do usuário foi inválida
    }
} while (isNaN(peso) || isNaN(altura) || peso < 0 || altura < 0)                                                    // Encerra o loop 'do-while' quando validado os valores inseridos pelo usuário


if(imc < 18.5) {                                                                                                    // Verifica se o cálculo de imc ficou abaixo de 18.5
    console.log(`Seu IMC: ${imc} - Classificação: abaixo do peso`)                                                  // Exibe no terminar a mensagem indicando ao usuário o seu IMC e a sua classificação como abaixo do peso
} else if(imc >= 18.5 && imc < 25) {                                                                                // Verifica se o cálculo de imc ficou entre 18.5 e 25
    console.log(`Seu IMC: ${imc} - Classificação: peso normal`)                                                     // Exibe no terminar a mensagem indicando ao usuário o seu IMC e a sua classificação como normal
} else if(imc >= 25 && imc < 30) {                                                                                  // Verifica se o cálculo de imc ficou entre 25 e 30
    console.log(`Seu IMC: ${imc} - Classificação: sobrepeso`)                                                       // Exibe no terminar a mensagem indicando ao usuário o seu IMC e a sua classificação como sobre peso
} else if(imc >= 30 && imc < 35) {                                                                                  // Verifica se o cálculo de imc ficou entre 30 e 35
    console.log(`Seu IMC: ${imc} - Classificação: Obesidade Grau I`)                                                // Exibe no terminar a mensagem indicando ao usuário o seu IMC e a sua classificação como obesidade grau I
} else if(imc >= 35 && imc < 40) {                                                                                  // Verifica se o cálculo de imc ficou entre 35 e 40
    console.log(`Seu IMC: ${imc} - Classificação: Obesidade Grau II`)                                               // Exibe no terminar a mensagem indicando ao usuário o seu IMC e a sua classificação como obesidade grau II
} else {                                                                                                            // Verifica se o cálculo de imc ficou acima de 40
    console.log(`Seu IMC: ${imc} - Classificação: Obesidade Grau III`)                                              // Exibe no terminar a mensagem indicando ao usuário o seu IMC e a sua classificação como obesidade grau III
}

reiniciaSistema = Number(prompt('Digite 0 (zero) para sair, ou 1 para verificar um novo IMC: '))                    // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 0) {                                                                                         // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('Não esqueça de manter sua saúde em dia!')                                                          // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                              // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                              // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                        // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                           // Encerra o loop 'while' e finaliza o programa
} else {
    console.log('Ok! Vamos começar novamente.')                                                                     // Exibe no terminar a mensagem indicando que o sistema será reiniciado                                                                    
    continue
}

}
