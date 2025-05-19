# Exercício 1 - Verificador de Número Par ou Ímpar

### 📋 Visão Geral
Programa em JavaScript/Node.js que verifica se um número inteiro fornecido pelo usuário é par ou ímpar. O código inclui validação de entrada para garantir que o usuário digite apenas números inteiros válidos.

### ✨ Funcionalidades
- Validação de entrada para números inteiros
- Tratamento de erros para entradas inválidas (não numéricas ou números decimais)
- Verificação matemática de par/ímpar usando operador módulo (%)
- Interface interativa via prompt de comando
- Mensagens de erro descritivas

### 🛠️ Como Funciona
1. O programa inicia um loop do-while que só encerra quando o usuário fornece o número 0 (zero) 
2. A cada iteração:
    - Solicita um número ao usuário via prompt
    - Converte a entrada para número
    - Verifica se é um número válido (não NaN)
    - Verifica se é um número inteiro (sem decimais)
3. Exibe mensagens de erro específicas conforme o tipo de problema
4. Após receber um número válido, verifica se é par ou ímpar usando o operador módulo (% 2)
5. Exibe o resultado para o usuário

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
3. Baixe o arquivo `Exercício 1 - Verificador Par ou Impar` no repositório do GitHub ou copie o código e salve em um arquivo com extensão .js (por exemplo, verificador-par-impar.js);
4. Execute o programa com Node.js JavaScript RunTime;
5. Siga as instruções no terminal para inserir um número inteiro e ver o resultado.
