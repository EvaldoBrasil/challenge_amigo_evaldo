# Amigo Secreto ✨

Este projeto é uma aplicação simples desenvolvida em **JavaScript**, **HTML** e **CSS** que permite organizar um sorteio de "Amigo Secreto". Os usuários podem adicionar nomes a uma lista, visualizar os participantes e realizar um sorteio aleatório diretamente na página.

## 🚀 Funcionalidades

- **Adicionar nomes:** Os usuários podem digitar o nome de um amigo e adicioná-lo à lista clicando em "Adicionar".
- **Validar entrada:** O sistema exibe um alerta caso o campo de texto esteja vazio, garantindo que apenas nomes válidos sejam inseridos.
- **Visualizar lista:** Todos os nomes adicionados são exibidos em uma lista.
- **Remover nomes:** Opcionalmente, é possível remover nomes da lista.
- **Sorteio aleatório:** Com um clique, um dos nomes é sorteado e exibido na tela.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para estilizar a interface.
- **JavaScript**: Para implementar a lógica da aplicação.

## 📂 Estrutura do Projeto

```plaintext
/
├── index.html      # Estrutura da interface
├── style.css       # Estilos da aplicação
└── app.js          # Lógica em JavaScript
```

## 📚 Como Usar

1. **Adicionar um nome:**

   - Digite um nome no campo de entrada.
   - Clique no botão "Adicionar".
   - O nome aparecerá na lista.

2. **Remover um nome (opcional):**

   - Clique no botão "Remover" ao lado do nome para excluí-lo.

3. **Realizar o sorteio:**

   - Clique no botão "Sortear Amigo".
   - Um nome será sorteado aleatoriamente e exibido na tela.

## 🔧 Como Instalar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd amigo-secreto
   ```

3. Abra o arquivo `index.html` no navegador.

## 🔎 Visão Geral

O sistema valida as entradas, garantindo que o sorteio seja realizado apenas com uma lista válida de participantes. A lógica para o sorteio usa `Math.random()` e `Math.floor()` para selecionar aleatoriamente um nome da lista.

## 🙏 Contribuições

Contribuições são bem-vindas! Caso encontre problemas ou queira sugerir melhorias, fique à vontade para abrir uma issue ou enviar um pull request.

## 🌐 Licença

Este projeto está licenciado sob a [Open License](LICENSE).

---

Divirta-se organizando seu sorteio de Amigo Secreto! 🎁

