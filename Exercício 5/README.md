# Exercício 5 - Calculadora de IMC

### 📋 Visão Geral
Este programa é uma calculadora de Índice de Massa Corporal (IMC) que permite aos usuários inserir seu peso e altura para obter a classificação de acordo com os padrões de saúde.

### ✨ Funcionalidades
- Calcula o IMC com base no peso e altura fornecidos.
- Classifica o resultado em categorias como "abaixo do peso", "peso normal", "sobrepeso" e três graus de obesidade.
- Verifica se os valores inseridos são números válidos e positivos.
- Permite múltiplos cálculos sem sair do programa.
- Encerra o programa com mensagem amigável após confirmação do usuário.

### 🛠️ Como Funciona
1. O programa solicita peso (em kg) e altura (em cm).
2. Converte a altura para metros e calcula o IMC usando a fórmula: peso / (altura²).
3. Classifica o resultado em uma das categorias pré-definidas.
   - Abaixo do Peso: IMC abaixo de 18.5
   - Peso Normal: IMC entre 18.5 e 25
   - Sobrepeso: IMC entre 25 e 30
   - Obesidade Grau I: IMC entre 30 e 35
   - Obesidade Grau II: IMC entre 35 e 40
   - Obesidade Grau III: IMC acima de 40
5. Oferece opção de sair do programa ou realizar novo cálculo.
6. Se optar por sair, exibe mensagem final e encerra após 3 segundos.

### 💻 Tecnologias Utilizadas
- JavaScript/Node.js.
- Biblioteca prompt-sync para entrada de dados no terminal.

### � Requisitos
- Node.js instalado na máquina.
- Pacote prompt-sync instalado (pode ser instalado via npm).

### 🚀 Instalação e Execução
1. Certifique-se de ter o Node.js instalado (https://nodejs.org/pt/download).
2. Instale o pacote prompt-sync no **Prompt de Comando**.
```bash
npm install prompt-sync
```
3. Baixe o arquivo `Exercício 5 - Calculadora de IMC.js` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Calculadora de IMC.js).
4. Execute o programa com Node.js JavaScript RunTime.
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
