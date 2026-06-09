# MetaCLI 🎯

Um aplicativo de linha de comando (CLI) simples e eficiente para gerenciamento de metas diárias, desenvolvido em Node.js. 

Este projeto permite que você cadastre, liste, conclua e remova suas metas diretamente do terminal, salvando todo o progresso de forma persistente em um arquivo JSON.

## ✨ Funcionalidades

- **Cadastrar Metas:** Adicione novos objetivos à sua lista.
- **Listar Metas:** Visualize todas as suas metas em uma interface interativa.
- **Marcar/Desmarcar:** Alterne o status das suas metas entre concluídas e abertas.
- **Filtrar Metas:** Visualize separadamente apenas as metas **Realizadas** ou as metas **Abertas**.
- **Remover Metas:** Limpe sua lista deletando metas que não fazem mais sentido.
- **Persistência de Dados:** Suas metas são salvas automaticamente em um arquivo `metas.json`, garantindo que você não perca seu progresso ao fechar o aplicativo.

## 🚀 Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript.
- **Inquirer.js:** Biblioteca para criar interfaces de linha de comando interativas (prompts, checkboxes, selects).
- **Módulo `fs` (File System):** Nativo do Node.js, utilizado para leitura e escrita do arquivo `metas.json`.

## 🛠️ Como executar o projeto

### Pré-requisitos
Antes de começar, você vai precisar ter o Node.js instalado na sua máquina.

### Passo a passo

1. Clone este repositório ou extraia os arquivos do projeto para uma pasta na sua máquina.
2. Abra o terminal (ou prompt de comando) navegando até a pasta raiz do projeto.
3. Instale as dependências executando o comando abaixo:
   ```bash
    npm install
4. Inicie o aplicativo com o comando:
   ```bash
    node index.js
5. Navegue pelo menu utilizando as setas do teclado, a tecla Espaço para marcar ou desmarcar opções e Enter para confirmar sua escolha.
