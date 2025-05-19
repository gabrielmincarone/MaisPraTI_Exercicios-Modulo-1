# Exercício 14 - Cálculo de Fatorial

### 📋 Visão Geral
Este programa calcula o fatorial de um número inteiro positivo fornecido pelo usuário. Ele inclui validações de entrada e permite que o usuário realize múltiplos cálculos ou saia do sistema conforme desejar.

### ✨ Funcionalidades
- Calcula o fatorial de qualquer número inteiro positivo
- Verifica se o valor digitado é um número inteiro positivo
- Permite múltiplos cálculos sem reiniciar o programa
- Oferece opção para encerrar o programa de forma elegante

### 🛠️ Como Funciona
1. O programa solicita ao usuário que digite um número inteiro positivo
2. Realiza três validações:
    - Verifica se é um número válido (não-NaN)
    - Verifica se é um número inteiro
    - Verifica se é positivo
3. Calcula o fatorial usando um loop for que multiplica todos os números de 1 até o número informado
4. Exibe o resultado no formato "O fatorial de X é Y"
5. Pergunta se o usuário deseja continuar ou sair
6. Se escolher sair, exibe mensagem de despedida e encerra após 3 segundos

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
3. Baixe o arquivo `Exercício 14 - Cálculo de Fatorial` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Cálculo de Fatorial.js).
4. Execute o programa com Node.js JavaScript RunTime.
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
