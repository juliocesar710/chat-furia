# Chat Fúria

## 📋 Objetivo do Projeto

O **Chat Fúria** é uma aplicação web interativa que simula um chatbot para a organização FURIA Esports. O objetivo principal é fornecer informações rápidas e úteis sobre o universo FURIA, como próximos jogos, elenco, eventos, loja oficial e muito mais. A aplicação também permite alternar entre temas claro e escuro para melhorar a experiência do usuário.

---

## 🛠️ Técnicas e Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e técnicas:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas para navegação entre páginas.
- **Styled Components**: Estilização de componentes utilizando CSS-in-JS.
- **Vite**: Ferramenta de build para desenvolvimento rápido e eficiente.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Context API**: Gerenciamento de estado global para alternância de temas.
- **JSON Dinâmico**: Carregamento dinâmico de comandos e respostas utilizando `import.meta.glob`.

---
## 📂 Estrutura de Pastas

A estrutura do projeto está organizada da seguinte forma:



```
src/
├── assets/                # Imagens e ícones utilizados no projeto
├── components/            # Componentes reutilizáveis
├── context/               # Contextos globais para gerenciamento de estado
├── data/                  # Dados e comandos do chatbot
│   ├── commands/          # Arquivos JSON com os comandos e respostas
├── pages/                 # Páginas principais da aplicação
├── routes/                # Configuração de rotas
├── themes/                # Temas claro e escuro
├── utils/                 # Componentes utilitários
├── App.jsx                # Componente principal da aplicação
├── App.css                # Estilos globais da aplicação
├── index.css              # Configuração do Tailwind CSS
└── main.jsx               # Ponto de entrada da aplicação
```



---

## 🚀 Como Executar o Projeto

1. Instale as dependências:
   ```
   npm install
   ```

2. Rode a aplicação:
   ```
   npm run dev
   ```



   # Detalhes do Funcionamento da Aplicação

## 🌟 Funcionalidades Principais

1. **Chatbot Interativo**:
   - O chatbot responde a comandos específicos, como:
     - `/jogos`: Exibe informações sobre os próximos jogos da FURIA Esports.
     - `/jogadores`: Mostra detalhes sobre os jogadores do time.
     - `/loja`: Fornece links para a loja oficial.
   - As respostas são carregadas dinamicamente a partir de arquivos JSON localizados na pasta `src/data/commands`.

2. **Alternância de Temas**:
   - A aplicação permite alternar entre temas claro e escuro.
   - Essa funcionalidade é gerenciada pelo **Context API**, que mantém o estado global do tema.
   - Os estilos dos temas estão definidos na pasta `src/themes`.

3. **Paleta de Comandos**:
   - Uma interface interativa que ajuda o usuário a explorar os comandos disponíveis no chatbot.
   - Implementada como um componente reutilizável na pasta `src/components`.

4. **Carregamento Dinâmico de Dados**:
   - Utiliza a funcionalidade `import.meta.glob` do Vite para carregar dinamicamente os arquivos JSON com os comandos e respostas.
   - Isso permite que novos comandos sejam adicionados facilmente sem alterar o código principal.

---

## 🛠️ Fluxo de Funcionamento

1. **Entrada do Usuário**:
   - O usuário digita um comando no campo de entrada do chatbot.
   - O comando é processado e comparado com os dados disponíveis nos arquivos JSON.

2. **Processamento de Dados**:
   - O sistema verifica o comando no JSON correspondente e retorna a resposta apropriada.
   - Caso o comando não seja reconhecido, uma mensagem padrão é exibida.

3. **Renderização da Resposta**:
   - A resposta é exibida no chat utilizando componentes estilizados com **Styled Components** e **Tailwind CSS**.

4. **Navegação**:
   - A aplicação utiliza o **React Router** para gerenciar a navegação entre diferentes páginas, como a página inicial e a página do chatbot.

---

## 🚀 Benefícios da Arquitetura

- **Modularidade**: A estrutura de pastas bem definida facilita a manutenção e expansão do projeto.
- **Reutilização de Componentes**: Componentes reutilizáveis permitem consistência e reduzem a duplicação de código.
- **Desempenho**: O uso do Vite garante um ambiente de desenvolvimento rápido e eficiente.
- **Estilização Flexível**: A combinação de **Styled Components** e **Tailwind CSS** oferece flexibilidade na criação de interfaces modernas e responsivas.
