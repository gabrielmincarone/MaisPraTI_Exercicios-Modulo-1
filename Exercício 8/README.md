# Exercício 8 - Ordenador de Números

### 📋 Visão Geral
Este é um programa em Node.js que solicita dois valores numéricos ao usuário e os exibe em ordem crescente. O sistema inclui validação de entrada e permite que o usuário execute múltiplas verificações ou saia do programa.

### ✨ Funcionalidades
- Validação de entrada para garantir que apenas números sejam aceitos
- Verificação para evitar que os dois valores sejam iguais
- Exibição dos números em ordem crescente
- Opção para reiniciar o sistema ou encerrar o programa
- Mensagens claras de erro e feedback para o usuário
- Encerramento elegante com mensagem de despedida

### 🛠️ Como Funciona
1. Solicita dois valores (A e B) ao usuário com validações:
    - Verifica se são números válidos
    - Garante que B seja diferente de A
2. Exibe os valores em ordem crescente usando Math.min() e Math.max()
3. Pergunta ao usuário se deseja continuar ou sair
4. Se escolher sair (digitando 0), exibe mensagem de despedida e encerra após 3 segundos

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
3. Baixe o arquivo `Exercício 8 - Ordenador de Números` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Ordenador de Números.js).
4. Execute o programa com Node.js JavaScript RunTime.
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
