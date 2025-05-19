# Exercício 7 - Sistema de Compra de Maçãs

### 📋 Visão Geral
Este é um sistema de compra de maçãs que calcula automaticamente descontos quando aplicável e gera um resumo da compra em formato de tabela. O sistema foi desenvolvido para operar via terminal/console.

### ✨ Funcionalidades
- Valida a entrada do usuário para garantir que apenas quantidades válidas sejam aceitas
- Calcula o valor total da compra de maçãs
- Aplica desconto de 5% para compras de 12 ou mais unidades
- Exibe um resumo detalhado da compra em formato de tabela
- Permite realizar múltiplas compras em sequência
- Oferece opção de saída controlada

### 🛠️ Como Funciona
1. O sistema solicita a quantidade de maçãs compradas
2. Valida se a entrada é um número positivo
3. Calcula:
    - Valor unitário (R$ 0,30 por maçã)
    - Valor total sem desconto
    - Desconto (R$ 0,25 por maçã, na compra de 12 ou mais unidades)
    - Valor final a pagar
4. Exibe os dados da compra em formato de tabela
5. Pergunta se o usuário deseja fazer nova compra ou sair
6. Se escolher sair, encerra após 3 segundos

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
3. Baixe o arquivo `Exercício 7 - Sistema de Compra de Maçãs` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, Sistema de Compra de Maçãs.js).
4. Execute o programa com Node.js JavaScript RunTime.
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
