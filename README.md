# To-Do List

Este é um projeto simples de uma aplicação To-Do List desenvolvida com HTML, CSS, JavaScript e Bootstrap, com o objetivo de criar e gerenciar tarefas de forma prática e responsiva. 

## Funcionalidades

- **Adicionar Tarefas:** Insira o texto de uma nova tarefa e clique em "Adicionar Tarefa" ou pressione Enter para adicioná-la.
- **Remover Tarefas:** Cada tarefa criada possui um botão de "Deletar" que permite sua remoção individual da lista.
- **Limpar Todas as Tarefas:** Limpa todas as tarefas listadas ao clicar em "Limpar Tudo".
- **Armazenamento Local:** A lista de tarefas é armazenada localmente no navegador, garantindo que as tarefas permaneçam salvas mesmo após fechar o navegador ou atualizar a página.
- **Alertas de Erro e Sucesso:** Notificações via toast informam ao usuário sobre erros (como tentar adicionar uma tarefa vazia ou duplicada) e ações bem-sucedidas (como a limpeza de tarefas).

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap 5.3**: Utilizado para estilização rápida e responsiva, incluindo componentes de botão, lista e toast.

## Estrutura do Projeto

### `index.html`

Arquivo principal que contém a estrutura HTML da aplicação e inclui os componentes visuais, como a lista de tarefas, o botão para adicionar tarefas e o botão de limpar todas as tarefas.

### `style`

Estilos personalizados para harmonizar o tema escuro da aplicação, com cores definidas para os cards, botões, e a lista de tarefas.

### `script.js`

Contém toda a lógica de interação e manipulação das tarefas, incluindo:

- **Adicionar Tarefa:** Função para adicionar uma nova tarefa à lista.
- **Renderizar Tarefas:** Função que carrega as tarefas salvas e as exibe na interface.
- **Armazenamento Local:** Funções para salvar e carregar tarefas no `localStorage` do navegador.
- **Notificações Toast:** Função `showToastMessage` que exibe alertas ao usuário de acordo com as ações realizadas.

## Instruções de Uso

1. Clone o repositório para o seu computador:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
