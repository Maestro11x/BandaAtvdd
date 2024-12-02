function mostrarMaisNoticias() {
    alert('Carregando mais notícias...');
}

// Array de notícias fictícias
const noticias = [
    "Notícia 1: Novo álbum chegando!",
    "Notícia 2: Show esgotado no RJ!",
    "Notícia 3: Banda em turnê internacional!",
    "Notícia 4: Parceria com novo produtor!",
    "Notícia 5: Clipe bate recordes no YouTube!"
];

// Função para carregar mais notícias
function mostrarMaisNoticias() {
    const noticiasContainer = document.querySelector("#noticias");
    noticias.forEach((noticia) => {
        const div = document.createElement("div"); // Cria um novo elemento <div>
        div.classList.add("noticia"); // Adiciona a classe "noticia"
        div.innerHTML = `<h3>${noticia}</h3>`;
        noticiasContainer.appendChild(div); // Adiciona o <div> ao container de notícias
    });
}
const carrinho = [];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    alert(`Produto "${produto}" foi adicionado ao carrinho!`);
}