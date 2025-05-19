# Exercício 11 - Calculadora de Soma

### 📋 Visão Geral
Este é um programa que funciona como uma calculadora de soma interativa no terminal. Ele solicita ao usuário 5 números, realiza a soma desses valores e permite que o usuário decida se deseja continuar somando novos números ou encerrar o programa.

### ✨ Funcionalidades
- Solicita e valida a entrada de 5 números do usuário
- Calcula e exibe a soma dos números informados
- Oferece opção para reiniciar o processo ou encerrar o programa
- Valida se as entradas são números válidos
- Exibe mensagens formatadas com os números somados
- Tem um timer de encerramento elegante quando o usuário escolhe sair

### 🛠️ Como Funciona
1. O programa inicia um loop infinito (while(true))
2. ria um array vazio para armazenar os números e inicializa a variável de soma
3. Usa um loop for para coletar 5 números do usuário:
    - Converte a entrada para número
    - Valida se é um número válido (não-NaN)
    - Se inválido, pede novamente o mesmo número
4. Calcula a soma de todos os números no array
5. Exibe o resultado formatado (ex: "(1 + 2 + 3 + 4 + 5) é 15!")
6. Pergunta se o usuário deseja continuar ou sair
7. Se escolher sair (digitando 0):
    - Exibe mensagem de despedida
    - Aguarda 3 segundos antes de encerrar
8. Se escolher continuar, reinicia o processo

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
3. Baixe o arquivo `Exercício 11 - Calculadora de Soma` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Calculadora de Soma.js).
4. Execute o programa com Node.js JavaScript RunTime.
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
