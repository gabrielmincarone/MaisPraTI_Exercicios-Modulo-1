# Exercício 15 - Sequência Fibonacci

### 📋 Visão Geral
Este programa calcula e exibe a sequência de Fibonacci conforme a quantidade de linhas especificada pelo usuário. 

### ✨ Funcionalidades
- Calcula a sequência de Fibonacci em tempo real
- Exibe cada passo do cálculo de forma formatada
- Permite múltiplas execuções sem sair do programa
- Interface interativa via terminal
- Mensagem personalizada ao encerrar

### 🛠️ Como Funciona
1. O programa inicia importando o módulo prompt-sync para interação com o usuário
2. Entra em um loop infinito que só é quebrado quando o usuário digita "sair"
3. Solicita ao usuário o número de linhas da sequência Fibonacci que deseja visualizar
4. Calcula e exibe cada termo da sequência no formato: n[XX] X + X = X
5. Após exibir a sequência, pergunta se o usuário deseja continuar ou sair
6. Se escolhido sair, exibe mensagem de despedida e encerra após 3 segundos

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
3. Baixe o arquivo `Exercício 15 - Sequência Fibonacci` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Sequência Fibonacci.js).
4. Execute o programa com Node.js JavaScript RunTime.
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
