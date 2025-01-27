// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome ao array e limpa o campo de entrada
    amigos.push(nomeAmigo);
    inputAmigo.value = "";

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botão para remover o nome
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.classList.add("button-remove");
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na tela
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
