# Exercício 4 - Sistema de Pedidos de Sorvetes

### 📋 Visão Geral
Programa que simula um sistema de pedidos de sorvete em Node.js, onde o usuário pode escolher entre diferentes sabores. O programa valida a entrada do usuário e fornece respostas específicas para cada opção selecionada.

### ✨ Funcionalidades
- Menu interativo com opções de sabores de sorvete
- Validação de entrada do usuário
- Mensagens personalizadas para cada sabor selecionado
- Opção para encerrar o programa
- Encerramento automático após 3 segundos da seleção

### 🛠️ Como Funciona
1. O programa exibe um menu com 4 opções:
   - 1 para Chocolate
   - 2 para Morango
   - 3 para Creme
   - 0 para encerrar

2. O usuário digita sua escolha
3. O programa valida se a entrada é um número válido (0-3)
4. Se a entrada for inválida, exibe mensagem de erro e solicita novamente
5. Para entradas válidas:
   - Opção 0: Mensagem de despedida
   - Opção 1: Confirma pedido de chocolate
   - Opção 2: Confirma pedido de morango
   - Opção 3: Informa que o sabor creme está em falta
6. Após qualquer seleção válida, o programa encerra após 3 segundos

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
3. Baixe o arquivo `Exercício 4 - Sistema de Pedidos de Sorvetes.js` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Sistema de Pedidos de Sorvetes.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
