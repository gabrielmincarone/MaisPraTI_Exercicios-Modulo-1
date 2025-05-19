# Exercício 3 - Sistema de Verificação de Notas Escolares

### 📋 Visão Geral
Programa em Node.js que classifica pessoas em categorias de idade (criança, adolescente, adulto ou idoso) com base na idade fornecida pelo usuário.

### ✨ Funcionalidades
- Classifica pessoas em 4 categorias etárias:
  - Criança (0-12 anos)
  - Adolescente (13-17 anos)
  - Adulto (18-59 anos)
  - Idoso (60+ anos)
- Valida a entrada do usuário para garantir que apenas números sejam aceitos
- Oferece uma opção para sair do programa (digitando 0)
- Exibe mensagem de despedida com timer de 3 segundos antes de encerrar

### 🛠️ Como Funciona
1. O programa inicia um loop infinito que se encerra quando o usuário fornece o número 0 (zero)
2. Solicita ao usuário que digite uma idade ou 0 para sair
   - Valida se a entrada é um número válido
3. Se for 0, encerra o programa após 3 segundos
4. Caso contrário, classifica a idade em uma das categorias e exibe o resultado
5. Repete o processo até que o usuário decida sair

### 💻 Tecnologias Utilizadas
- JavaScript/Node.js
- Biblioteca prompt-sync para entrada de dados no terminal

### � Requisitos
- Node.js instalado na máquina
- Pacote prompt-sync instalado (pode ser instalado via npm)

### 🚀 Instalação e Execução
1. Certifique-se de ter o Node.js instalado (https://nodejs.org/pt/download);
2. Instale o pacote prompt-sync no **Prompt de Comando**;
```bash
npm install prompt-sync
```
3. Baixe o arquivo `Exercício 3 - Sistema de Verificação de Notas Escolares.js` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Classificador de Categorias por Idades.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
