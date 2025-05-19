// EXERCÍCIO 06
// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync') ()                                                                                        // Importa o módulo prompt-sync e inicializa a sua função, permitindo a entrada de dados pelo usuário no terminal

while (true) {

let ladoA                                                                                                                       // Declara a variável 'ladoA' que irá armazenar o valor que o usuário digitar
let ladoB                                                                                                                       // Declara a variável 'ladoB' que irá armazenar o valor que o usuário digitar
let ladoC                                                                                                                       // Declara a variável 'ladoC' que irá armazenar o valor que o usuário digitar
let validaTriangulo                                                                                                             // Declara a variável 'validaTriangulo' que irá validar se conforme os valores inseridos pelo usuário, se forma um triangulo                                                                                     
let semiPerimetro                                                                                                               // Declara a variável 'semiPerimetro' que irá armazenar o cálculo do semi perímetro do triangulo 
let areaTriangulo                                                                                                               // Declara a variável 'areaTriangulo' que irá armazenar o cálculo da área do triangulo
let ladoMaior                                                                                                                   // Declara a variável 'ladoMaior' que irá identificar o maior lado do triangulo para justificar se não é um triangulo
let ladosMenores                                                                                                                // Declara a variável 'ladosMenores' que irá calcular a soma dos menores lados do triangulo para justificar se não é um triangulo

do {                                                                                                                            // Inicializa o loop 'do-while' que valida se os lados informados formam um triangulo
    ladoA = Number(prompt('Informar o tamanho do lado A do triangulo: '))                                                       // Iniciliaza, solicita ao usuário o tamanho do lado A do triangulo, converte para 'number' e armazena a entrada na variável 'ladoA'
    ladoB = Number(prompt('Informar o tamanho do lado B do triangulo: '))                                                       // Iniciliaza, solicita ao usuário o tamanho do lado B do triangulo, converte para 'number' e armazena a entrada na variável 'ladoB'
    ladoC = Number(prompt('Informar o tamanho do lado C do triangulo: '))                                                       // Iniciliaza, solicita ao usuário o tamanho do lado C do triangulo, converte para 'number' e armazena a entrada na variável 'ladoC'

    validaTriangulo = Boolean(ladoA < (ladoB+ladoC)) && (ladoB < (ladoA+ladoC)) && (ladoC < (ladoA+ladoB))                      // Verifica se conforme os dados informados, se forma um triangulo. A soma de dois lados menores não pode ser igual ou maior que o maior lado
    semiPerimetro = (ladoA+ladoB+ladoC)/2                                                                                       // Calcula o semiperímetro do triangulo para posteriormente calcular a área (soma dos lados dividido por 2)
    areaTriangulo = Math.sqrt(semiPerimetro*(semiPerimetro-ladoA)*(semiPerimetro-ladoB)*(semiPerimetro-ladoC)).toFixed(2)       // Calcula a área do triangulo conforme a regra geral
    ladoMaior = Math.max(ladoA, ladoB, ladoC)                                                                                   // Identifica o lado maior do triangulo para posteriormente informar ao usuário em caso de desigualdade triangular
    ladosMenores = ((ladoA+ladoB+ladoC)-ladoMaior)                                                                              // Soma os lados menores do triangilo para posteriormente informar ao usuário em caso de desigualdade triangular


    if(isNaN(ladoA && ladoB && ladoC)) {                                                                                        // Verifica se o tamanho dos lados informados são 'number'
        console.error('Um ou mais dos lados informados não é um número')                                                        // Exibe no terminal a mensagem de erro, indicando que a entrada so usuário é inválida
    }

} while(isNaN(ladoA && ladoB && ladoC))                                                                                         // Encerra o loop 'do-while' quando valida que que os lados informados formam um triangulo


if(validaTriangulo === false) {                                                                                                 // Verifica se a variável 'validaTriangulo' classificou 
    console.log(`Isto não é um triangulo, pois a soma do dois menores lados é ${ladosMenores} e o maior lado                    
tem um tamanho de ${ladoMaior}, logo, há uma desigualdade triangular`)                                                          // Informa e explica ao usuário que pelos dados informados não se forma um triangulo. 
} else if(ladoA === ladoB && ladoB === ladoC) {                                                                                 // Verifica se o triangulo é equilátero
    console.log(`Conforme os lados informados, você possui um triangulo equilatero de área ${areaTriangulo}`)                   // Informa ao usuário que é um triangulo equiláterio e qual a sua área
} else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {                                                                 // Verifica se o triangulo é escaleno
    console.log(`Conforme os lados informados, você possui um triangulo escaleno de área ${areaTriangulo}`)                     // Informa ao usuário que é um triangulo escaleno e qual a sua área
} else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {                                                              // Verifica se o triangulo é isósceles
    console.log(`Conforme os lados informados, você possui um triangulo isósceles de área ${areaTriangulo}`)                    // Informa ao usuário que é um triangulo isósceles e qual a sua área
}

reiniciaSistema = Number(prompt('Digite 0 (zero) para sair, ou qualquer número para verificar novamente um triangulo: '))       // Declara, inicializa, converte para tipo 'number' e armazena a entrada do usuário na variável 'reiniciaSistema' 
if(reiniciaSistema === 0) {                                                                                                     // Verifica se o valor armazenado em 'reiniciaSistema' é 0 (zero)
    console.log('Obrigado usar nosso classificador de triangulos!')                                                             // Exibe no terminal a mensagem de despedida
    setTimeout(() => {                                                                                                          // Agenda função para encerrar o programa em 3 segundos
        process.exit()                                                                                                          // Encerra o processo o processo e finaliza o programa
    }, 3000)                                                                                                                    // Define um atraso de 3000 milissegundos (3 segundos) antes de executar o bloco anterior
    break                                                                                                                       // Encerra o loop 'while' e finaliza o programa
} else {                                                                                                                        // Verifica se o valor armazenado em 'reiniciaSistema' é 1 (zero)
    console.log('Bora classificar e ver a área de mais um triangulo')                                                           // Exibe no terminar a mensagem indicando que o sistema será reiniciado                                                                    
    continue                                                                                                                    // Reinicia o loop 'while'
}

}